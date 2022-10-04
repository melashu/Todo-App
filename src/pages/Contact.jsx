import React from "react";
import { useState } from "react";

const Contact = () => {
  const [title, setTitle] = useState("");
  return (
    <>
      <h1>Input Text</h1>
      <input
        type="text"
        placeholder="Enter test"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <b>{title}</b>
    </>
  );
};

export default Contact;
