import React from "react";

const Form = (schema) => {
  // const data = schema.data.properties.employees.items;
  console.log(schema);
  return (
    <>
      <form>
        {schema.data.map((item, id) => {
          if (item.tag === "div") {
            return <div key={id}>{item.text}</div>;
          } else if (item.tag === "p") {
            return <p key={id}>{item.text}</p>;
          } else if (item.tag === "h1") {
            return <h1 key={id}>{item.text}</h1>;
          } else {
            return <>loading...</>;
          }
        })}
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
