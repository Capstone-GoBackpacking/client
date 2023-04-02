import { useState } from "react"
import { Login } from "src/components"
import { setValueForState } from "src/utils/setValueForState"
import { useMutation } from "@apollo/client"
import { LOGIN } from "src/graphql/login"

const LoginContainer = () => {
  const [login, { data, error }] = useMutation(LOGIN)

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  if (data) {
    localStorage.setItem('access_token', data.login.access_token)
  }

  const handleSubmitLogin = () => {
    if (loginData.email && loginData.password) {
      login({
        variables: {
          input: loginData
        }
      })
    } else {
      console.log(error)
    }
  }

  return <Login data={loginData} onInput={setValueForState(setLoginData)} onSubmit={handleSubmitLogin} />
}

export default LoginContainer
