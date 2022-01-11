import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className=" px-3 flex items-center bg-rdg p-2 border-b-1 justify-between ">
      <Link to="/">
        {" "}
        <div className="flex items-center">
          <img src="logo.svg" alt="reddit logo" width={20} className=" " />
          <img
            src="reddit.svg"
            alt="reddit logo text"
            width={50}
            className="px-0.5  invisible sm:visible"
          />
        </div>
      </Link>
      <div className="flex ">
        <img src="plus.svg" alt="plus" className="cursor-pointer px-1" />
        <img src="bell.svg" alt="bell" className="cursor-pointer px-1" />
        <div className="flex border-rdg cursor-pointer hover:border-rg rounded px--1">
          <img src="avatar.png" alt="avatar" className="  px-1 " width={25} />{" "}
          <img src="down-arrow.svg" width={10} alt="profile expander button" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
