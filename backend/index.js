const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/mydatabase")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const UserSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model("User", UserSchema);


// GET API — Fetch users
app.get("/api/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});


// POST API — Save new user
app.post("/api/users", async (req, res) => {
  try {
    const { name, email } = req.body;

    const newUser = new User({
      name,
      email
    });

    await newUser.save();

    res.status(201).json({
      message: "User saved successfully",
      user: newUser
    });

  } catch (error) {
    res.status(500).json({
      message: "Error saving user"
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});