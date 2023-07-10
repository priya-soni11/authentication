import React, { useState } from "react";
import Style from "../styles/Signup.module.css";
import Image from "next/image";
import Link from "next/link";
import { Formik, Form, ErrorMessage, FastField } from "formik";
import TextError from "@/component/TextError";
import { validationSchema } from "../component/Validationschema";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { signIn } from "next-auth/react";
import "../component/Fortawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faGithub,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/navigation";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { push } = useRouter();
  const Value = {
    name: "",
    email: "",
    password: "",
  };

  const onSubmit = (values: any) => {
    console.log(values, "valies");
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        push("/Login");
        console.log(res);
      })
      .catch((err) => {
        console.log("Error", err);
        if (err.code === "auth/email-already-in-use") {
          alert("email already in use!");
        } else if (err.code === "auth/network-request-failed") {
          alert("without network connection!");
        } else if (err.code === "auth/invalid-email") {
          alert("invalid E-mail!");
        }
      });
  };

  return (
    <div className={Style.main}>
      <div className={Style.signupform}>
        <Formik
          initialValues={Value}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <h1>Sign Up</h1>
            <div className={Style.imgcontainer}>
              <Image
                src="https://img1.freepng.fr/20180331/ffe/kisspng-computer-icons-user-clip-art-user-5abf13dad7aed4.5909364715224718988835.jpg"
                width={200}
                height={200}
                alt="Avatar"
                className={Style.avatar}
              />
            </div>
            <div className={Style.formgroup}>
              <FastField
                type="text"
                name="name"
                placeholder="Full Name"
                value={name}
              />
              <span className={Style.inputicon}>
                <FontAwesomeIcon icon={faUser} />
              </span>
              <ErrorMessage name="name" component={TextError} />
            </div>
            <div className={Style.formgroup}>
              <FastField
                type="email"
                name="email"
                placeholder="E-mail Address"
                value={email}
              />
              <span className={Style.inputicon}>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <ErrorMessage name="email" component={TextError} />
            </div>
            <div className={Style.formgroup}>
              <FastField
                type="password"
                name="password"
                placeholder="Password"
                value={password}
              />
              <span className={Style.inputicon}>
                <FontAwesomeIcon icon={faLock} />
              </span>
              <ErrorMessage name="password" component={TextError} />
            </div>
            <button className={Style.signupbtn} type="submit">
              Sign Up
            </button>
            <Link href={"/"} className={Style.resetpsw}>
              Forgot your password?
            </Link>
            <div className={Style.seperator}>
              <b>or</b>
            </div>
            <p>Sign Up Via</p>

            <div className={Style.socialicon}>
              <button type="button" onClick={() => signIn("facebook")}>
                <FontAwesomeIcon icon={faFacebook} />
              </button>
              <button type="button" onClick={() => signIn("github")}>
                <FontAwesomeIcon icon={faGithub} />
              </button>
              <button type="button" onClick={() => signIn("google")}>
                <FontAwesomeIcon icon={faGoogle} />
              </button>
              <button type="button" onClick={() => signIn("apple")}>
                <FontAwesomeIcon icon={faApple} />
              </button>
              <Link className={Style.resetpsw} href="/Login">
                Already have an Account? Sign In
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
