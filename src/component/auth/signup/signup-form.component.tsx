import { Button, TextField, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState } from "react";
const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [emailErrored, setEmailErrored] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordErrored, setPasswordErrored] = useState(false);

  const handleSignup = () => {
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
          helperText={emailErrored && "please enter your email"}
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          error={emailErrored}
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
        <Link to="/login" className="justify-self-start-start mt-2">
          <MuiLink>login</MuiLink>
        </Link>
      </div>
      <Button variant="contained" className="w-80" onClick={handleSignup}>
        <span className="p-1">Sign up</span>
      </Button>
    </div>
  );
};
export { SignUpForm };
