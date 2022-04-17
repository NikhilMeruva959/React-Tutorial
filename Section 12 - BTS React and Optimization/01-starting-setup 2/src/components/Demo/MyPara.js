import React from "react";

const MyPara = (props) => {
    console.log("MyPAra Running")
    return <p>{props.children}</p>;
};

export default MyPara;