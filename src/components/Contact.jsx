import React, { useState } from "react";
import Laybel from "../assets/laybel/Laybel.jsx";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Aquí puedes agregar la lógica para enviar el formulario a tu servidor o API
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="pt-10">
      <div className="container mx-auto px-5">
        <Laybel>Contact me</Laybel>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white bg-opacity-80 p-6 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Mensaje:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
