import { useState } from "react";
import { Login } from "src/components";
import { setValueForState } from "src/utils/setValueForState";
import { useMutation } from "@apollo/client";
import { LOGIN } from "src/graphql/login";
import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
  const [login, { data, error }] = useMutation(LOGIN);
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSubmitLogin = async () => {
    if (loginData.email && loginData.password) {
      const { data } = await login({
        variables: {
          input: loginData,
        },
      });
      if (data.login.access_token) {
        localStorage.setItem("access_token", data.login.access_token);
        navigate("/trips");
      }
    } else {
      console.log(error);
    }
  };

  return (
    <Login
      data={loginData}
      onInput={setValueForState(setLoginData)}
      onSubmit={handleSubmitLogin}
    />
  );
};

export default LoginContainer;
