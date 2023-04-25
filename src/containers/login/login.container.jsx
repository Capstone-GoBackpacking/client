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

  if (data) {
    localStorage.setItem("access_token", data.login.access_token);
    navigate("/trips");
  }

  const handleSubmitLogin = () => {
    if (loginData.email && loginData.password) {
      login({
        variables: {
          input: loginData,
        },
      });
    } else {
      console.log(error);
    }
  };

  return <Login data={loginData} onInput={setValueForState(setLoginData)} onSubmit={handleSubmitLogin} />;
};

export default LoginContainer;
