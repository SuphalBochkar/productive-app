import conversationsDB from "../models/conversationModel";
import messagesDB from "../models/messageModel";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await conversationsDB.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await conversationsDB.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new messagesDB({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messagesDB.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    const receiverSocketId = getReceiverSocketId(receiverId);

    if (receiverSocketId) {
      // io.to(<socket_id>).emit() used to send events to specific client
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }
    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller function to retrieve messages for a conversation
export const getMessages = async (req, res) => {
  try {
    // Extract receiverId from request parameters and senderId from request user
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    // Find conversation between sender and receiver, and populate messages
    const conversation = await conversationsDB
      .findOne({
        participants: { $all: [senderId, receiverId] },
      })
      .populate("messages"); // Populate messages field with actual message documents

    // If conversation doesn't exist, respond with an empty array of messages
    if (!conversation) return res.status(200).json([]);

    // Extract messages from the conversation
    const messages = conversation.messages;

    // Respond with the retrieved messages
    res.status(200).json(messages);
  } catch (error) {
    // Handle errors
    console.log("Error in getMessages controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
