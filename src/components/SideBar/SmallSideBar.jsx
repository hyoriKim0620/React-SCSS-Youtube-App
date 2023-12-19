import React from "react";
import {
  AiFillCompass,
  AiFillHome,
  AiFillSetting,
  AiFillLike,
} from "react-icons/ai";
import { MdSubscriptions, MdVideoLibrary, MdWatchLater } from "react-icons/md";
import { RiFlagFill, RiHistoryLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const SmallSideBar = () => {
  return (
    <aside className="small_sidebar">
      <div className="small_sidebar_container">
        <Link to="/" data-for="sidebar" data-tip="Home">
          <div className="sidebar_icon_container">
            <AiFillHome size={23} className="sidebar_icon" />
            <h4 className="sidebar_text">Home</h4>
          </div>
        </Link>
        <Link to="/feed/explore" data-for="sidebar" data-tip="Explore">
          <div className="sidebar_icon_container">
            <AiFillCompass size={23} className="sidebar_icon" />
            <h4 className="sidebar_text">Explore</h4>
          </div>
        </Link>
        <Link
          to="/feed/subscriptions"
          data-for="sidebar"
          data-tip="Subscriptions"
        >
          <div className="sidebar_icon_container">
            <MdSubscriptions size={23} className="sidebar_icon" />
            <h4 className="sidebar_text">Subscriptions</h4>
          </div>
        </Link>
      </div>
      <div className="small_sidebar_container">
        <Link to="/feed/library" data-for="sidebar" data-tip="Library">
          <div className="sidebar_icon_container">
            <MdVideoLibrary size={23} className="sidebar_icon" />
            <h4 className="sidebar_text">Library</h4>
          </div>
        </Link>
        <Link to="/feed/history" data-for="sidebar" data-tip="History">
          <div className="sidebar_icon_container">
            <RiHistoryLine size={23} className="sidebar_icon" />
            <h4 className="sidebar_text">History</h4>
          </div>
        </Link>
        <Link to="/watchLateList" data-for="sidebar" data-tip="Watch later">
          <div className="sidebar_icon_container">
            <MdWatchLater size={23} className="sidebar_icon" />
            <h4 className="sidebar_text">Watch later</h4>
          </div>
        </Link>
        <Link to="/likedVideosList" data-for="sidebar" data-tip="Liked videos">
          <div className="sidebar_icon_container">
            <AiFillLike size={23} className="sidebar_icon" />
            <h4 className="sidebar_text">Liked videos</h4>
          </div>
        </Link>
      </div>
      <div className="small_sidebar_container">
        <Link to="/settings" data-for="sidebar" data-tip="Settings">
          <div className="sidebar_icon_container">
            <AiFillSetting size={23} className="sidebar_icon" />
            <h4 className="sidebar_text">Settings</h4>
          </div>
        </Link>
        <Link to="/report/history" data-for="sidebar" data-tip="Report history">
          <div className="sidebar_icon_container">
            <RiFlagFill size={23} className="sidebar_icon" />
            <h4 className="sidebar_text">Report history</h4>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default SmallSideBar;
