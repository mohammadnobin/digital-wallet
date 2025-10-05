// 'use client';
// import React, { useState } from "react";
// import axios from "axios";

// const AddUserForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       const res = await axios.post("http://localhost:5000/api/users", formData); // route match korte hobe
//       setMessage("User created successfully!");
//       setFormData({ name: "", email: "", password: "" });
//     } catch (error) {
//       setMessage(error.response?.data?.message || "Something went wrong!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-gray-100 rounded shadow">
//       <h2 className="text-xl font-bold mb-4">Add New User</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block mb-1">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <div>
//           <label className="block mb-1">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <div>
//           <label className="block mb-1">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//         >
//           {loading ? "Creating..." : "Add User"}
//         </button>
//       </form>

//       {message && <p className="mt-4 text-center text-red-500">{message}</p>}
//     </div>
//   );
// };

// export default AddUserForm;


'use client';
import React, { useState, useEffect } from "react";
import axios from "axios";

const AddUserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      setUsers(res.data.users || res.data); // backend response অনুযায়ী
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
        console.log(formData);
      const res = await axios.post("http://localhost:5000/api/users", formData);
      setMessage("User created successfully!");
      setFormData({ name: "", email: "", password: "" });
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add New User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {loading ? "Creating..." : "Add User"}
        </button>
      </form>

      {message && <p className="mt-4 text-center text-red-500">{message}</p>}

      {/* User List */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Users</h3>
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <ul className="space-y-2">
            {users.map((user) => (
              <li key={user._id} className="p-2 border rounded bg-white">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Balance:</strong> ${user.balance}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AddUserForm;
