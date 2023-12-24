import React from "react";

const Sidebar = () => {
  return (
    <div className="p-5 w-48 shadow-lg">
      <h1 className="font-bold">HOME</h1>
      <ul>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className="font-bold">Library</h1>
      <ul>
        <li>Histoty</li>
        <li>WatchLatter</li>
        <li>Likedvideo</li>
      </ul>
      <h1 className="font-bold">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Music</li>
        <li>Shopping</li>
        <li>Live</li>
        <li>Films</li>
        <li>Gaming</li>
        <li>News</li>
      </ul>
    </div>
  );
};

export default Sidebar;
