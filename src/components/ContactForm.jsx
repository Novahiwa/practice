import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [service, setService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePhoneNumberChange(event) {
    setPhoneNumber(event.target.value);
  }
  function handleServiceChange(event) {
    setService(event.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    //TODO:send data to server
    setIsSubmitting(false);
  };
  return (
    <div className="flex fex-col justify-center">
      <form className="flex flex-col mx-10 my-4 w-full md:w-100">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          name="name"
          placeholder=" full name "
          className="my-4 py-4 px-2 md:px-8 capitalize rounded transition-all cursor-pointer hover:outline-2 border outline-0 border-gray-200 hover:outline-sky-200 hover:outline-offset-2"
        />
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          name="email"
          placeholder="example@gmail.com"
          className="my-4 py-4 px-2 md:px-8 rounded transition-all cursor-pointer hover:outline-2 border outline-0 border-gray-200 hover:outline-sky-200 hover:outline-offset-2"
        />
        <input
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          name="phone number"
          placeholder="+265..."
          className="my-4 py-4 px-2 md:px-8 rounded transition-all cursor-pointer hover:outline-2 border outline-0 border-gray-200 hover:outline-sky-200 hover:outline-offset-2"
        />
        <select
          value={service}
          onChange={handleServiceChange}
          name="service"
          className="my-4 py-4 px-2 md:px-8 rounded transition-all cursor-pointer hover:outline-2 border outline-0 border-gray-200 hover:outline-sky-200 hover:outline-offset-2"
        >
          <option value="">--select service--</option>
          <option value="web hosting">web hosting</option>
          <option value="domain registration">domain registration</option>
          <option value="website design">website design</option>
          <option value="maintenance">maintenance</option>
        </select>
        <button
          onClick={handleFormSubmit}
          className="bg-sky-500 py-2 md:px-8 text-white capitalize font-bold rounded hover:scale-101 transition-all cursor-pointer hover:outline-2 hover:outline-sky-200 hover:outline-offset-2 hover:bg-white hover:text-black"
          disabled={isSubmitting}
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
