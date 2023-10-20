import React from "react";
import Card from "./Card";
import ServiceData from "./ServiceData";
const Services = (props) => {
  return (
    <>
      <section className="home">
        <div className="text-center">
          <h1>Services</h1>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-3 mb-5">
                {ServiceData.map((val, ind) => {
                  return (
                    <>
                      <Card
                        key={val.cardTitle}
                        cardTitle={val.cardTitle}
                        cardImg={val.cardImg}
                        cardDetails={val.cardDetails}
                      />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Services;
