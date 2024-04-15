import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const MessageSkeleton = ({ n }) => {
  return Array(n)
    .fill(0)
    .map((_, i) => (
      <SkeletonTheme baseColor="#cacccf" highlightColor="#e6e3e3">
        <div className="flex m-1 py-3 px-5 rounded-lg items-center">
          <Skeleton circle width={40} height={40} className="mr-3" />
          <div className="text-lg font-bold">
            <Skeleton width={270} height={20} />
          </div>
        </div>
      </SkeletonTheme>
    ));
};

export default MessageSkeleton;
