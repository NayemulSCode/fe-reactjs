import React from "react";

const Greeting = (props) => {
  return (
    <div className="mt-4 p-4 border border-green-200 rounded-md bg-green-50">
      <h3 className="text-xl font-semibold text-green-700">{props.title}</h3>
      <p className="text-slate-700">{props.message}</p>
    </div>
  );
};

export default Greeting;
