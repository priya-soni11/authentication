import * as YUP from "yup";

const passwordRegexExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
export const validationSchema = YUP.object({
  email: YUP.string()
    .required("Enter Your email")
    .email("Please Enter Valid Email"),
  password: YUP.string()
    .required("Enter Your Password")
    .matches(passwordRegexExp, "Please Enter Valid Password"),
});
