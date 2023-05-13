import React, { useState } from "react";
import { Register } from "src/components";
import { useMutation } from "@apollo/client";
import { REGISTER } from "src/graphql/register";
import { setValueForState } from "src/utils/setValueForState";
import { useNavigate } from "react-router-dom";

const RegisterContainer = () => {
  const [register, { error }] = useMutation(REGISTER);
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "07d7c7a7-d8b1-47a5-a6b7-0b4a0caad622",
  });

  const handleSubmitRegister = async () => {
    const { firstName, lastName, email, password, confirmPassword } =
      registerData;
    if (firstName && lastName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        const _registerData = registerData;
        delete _registerData.confirmPassword;
        const { data } = await register({
          variables: {
            input: _registerData,
          },
        });
        if (data.register.id) {
          navigate(`/hobbies/${data.register.id}`);
        }
      }
    } else {
      console.log(error);
    }
  };

  return (
    <Register
      data={registerData}
      onInput={setValueForState(setRegisterData)}
      onSubmit={handleSubmitRegister}
    />
  );
};

export default RegisterContainer;
