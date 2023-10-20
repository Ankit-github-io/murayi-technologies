import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center home">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h1>
                    {props.name}{" "}
                    <strong className="brand_name">MURAYI TECHNOLOGIES!</strong>
                  </h1>
                  <h2 className="my-3">
                    We're here to turn your ideas into digital realities. Let's
                    innovate together!
                  </h2>
                  <div className="my-3">
                    <NavLink
                      to={props.visite}
                      className="btn btn-outline-primary get_start_btn"
                    >
                      {props.btnName}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.logo}
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Common;
