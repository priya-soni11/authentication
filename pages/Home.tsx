import React, { useEffect } from "react";
import Style from "../styles/Home.module.css";
import { useRouter } from "next/navigation";

const Home = () => {
  const { push } = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      push("/");
    }
  });

  const handleClick = () => {
    localStorage.removeItem("token");
    push("/");
  };
  return (
    <div className={Style.main}>
      <button className={Style.SubmitButton} onClick={handleClick}>
        LogOut
      </button>
    </div>
  );
};

export default Home;
