import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

// Yup validation schema
const contactSchema = yup.object().shape({
  name: yup.string().trim().required("Name is required."),
  email: yup
    .string()
    .trim()
    .email("Email is not valid.")
    .required("Email is required."),
  message: yup.string().trim().required("Message is required."),
});

const Contact = () => {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = async () => {
    try {
      await contactSchema.validate(form, { abortEarly: false });
      return {};
    } catch (validationError) {
      const fieldErrors = {};
      validationError.inner.forEach((err) => {
        fieldErrors[err.path] = err.message;
      });
      return fieldErrors;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({});

    const validationErrors = await validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${apiUrl}/api/messages/`, form, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Response:", response.data);
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
      navigate("/thank", { state: { fromForm: true } });
    } catch (err) {
      setLoading(false);
      if (err.response) {
        setError({ server: err.response.data.message || "Server error." });
      } else if (err.request) {
        setError({ server: "Network error. Please check your connection." });
      } else {
        setError({ server: "An unexpected error occurred." });
      }
    }
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#0c0042] p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {error.server && <p className="text-red-500 mb-4">{error.server}</p>}

        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          {/* Name Field */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-[#1b153d] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {error.name && (
              <span className="text-red-400 text-sm mt-1">{error.name}</span>
            )}
          </label>

          {/* Email Field */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-[#1b153d] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {error.email && (
              <span className="text-red-400 text-sm mt-1">{error.email}</span>
            )}
          </label>

          {/* Message Field */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-[#1b153d] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {error.message && (
              <span className="text-red-400 text-sm mt-1">
                {error.message}
              </span>
            )}
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#1b153d] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary disabled:opacity-50 flex items-center gap-2"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
