import React, { useState } from "react";
const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    lastname: "",
    phone: "",
    email: "",
    msg: "",
  });
  const formSubmit = (e) => {
    e.preventDefault();
    alert("Submited");
    setData({
      fullname: "",
      lastname: "",
      phone: "",
      email: "",
      msg: "",
    });
  };
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      console.log(preVal);
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  return (
    <>
      <section id="header" className="home">
        <div className="my-2 text-center">
          <h1>Contact Us</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <div className="row mb-3">
                <form onSubmit={formSubmit}>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      htmlFor="fullname"
                      className="form-label"
                    >
                      Name
                    </label>
                    <input
                      onChange={inputEvent}
                      name="fullname"
                      value={data.fullname}
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      htmlFor="lastname"
                      className="form-label"
                    >
                      Last Name
                    </label>
                    <input
                      onChange={inputEvent}
                      name="lastname"
                      value={data.lastname}
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      htmlFor="phone"
                      className="form-label"
                    >
                      Phone
                    </label>
                    <input
                      onChange={inputEvent}
                      name="phone"
                      value={data.phone}
                      type="number"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      htmlFor="email"
                      className="form-label"
                    >
                      Email address
                    </label>
                    <input
                      onChange={inputEvent}
                      name="email"
                      value={data.email}
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlTextarea1"
                      htmlFor="msg"
                      className="form-label"
                    >
                      Write
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      name="msg"
                      value={data.msg}
                      onChange={inputEvent}
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-outline-primary" type="submit">
                      Submit form
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
