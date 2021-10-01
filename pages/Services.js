import React from "react";
import { Hero } from "../Components/Hero";
import { Navbar } from "../Components/Navbar";
import axios from "axios";
const Services = () => {
  const fetch = () =>
    new Promise((resolve, reject) => {
      axios
        .get("http://localhost:5000/api/products/5f326e615b385a5d34682b26")
        .then((res) => {
          alert(res.data.title);
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  fetch();
  return (
    <div>
      <Navbar />

      <Hero name={"Services"} />
    </div>
  );
};

export default Services;
