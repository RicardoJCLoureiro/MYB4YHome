import { useState } from 'react';
import { FiUser, FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi';
import Image from 'next/image';
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // State for handling form submission status and field errors
  const [status, setStatus] = useState<string | null>(null);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  if (!isOpen) return null;

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    
    // Clear error for the field being changed
    setErrors({
      ...errors,
      [e.target.name]: false,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate fields
    const newErrors = {
      name: !formData.name,
      email: !formData.email,
      message: !formData.message,
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (newErrors.name || newErrors.email || newErrors.message) {
      setStatus('Please fill out all required fields.');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('Failed to send the message. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <>
      {/* Modal Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className="relative bg-[#1A1A1A] rounded-lg p-8 w-[90%] max-w-lg text-white shadow-lg">
          {/* Animations around the modal */}
          <div className="absolute -top-10 -left-10 animate-float">
            <Image src={starImage} alt="Star Animation" width={100} height={100} />
          </div>
          <div className="absolute -bottom-10 -right-10 animate-wobble">
            <Image src={springImage} alt="Spring Animation" width={100} height={100} />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-white"
          >
            &times;
          </button>

          {/* Modal Content */}
          <h2 className="text-lg font-bold mb-4">Connect with us!</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1"><FiUser className="inline-block mr-2" /> Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-2 border rounded bg-[#333] text-white"
                required
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">Name is required.</p>}
            </div>
            <div className="mb-4">
              <label className="block mb-1"><FiMail className="inline-block mr-2" /> Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-2 border rounded bg-[#333] text-white"
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">Email is required.</p>}
            </div>
            <div className="mb-4">
              <label className="block mb-1"><FiPhone className="inline-block mr-2" /> Phone (Optional)</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="w-full p-2 border rounded bg-[#333] text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1"><FiMessageSquare className="inline-block mr-2" /> Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-2 border rounded bg-[#333] text-white"
                required
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">Message is required.</p>}
            </div>
            <button type="submit" className="bg-black text-white px-4 py-2 rounded-lg">
              Send
            </button>
          </form>
          {status && <p className="mt-4 text-center">{status}</p>}
        </div>
      </div>
    </>
  );
};

export default Modal;
