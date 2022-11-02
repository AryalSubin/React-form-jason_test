import React from "react";

const Form = (schema) => {
  const data = schema.data.properties.employees.items;
  console.log(data);
  return (
    <>
      <form>
        {data.map((item, id) => {
          return (
            <div key={id}>
              <input type={item.properties.email.type} />
              <input type={item.properties.name.type} />
            </div>
          );
        })}
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
