import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>Where Every Meal Tells a Story!</p>
            </div>
            <p className="mid">
            Welcome to DineLine, where culinary excellence meets the art of dining. At DineLine, we believe that a great meal is more than just food on a plate—it's an experience that brings people together, ignites conversations, and creates lasting memories. Our mission is to curate a unique and unforgettable dining journey, one dish at a time. Whether you're here to discover new flavors, revisit classic favorites, or simply enjoy the ambiance, DineLine is your ultimate destination for all things delicious. Our team of passionate chefs crafts each dish with the finest ingredients, ensuring that every bite is a celebration of taste, texture, and tradition. Join us on this gastronomic adventure, where innovation meets tradition, and every meal tells a story. At DineLine, we’re not just serving food—we’re serving experiences.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;