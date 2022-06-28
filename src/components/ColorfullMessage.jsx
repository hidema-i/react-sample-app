import React from "react";

const ColorfullMessage = (props) =>{
  //分割代入
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize:'18px'
  };
  return(
    <p style={contentStyle}>{children}</p>

  )
}

export default ColorfullMessage;
