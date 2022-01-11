import React, { useEffect, useState } from "react";
import millify from "millify";

function Post({ post }) {
  const [isImage, setIsImage] = useState(false);
  const score = millify(post.data.score, {
    precision: 1,
    lowercase: true,
  });
  useEffect(() => {
    const url = post.data.url;
    const lastFour = url.substr(url.length - 4);
    if (lastFour.includes("png")) {
      setIsImage(true);
    } else if (lastFour.includes("jpg")) {
      setIsImage(true);
    } else if (lastFour.includes("jpeg")) {
      setIsImage(true);
    } else {
      setIsImage(false);
    }
  }, []);

  return (
    <div className=" w-full h-full transition-all flex flex-col items-start  cursor-pointer bg-slate-800 border border-slate-700 rounded-sm p-2 ">
      <div className="flex ">
        <h5 className="text-xs">{post.data.subreddit_name_prefixed}</h5>
        <h5 className="text-xs text-rg px-1  ">posted by {post.data.author}</h5>
      </div>
      <div className="mt-0.25 ">
        <h1 className="text-sm">{post.data.title}</h1>
        <h2 className="text-xs ">
          {post.data.is_video ? (
            <a
              href={post.data.media.reddit_video.scrubber_media_url}
              rel="noreferrer noopener"
              className="text-xs"
            >
              {post.data.media.reddit_video.scrubber_media_url}
            </a>
          ) : (
            ""
          )}

          {isImage ? (
            <div className="mt-2">
              <img src={post.data.url} />
            </div>
          ) : (
            <a
              href={post.data.url}
              target="_blank"
              rel="noreferrer noopener"
              className="text-xs"
            ></a>
          )}
        </h2>
      </div>
      <div className="flex items-center justify-center mt-0.25 ">
        <h2 className="text-xs">{score}</h2>
      </div>
    </div>
  );
}

export default Post;
