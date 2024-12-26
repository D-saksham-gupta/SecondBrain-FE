import { useRef } from "react";
//import { Button } from "../components/Button";
import { Input } from "../components/Input";
import Logo from "../icons/brain.png";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signin() {
  const navigate = useNavigate();
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const respose = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
      username: username,
      password: password,
    });
    const jwt = respose.data.token;
    localStorage.setItem("token", jwt);
    navigate("/dashboard");
  }
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-md border min-w-48 p-16">
        <div className="flex text-2xl items-center text-purple-600 font-bold font-serif py-4 justify-center">
          <img src={Logo} alt="" className="h-12 w-12 text-purple-600 mr-2" />
          Second Brain
        </div>
        <Input placeholder="USERNAME" reference={usernameRef} />
        <Input placeholder="PASSWORD" reference={passwordRef} />

        <div className="flex justify-center pt-4s">
          <button
            onClick={signin}
            className="bg-purple-600 hover:bg-purple-300 text-white w-full py-1 px-4 text-md rounded-md p-4 m-1.5 items-center justify-center"
          >
            Login
          </button>
        </div>
       <span className="flex text-md items-center text-black-500 font-bold font-serif py-4 justify-center">
          Dont have an account?{" "}
          <button
            className="text-purple-600 p-2"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Signup
          </button>
        </span>
      </div>
    </div>
  );
}
