import React, { useState } from "react";
import Style from "../styles/Login.module.css";
import Image from "next/image";
import { Formik, Form, ErrorMessage, FastField } from "formik";
import TextError from "@/component/TextError";
import { validationSchema } from "../component/Validationschema";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import "../component/Fortawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faGoogle,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { push } = useRouter();

  const Value = {
    email: "",
    password: "",
  };

  const onSubmit = (values: any) => {
    console.log(values, "valies");
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        const user = res.user;
        const accessToken = await user.getIdToken();
        console.log(accessToken, "token");
        localStorage.setItem("token", await user.getIdToken());
        push("/Home");
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  return (
    <div className={Style.main}>
      <div className={Style.loginform}>
        <Formik
          initialValues={Value}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <h1>Login</h1>
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
            <button className={Style.loginbtn} type="submit">
              Login
            </button>
            <a className={Style.resetpsw} href="#">
              Forgot your password?
            </a>
            <div className={Style.seperator}>
              <b>or</b>
            </div>
            <p>Sign in Via</p>
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
              <Link className={Style.resetpsw} href="/Signup">
                Need an Account? Sign Up
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
