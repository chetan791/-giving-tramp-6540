import React from "react";

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      style={{
        backgroundColor: "black",
        padding: "10px",
        zIndex: "1",
        borderRadius: "50%",
      }}
      className={className}
      onClick={onClick}
    >
      <i className="fa fa-angle-right"></i>
    </div>
  );
};

export default CustomNextArrow;
