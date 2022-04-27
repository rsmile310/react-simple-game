import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DefautlButton from "../../components/DefaultButton";
import "./style.scss";

function StartPage() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("userName", name);
    navigate("/game");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Let's Play!</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name."
        required
      />
      <DefautlButton text={"Play"} />
    </form>
  );
}
export default StartPage;
