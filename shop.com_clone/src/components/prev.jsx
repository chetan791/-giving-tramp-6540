import React from "react";

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      style={{
        marginLeft: "10px",
        backgroundColor: "black",
        padding: "10px",
        zIndex: "1",
        borderRadius: "50%",
      }}
      className={className}
      onClick={onClick}
    >
      <i className="fa fa-angle-left"></i>
    </div>
  );
};

export default CustomPrevArrow;
