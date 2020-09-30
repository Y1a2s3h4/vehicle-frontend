import React from "react";

export default function ResultCard(props) {
  return (
    <div>
      {props.data.map((detail, index) => (
        <div className="card" key={index}>
          <h1 className="card_title">{detail.title}</h1>
          <div className="card_list">
            <div className="card_text">{detail.state}</div>
            <div className="card_text">{detail.car_number}</div>
            <div className="card_text">{detail.city}</div>
            <div className="card_text">{detail.address}</div>
            <div className="card_text">{detail.email_id}</div>
            <div className="card_text">{detail.phone}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
