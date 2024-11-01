import { User } from "./user.model.js";

const createUser = async (req, res) => {

  try {
    
  const { username, email, password } = req.body;

  if ([username, email, password].some((field) => field == "")) {
    prompt("All Fields Are Required");
  }

  const user = await User.create({
    username: username,
    email: email,
    password: password,
  });

  if (!user) new Error((message = "User Not Created"));

  // console.log(user);

  return res.status(200).json({
    data: user,
    message: "User Created Successfully",
  });


  } catch (error) {
    return res.status(200).json({
      message: error.message,
    });
  
  }
};

export { createUser };
