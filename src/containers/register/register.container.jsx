import React, { useState } from "react";
import { Register } from "src/components";
import { useMutation } from "@apollo/client";
import { REGISTER } from "src/graphql/register";
import { setValueForState } from "src/utils/setValueForState";

const RegisterContainer = () => {
  const [register, { error }] = useMutation(REGISTER);

  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmitRegister = () => {
    const { firstName, lastName, email, password, confirmPassword } =
      registerData;
    if (firstName && lastName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        register({
          variables: {
            input: registerData,
          },
        });
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
