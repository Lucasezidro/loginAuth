import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Login } from "./pages/Login/Login";
import { FormCreateUser } from "./pages/FormCreateUser/FormCreateUser";
import { Home } from "./pages/home/Home";
import { useState } from "react";

export function Router() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmpassword, setConfirmPassword] = useState<string>("");

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route
            path="/"
            element={
              <Login
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
              />
            }
          />
          <Route
            path="/createUser"
            element={
              <FormCreateUser
                name={name}
                setName={setName}
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                confirmpassword={confirmpassword}
                setConfirmPassword={setConfirmPassword}
              />
            }
          />
          <Route path="/home" element={<Home name={name} email={email} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
