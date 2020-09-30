import React from "react";

export default function ResultCard(props) {
  return (
    <div className="container">
      {props.data.map((detail, index) => (
        <div className="card" key={index}>
          <h1 className="card_title">{detail.title}</h1>
          <div className="card_list">
            <div className="card_text">State: &nbsp; &nbsp;{detail.state}</div>
            <div className="card_text">
              Number: &nbsp; &nbsp;{detail.car_number}
            </div>
            <div className="card_text">City: &nbsp; &nbsp;{detail.city}</div>
            <div className="card_text">
              Address: &nbsp; &nbsp;{detail.address}
            </div>
            <div className="card_text">
              Email: &nbsp; &nbsp;{!!detail.email_id ? detail.email_id : "-"}
            </div>
            <div className="card_text">Phone: &nbsp; &nbsp;{detail.phone}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
