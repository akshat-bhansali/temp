import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AddHackathon = () => {
  const router = useRouter();
  const [deadline, setDeadline] = useState("");
  const [link, setLink] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // Perform actions with the form data, for example, send it to an API or perform other operations
    // console.log('Form submitted:', formData);
    try {
      const res = await fetch("http://localhost:3000/api/addHackathon", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ deadline, name, link, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <div className="max-w-md mx-auto m-4 p-6 bg-gray-800 text-white shadow-md rounded-md">
    <h2 className="text-2xl mb-4">Create a Hackathon</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-300">Deadline</label>
        <input
          type="date"
          name="deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="border border-gray-600 rounded-md p-3 w-full focus:outline-none focus:border-blue-500 text-gray-800"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Link</label>
        <input
          type="text"
          name="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="border border-gray-600 rounded-md p-3 w-full focus:outline-none focus:border-blue-500 text-gray-800"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-600 rounded-md p-3 w-full focus:outline-none focus:border-blue-500 text-gray-800"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Description</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-600 rounded-md p-3 w-full h-20 focus:outline-none focus:border-blue-500 text-gray-800"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none"
      >
        Create Hackathon
      </button>
    </form>
  </div>
);
};

export default AddHackathon;
