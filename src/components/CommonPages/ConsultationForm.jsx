import React, { useState } from 'react';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ConsultationForm = () => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    description: '',
    contactTime: '',
  });

  const ValidationSchema = Yup.object({
    fullName: Yup.string()
      .matches(/^[A-Za-z\s]+$/, 'Name can only contain letters and spaces')
      .required('Full Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone Number is required'),
    company: Yup.string(),
    service: Yup.string().required('Please select a service'),
    budget: Yup.string().required('Please select your budget'),
    description: Yup.string().required('Project description is required'),
    contactTime: Yup.string(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const sendFormData = async (dataToSend) => {
  try {
    setLoading(true);
    console.log("Sending data:", dataToSend); // Debug

    const response = await fetch("https://ready-backend-setup.onrender.com/contactInquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    const result = await response.json();
    console.log("Response status:", response.status, "Response:", result);

    if (response.ok) {
      toast.success("Form submitted successfully!");

      // Prepare WhatsApp message
      const message = `
Full Name: ${dataToSend.fullName}
Email: ${dataToSend.email}
Phone: ${dataToSend.phone}
Company: ${dataToSend.company}
Service: ${dataToSend.service}
Budget: ${dataToSend.budget}
Description: ${dataToSend.description}
Preferred Contact Time: ${dataToSend.contactTime}
      `.trim();

      const encodedMessage = encodeURIComponent(message);
      const phoneNumber = '91XXXXXXXX'; // Your business WhatsApp number (no +)
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');

      // Reset form state
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        description: '',
        contactTime: '',
      });

      setErrors({});
    } else {
      toast.error(result?.message || "Failed to submit the form.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    toast.error("Something went wrong. Please try again later.");
  } finally {
    setLoading(false);
  }
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ValidationSchema.validate(formData, { abortEarly: false });
      await sendFormData(formData);
    } catch (error) {
      const newErrors = {};
      if (error.inner) {
        error.inner.forEach((err) => {
          newErrors[err.path] = err.message;
        });
      }
      setErrors(newErrors);
      toast.error("Please fix the validation errors.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg my-16" id="contact">
      <ToastContainer />
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-blue-900">
        Let’s Build Something Great Together
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Fill in the details below and our team will get in touch within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium">Full Name *</label>
          <input
            type="text"
            name="fullName"
              onChange={(e) => {
    const value = e.target.value;
    if (/^[A-Za-z\s]*$/.test(value)) {
      handleChange(e); // only update if valid characters
    }
  }}
            value={formData.fullName}
            className="w-full border border-blue-500 rounded px-3 py-2 focus:outline-none"
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium">Email Address *</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            className="w-full border border-blue-500 rounded px-3 py-2 focus:outline-none"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium">Phone Number *</label>
          <input
            type="text"
            name="phone"
                        onChange={(e) => {
              const onlyDigits = e.target.value.replace(/\D/g, '');
              if (onlyDigits.length <= 10) {
                setFormData((prevData) => ({ ...prevData, phone: onlyDigits }));
              }
            }}
            value={formData.phone}
            className="w-full border border-blue-500 rounded px-3 py-2 focus:outline-none"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-medium">Company Name</label>
          <input
            type="text"
            name="company"
            onChange={handleChange}
            value={formData.company}
            className="w-full border border-blue-500 rounded px-3 py-2 focus:outline-none"
          />
        </div>

        {/* Service */}
        <div>
          <label className="block text-sm font-medium">Service Interested In *</label>
          <select
            name="service"
            onChange={handleChange}
            value={formData.service}
            className="w-full border border-blue-500 rounded px-3 py-2 focus:outline-none"
          >
            <option value="">Select</option>
            <option value="Website Development">Website Development</option>
            <option value="App Development">App Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Branding">Branding</option>
            <option value="E-Commerce">E-Commerce</option>
            <option value="Other">Other</option>
          </select>
          {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
        </div>

        {/* Budget */}
        <div>
          <label className="block text-sm font-medium">Your Budget Range *</label>
          <select
            name="budget"
            onChange={handleChange}
            value={formData.budget}
            className="w-full border border-blue-500 rounded px-3 py-2 focus:outline-none"
          >
            <option value="">Select</option>
            <option value="< ₹25,000">&lt; ₹25,000</option>
            <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
            <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
            <option value="> ₹1,00,000">₹1,00,000+</option>
          </select>
          {errors.budget && <p className="text-red-500 text-sm">{errors.budget}</p>}
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium">Project Description / Requirements *</label>
          <textarea
            name="description"
            onChange={handleChange}
            value={formData.description}
            rows="4"
            className="w-full border border-blue-500 rounded px-3 py-2 focus:outline-none"
            placeholder="Tell us briefly what you’re looking for..."
          ></textarea>
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        {/* Contact Time */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium">Preferred Contact Time</label>
          <select
            name="contactTime"
            onChange={handleChange}
            value={formData.contactTime}
            className="w-full border border-blue-500 rounded px-3 py-2 focus:outline-none"
          >
            <option value="">Select</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className="bg-blue-900 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Get Free Consultation"}
          </button>
          <p className="mt-4 text-sm text-gray-500">
            🔒 We respect your privacy. Your information is 100% safe with us.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ConsultationForm;
