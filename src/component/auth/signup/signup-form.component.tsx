import { Button, TextField, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
const SignUpForm: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen gap-8">
      <h2 className="text-6xl">Crypto States</h2>
      <div className="flex flex-col gap-2">
        <TextField placeholder="Email" className="w-80" type="email" required />
        <TextField
          placeholder="Password"
          className="w-80"
          type="password"
          required
        />
        <Link to="/login" className="justify-self-start-start mt-2">
          <MuiLink>login</MuiLink>
        </Link>
      </div>
      <Button variant="contained" className="w-80">
        <span className="p-1">Sign up</span>
      </Button>
    </div>
  );
};
export { SignUpForm };
