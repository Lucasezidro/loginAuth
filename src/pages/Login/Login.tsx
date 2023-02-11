import { FormEvent, useId } from "react";
import { Form } from "./styles";
import { api } from "../../lib/axios";
import { useNavigate } from "react-router-dom";

type User = {
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>
  setPassword: React.Dispatch<React.SetStateAction<string>>
}

export function Login({ email, password, setEmail, setPassword }: User) {
  const router = useNavigate()
  const id = useId();

  async function loginForm(e: FormEvent) {
    e.preventDefault();

    await api.post('/auth/login', {
      email,
      password,
    })
    console.log(email)

    router('/home')
  }

  return (
    <Form onSubmit={loginForm}>
      <h1>Sign in</h1>
      <span className="subtext">sign in to see more</span>

      <div className="inputs">
        <label htmlFor={`${id}-email`}>Email</label>
        <input 
          type="email" 
          placeholder="Your best email" 
          id={`${id}-email`} 
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />

        <label htmlFor={`${id}-password`}>Password</label>
        <input 
          type="password" 
          placeholder="Your password" 
          id={`${id}-password`} 
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
        />
      </div>

      <button>Login</button>

      <span className="createUser">
        Not have an account ?<a href="/createUser">Sign up</a>
      </span>
    </Form>
  );
}
