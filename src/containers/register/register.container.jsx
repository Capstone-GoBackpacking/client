import React, { useState } from "react"
import { Register } from "src/components"
import { useMutation } from "@apollo/client"
import { REGISTER } from "src/graphql/register"

const RegisterContainer = () => {
  const [register, { error }] = useMutation(REGISTER)

  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleInputRegisterData = (key, value) => {
    setRegisterData(state => ({ ...state, [key]: value }))
  }

  const handleSubmitRegister = () => {
    const { firstName, lastName, email, password, confirmPassword } = registerData
    if (firstName && lastName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        register({
          variables: {
            input: {
              email,
              password
            }
          }
        })
      }
    } else {
      console.log(error)
    }
  }

  return <Register data={registerData} onInput={handleInputRegisterData} onSubmit={handleSubmitRegister} />
}

export default RegisterContainer
