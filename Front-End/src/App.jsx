import axios from 'axios'
import { useForm } from "react-hook-form";
import Inp from "./Components/Inp.jsx";
import "./App.css";

function App(props) {
  const { register, handleSubmit } = useForm();

  const createUser = async (data) => {
    await axios.post("https://first-full-stack-evrl.onrender.com/register", {
      username: data.name,
      email: data.email,
      password: data.password,
    });
    console.log(data.name , data.email , data.password);
   
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(createUser)}>
          <Inp
            label="Name"
            type="text"
            {...register("name", {
              required: true,
            })}
          />
          <Inp
            label="Email"
            type="email"
            {...register("email", { required: true })}
          />
          <Inp
            label="Password"
            type="password"
            {...register("password", { required: true })}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
