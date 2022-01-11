import React from "react";
import millify from "millify";

function Post({ post }) {
  const score = millify(post.data.score, {
    precision: 1,
    lowercase: true,
  });
  return (
    <div className=" w-full h-fit transition-all flex flex-col items-start  cursor-pointer bg-slate-800 border border-slate-700 rounded-sm p-2 ">
      <div className="flex ">
        <h5 className="text-xs">{post.data.subreddit_name_prefixed}</h5>
        <h5 className="text-xs text-rg px-1  ">posted by {post.data.author}</h5>
      </div>
      <div className="mt-0.25 ">
        <h1 className="text-sm">{post.data.title}</h1>
      </div>
      <div className="flex items-center justify-center mt-0.25 ">
        <h2 className="text-xs">{score}</h2>
      </div>
    </div>
  );
}

export default Post;
