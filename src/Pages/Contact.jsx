import { useState } from "react";
import emailjs from "@emailjs/browser";
import SocialLinks from "../Components/SocialLinks";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    if (!name.trim()) {
      toast.error("Please enter your name");
      return false;
    }

    if (!email.trim()) {
      toast.error("Please enter your email");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    if (!message.trim()) {
      toast.error("Please enter your message");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const serviceId = "service_6xnvo0o";
    const templateId = "template_uiq981c";
    const publicKey = "g-FhwL0WklkOyl1Uw";

    const templateParams = {
      from_name: name.trim(),
      from_email: email.trim(),
      to_name: "Mohamed Ali",
      message: message.trim(),
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        toast.success(
          "Thank you for reaching out to me, I will get back to you soon!",
          {
            duration: 5000,
            style: {
              background: "#333",
              color: "#fff",
            },
            icon: "👋",
          }
        );
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        toast.error("Email sending failed. Please try again.", {
          duration: 4000,
          style: {
            background: "#333",
            color: "#fff",
          },
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <main className="p-container my-10">
      <Toaster position="bottom-right" />
      <section className="text-center py-16">
        <h1 className="typing-title">Get In Touch!</h1>
        <p className="text-gray-300 mt-4">
          Have a question or want to collaborate? Feel free to reach out!
        </p>
      </section>

      {/* Contact Form */}
      <section className="max-w-lg mx-auto bg-[#222] p-6 rounded-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 bg-[#333] text-white rounded-md focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            minLength={2}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 bg-[#333] text-white rounded-md focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="p-3 bg-[#333] text-white rounded-md focus:outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            minLength={5}
          ></textarea>
          <button
            disabled={isSubmitting}
            className={`cursor-pointer mt-4 bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-3 rounded-md font-medium transition ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>

      <section className="text-center mt-10">
        <h2 className="text-2xl font-bold">Connect with me on</h2>
        <SocialLinks />
      </section>
    </main>
  );
};

export default Contact;
