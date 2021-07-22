import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreator } from "../../../Counter/action";

export const TvRemote = () => {
  const [tvOn, setTvOn] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setTvOn(!tvOn);
  };

  useEffect(() => {
    let powerInterval;
    if (tvOn) {
      powerInterval = setInterval(
        () => dispatch(actionCreator.addFloor8()),
        1000
      );
    } else {
      clearInterval(powerInterval);
    }
  }, [tvOn])

  return (
    <div
      onClick={handleClick}
      style={{
        height: "20px",
        width: "20px",
        backgroundColor: tvOn ? "green" : "red",
        borderRadius: "10px",
        marginTop: "10px",
        marginLeft: "40%",
      }}
    />
  );
};

export default TvRemote;
