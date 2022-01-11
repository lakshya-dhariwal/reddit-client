import React, { useEffect, useState } from "react";
import SamplePosts from "../data/sampleposts.js";
import { v4 as uuid } from "uuid";
import Post from "./Post.js";

function Home() {
  const [posts, setPosts] = useState();
  const [after, setAfter] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(async () => {
    try {
      const api = "https://www.reddit.com/";
      const subreddit = "r/popular";
      const response = await fetch(`${api}${subreddit}/top.json?limit=100`);
      const json = await response.json();
      console.log(json.data.children);
      setPosts(json.data.children);
      setAfter(json.data.after);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="flex items-center justify-center m-1 mr-3 ">
      <div className="grid grid-cols-1  row-start-auto row-end-auto sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-3 ">
        {isLoading ? (
          <div className=" flex justify-center flex-col items-center w-5/6 h-5/6 my-20">
            <img src="loading.gif" width={100} alt="loader" />
          </div>
        ) : (
          posts.map((post) => {
            return <Post key={uuid()} post={post} />;
          })
        )}
        {}
      </div>
    </div>
  );
}

export default Home;
