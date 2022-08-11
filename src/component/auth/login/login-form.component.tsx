import { Button, TextField, Link as MuiLink } from "@mui/material";
import Stack from "@mui/material/Stack";

const LoginForm: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen gap-8">
      <h2 className="text-6xl">Crypto States</h2>
      <div className="flex flex-col gap-2">
        <TextField
          placeholder="Email"
          className="w-80"
          type="email"
          required
        ></TextField>
        <TextField
          placeholder="Password"
          className="w-80"
          type="password"
          required
        ></TextField>
      </div>
      <Button variant="contained" className="w-80">
        <span className="p-1">Login</span>
      </Button>
    </div>
  );
};
export { LoginForm };
