
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const { login } = useAuth();
  return (
    <div className="p-6 max-w-sm mx-auto">
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="enter student name "className="border px-3 py-2 mb-4 w-full rounded"
          required

        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={(e) => {
            e.preventDefault();
            login(name);
            navigate("/dashboard");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
