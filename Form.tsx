import React, { FormEvent } from "react";

const Form = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
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
