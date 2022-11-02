import React from "react";

const Form = (schema) => {
  console.log(schema.data.properties);
  return (
    // {schema.data.properties.}
    <>
      <h1>{schema.data.title}</h1>

      <label>name</label>
      <input type={`${schema.data.properties.name.type}`} />

      <label>age</label>
      <input
        type={`${schema.data.properties.age.type}`}
        min={`${schema.data.properties.age.minimum}`}
        max={`${schema.data.properties.age.maximum}`}
      />
      <label>married status</label>
      <input type={`${schema.data.properties.married.type}`} />
    </>
  );
};

export default Form;
