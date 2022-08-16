import { Button, TextField, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState } from "react";
const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [emailErrored, setEmailErrored] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordErrored, setPasswordErrored] = useState(false);

  const handleLogin = () => {
    if (!email) {
      setEmailErrored(true);
    } else {
      setEmailErrored(false);
    }
    if (!password) {
      setPasswordErrored(true);
    } else {
      setPasswordErrored(false);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen gap-8">
      <h2 className="text-6xl">Crypto States</h2>
      <div className="flex flex-col gap-2">
        <TextField
          placeholder="Email"
          className="w-80"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          error={emailErrored}
          required
        />
        <TextField
          placeholder="Password"
          className="w-80"
          type="password"
          required
          helperText={passwordErrored && "please enter your password"}
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          error={passwordErrored}
        />
        <Link to="/singup" className="justify-self-start-start mt-2">
          <MuiLink>Sign Up</MuiLink>
        </Link>
      </div>
      <Button variant="contained" className="w-80" onClick={handleLogin}>
        <span className="p-1">Login</span>
      </Button>
    </div>
  );
};
export { LoginForm };
