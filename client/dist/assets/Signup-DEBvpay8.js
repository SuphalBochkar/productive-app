import{j as e,u as y,r as t,a as b,b as C,_ as u}from"./index-DvsKKoBf.js";import{H as I,S as P,I as w,a as v,B as S,G as E,C as A}from"./InputPassword-CK_9PAij.js";const k=()=>e.jsx("div",{className:"h-full w-full p-5",children:e.jsx("img",{src:"../src/assets/img2.png",className:"h-full w-full object-cover rounded-3xl"})}),H=()=>{const o=y(),[l,r]=t.useState(!1),{setAuthUser:i}=b();return{loading:l,setSignup:async(f,m,x,c,n)=>{if(U(f,m,x,c,n)){r(!0);try{const s=await C.post("/user/signup",{username:f,email:m,password:x,confirmPassword:c});console.log(s.data),localStorage.setItem("jwt",s.data.token),localStorage.setItem("user",JSON.stringify(s.data.user)),i(s.data.token),u.success(s.data.msg),o("/myspace")}catch(s){s.response?(n(s.response.data.msg||"An error occurred"),u.error(s.response.data.msg||"An error occurred",{duration:600})):s.request?(n("No response received from server"),u.error("No response received from server",{duration:600})):(n("Error: "+s.message),u.error("Error: "+s.message,{duration:600}))}finally{r(!1)}}}}};function U(o,l,r,i,d){return!o||!l||!r||!i?(d("Please fill in all fields"),u.error("Please fill in all fields"),!1):!0}const B=()=>{y();const[o,l]=t.useState(""),[r,i]=t.useState(""),[d,f]=t.useState(""),[m,x]=t.useState(""),[c,n]=t.useState(""),{loading:p,setSignup:s}=H(),g=(a,h)=>{const j=a.target.value;h==="username"?l(j):h==="email"?i(j):h==="password"?f(j):h==="conPassword"&&x(j)},N=async a=>{a.preventDefault(),await s(o,r,d,m,n)};return e.jsx("div",{className:"h-full flex justify-start",children:e.jsxs("div",{className:"flex flex-col justify-around",children:[e.jsxs("div",{children:[e.jsx(I,{label:"Hearty Welcome"}),e.jsx(P,{label:"Create your new account"}),e.jsxs("div",{className:"flex justify-center",children:[c&&e.jsx("span",{className:"text-red-500 absolute",children:c})," "]}),e.jsx(w,{head:"Username",holder:"Enter your username *",change:a=>g(a,"username")}),e.jsx(w,{head:"Email",holder:"Enter your email *",change:a=>g(a,"email")}),e.jsx(v,{head:"Password",holder:"Enter your new password *",change:a=>g(a,"password")}),e.jsx(v,{head:"Confirm Password",holder:"Confirm your password *",change:a=>g(a,"conPassword")}),e.jsx(S,{label:"Sign Up",load:p,click:N}),e.jsx(S,{label:"Continue with Google",icon:e.jsx(E,{}),load:p})]}),e.jsx("div",{children:e.jsx(A,{label:"Already have an account ?",linkText:"Sign In",to:"/signin"})})]})})},R=()=>e.jsxs("div",{className:"flex h-screen w-full",children:[e.jsx("div",{className:"w-[80vw] h-screen",children:e.jsx(k,{})}),e.jsx("div",{className:"w-full flex justify-center px-10 py-5 ",children:e.jsx("div",{className:"w-full flex justify-center bg-slate-50 rounded-2xl",children:e.jsx(B,{})})})]});export{R as default};
