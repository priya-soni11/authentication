import React from "react";
import Style from "../styles/Login.module.css";

function TextError(props: any) {
  return <h4 className={Style.error}>{props.children}</h4>;
}

export default TextError;
