import React from "react";
import Post from "./Post.js";
function Home() {
  const posts = [
    {
      title:
        "Put in my two-weeks notice, supervisor switched up my schedule so I work every day until my last day, and by myself with no days off until then.",
      type: "text",
      body: "See title. Put in my two weeks notice, and After some half-hearted attempts to make me stay, they’ve decided to punish me for leaving their company it feels like. I’m not one to shy from more work & overtime, but this is ridiculous. I have my normal days off and I have things planned on those days because I work swings and a lot of times mixed swing & graveyard, and I usually sleep during my workdays if I’m not working. I looked at my new schedule and I’m working 8 or 12 hour shifts everyday until my last day, with no days off until then. I questioned my supervisor about this, and he texted me that there are “no normal days off” and he tries to kee",
      upvotes: 20000,
      author: "u/ThekittensAreMelting",
      subreddit: "r/antiwork",
    },
    {
      title: "What’s your response to “fuck you”?",
      type: "none",
      body: "",
      upvotes: 25000,
      author: "u/The123",
      subreddit: "r/askreddit",
    },
    {
      title:
        "Put in my two-weeks notice, supervisor switched up my schedule so I work every day until my last day, and by myself with no days off until then.",
      type: "image",
      body: "https://preview.redd.it/cgzeo8ztqga81.jpg?width=640&crop=smart&auto=webp&s=e1251c908facf262c7bb06a1058a29b706e8da6b",
      upvotes: 24300,
      author: "u/kot",
      subreddit: "r/itookapicture",
    },
  ];
  return (
    <div className="flex flex-col items-center   ">
      {posts.map((post) => {
        return <Post post={post} />;
      })}
    </div>
  );
}

export default Home;
