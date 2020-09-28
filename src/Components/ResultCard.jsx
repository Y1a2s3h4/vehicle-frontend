import React from "react";

export default function ResultCard(props) {
  return (
    <div>
      <h1>
        {props.data.map((detail) => {
          return detail.title;
        })}
      </h1>
    </div>
  );
}
