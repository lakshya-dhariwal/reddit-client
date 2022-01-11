import React from "react";
import millify from "millify";

function Post({ post }) {
  const upvotes = millify(post.upvotes, {
    precision: 1,
    lowercase: true,
  });
  return (
    <div className=" w-full sm:w-2/3 m-2 flex flex-col my-1 items-start justify-center bg-rdg border border-rlg rounded-sm p-2 hover:border-rg text-rw">
      <div className="flex ">
        <h5 className="text-xs">{post.subreddit}</h5>
        <h5 className="text-xs text-rg px-1  ">posted by {post.author}</h5>
      </div>
      <div className="">
        <h1 className="text-sm">{post.title}</h1>
      </div>
      <div className="flex items-center justify-center mt-1 mx-1">
        <h2 className="text-xs">{upvotes}</h2>
        <img
          src="upvote.svg"
          className=" pointer"
          width={10}
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
}

export default Post;
