import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Weather from "../weather/Weather";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) return navigate("/");
  }, [user]);
  return (
    <>
      <Weather />
      <div className='box'>
          <h2 className='box-title'>News</h2>
          <rssapp-wall id="cn6ENfh0uVidcXR4"></rssapp-wall>
      </div>
      <button className="dashboard__btn" onClick={logout}>
          Logout
      </button>
    </>
  )
}

export default Dashboard;