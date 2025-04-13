import React, { FormEvent, useRef, useState } from "react";

const Form = () => {

  const address = useRef<HTMLInputElement>(null);
  const [IP_Value, setIP_Value] = useState({
    ip : ''
});

  
  
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (address.current !== null)
      IP_Value.ip = address.current.value;
    console.log("Submitted");
  }
  return (
    <form
      onSubmit={handleSubmit}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          IP Address
        </label>

        <input
          id="name"
          ref = {address}
          type="text"
          pattern="^(25[0-5]|2[0-4][0-9]|1?[0-9]{1,2})(\.(25[0-5]|2[0-4][0-9]|1?[0-9]{1,2})){3}$"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
