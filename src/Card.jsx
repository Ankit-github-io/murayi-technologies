import React from "react";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <>
      <div className="col-10 col-md-4 mx-auto" key={props.cardTitle}>
        <div className="card">
          <img src={props.cardImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.cardTitle}</h5>
            <p className="card-text">{props.cardDetails}</p>
            <Link to="" className="btn btn-primary">
              View
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
