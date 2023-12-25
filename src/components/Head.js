import React from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg col-span-1">
      {/* left side */}
      <div className="flex">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />

        <img
          className="h-8 mx-2"
          alt="youtube-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVL9tR5NZx5X5Nb2P6yerlgN0IEvBe1HCu-zprEmrL&s"
        />
      </div>
      {/* middle side */}

      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 py-2 rounded-l-full"
          type="text"
        />
        <button className=" border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100 ">
          🔍
        </button>
      </div>
      {/*right side  */}
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        />
      </div>
    </div>
  );
};

export default head;
