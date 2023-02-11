import { FormEvent, useId, useState } from "react";
import { Form } from "../Login/styles";
import { api } from "../../lib/axios";
import { useNavigate } from "react-router-dom";

type CreateUser = {
  name: string
  email: string
  password: string
  confirmpassword: string
  setName: React.Dispatch<React.SetStateAction<string>>
  setPassword: React.Dispatch<React.SetStateAction<string>>
  setEmail: React.Dispatch<React.SetStateAction<string>>
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>
}

export function FormCreateUser({
  name,
  email,
  password,
  confirmpassword,
  setName,
  setPassword,
  setEmail,
  setConfirmPassword,
}: CreateUser) {
  const id = useId();
  const router = useNavigate();

  async function createUser(e: FormEvent) {
    e.preventDefault();

    await api.post("/auth/register", {
      name,
      email,
      password,
      confirmpassword,
    });

    router("/home");
  }

  return (
    <Form onSubmit={createUser}>
      <h1>Sign up</h1>
      <span className="subtext">sign up to see more</span>

      <div className="inputs">
        <label htmlFor={`${id}-name`}>Username</label>
        <input
          type="name"
          placeholder="name or username"
          id={`${id}-name`}
          value={name}
          onChange={(e: any) => setName(e.target.value)}
        />

        <label htmlFor={`${id}-email`}>Email</label>
        <input
          type="email"
          placeholder="Choose your best email"
          id={`${id}-email`}
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />

        <label htmlFor={`${id}-password`}>Password</label>
        <input
          type="password"
          placeholder="Chosse a strong password"
          id={`${id}-password`}
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
        />

        <label htmlFor={`${id}-confirmPassword`}>Conform Password</label>
        <input
          type="password"
          placeholder="Confirm password"
          id={`${id}-confirmPassword`}
          value={confirmpassword}
          onChange={(e: any) => setConfirmPassword(e.target.value)}
        />
      </div>

      <button>Sign up</button>

      <span className="createUser">
        <a href="/">Back to login</a>
      </span>
    </Form>
  );
}
