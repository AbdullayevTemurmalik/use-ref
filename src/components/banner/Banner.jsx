import React from "react";
import "./Banner.css";
import { useSelector } from "react-redux";

const Banner = () => {
  const data = useSelector((state) => state.yourData.value);

  return (
    <div className="banner">
      <h1>Banner</h1>
      {data ? (
        <p>
          Navbar’dan kelgan ma’lumot: <b>{data}</b>
        </p>
      ) : (
        <p>Hozircha ma’lumot yo‘q</p>
      )}
    </div>
  );
};

export default Banner;
