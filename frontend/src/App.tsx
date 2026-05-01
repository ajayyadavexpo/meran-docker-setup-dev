import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  // Fetch all users
  const fetchUsers = () => {
    axios.get("http://localhost:5000/api/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/api/users", formData)
      .then((res) => {
        console.log(res.data);

        setFormData({
          name: "",
          email: ""
        });

        fetchUsers();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>User Form - Docker with React</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Save User
        </button>
      </form>

      <hr />

      <h2>All Users</h2>

      {users.map((user, index) => (
        <div key={index}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;