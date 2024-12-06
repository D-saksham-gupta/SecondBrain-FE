import { useRef } from "react";
//import { Button } from "../components/Button";
import { Input } from "../components/Input";
import Logo from "../icons/brain.png";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const navigate = useNavigate();
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  async function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    await axios.post(`${BACKEND_URL}/api/v1/signup`, {
      username: username,
      password: password,
    });
    alert("You have signed up");
    navigate("/");
  }
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-md border min-w-72 p-16">
        <div className="flex text-2xl items-center text-purple-600 font-bold font-serif py-4 justify-center">
          <img src={Logo} alt="" className="h-12 w-12 text-purple-600 mr-2" />
          Second Brain
        </div>
        <Input placeholder="USERNAME" reference={usernameRef} />
        <Input placeholder="PASSWORD" reference={passwordRef} />
        <div className="flex justify-center pt-4s">
          <button
            onClick={signup}
            className="bg-purple-600 text-white w-full py-1 px-4 text-md rounded-md p-4 m-1.5 items-center justify-center"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
