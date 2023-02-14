import React from "react";

function TopCatigories() {
  return (
    <section className="categories">
      <h2>Top categories</h2>
      <div className="categories_container">
        <div className="category_logo">
          <div>
            <a
              href="https://www.udemy.com/courses/design/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("../design_elements/categories_items/design.jpg")}
                alt="simple logo for design"
              />

              <h5>Design</h5>
            </a>
          </div>
        </div>
        <div className="category_logo">
          <div>
            <a
              href="https://www.udemy.com/courses/development/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("../design_elements/categories_items/development.jpg")}
                alt="simple logo for Development"
              />

              <h5>Development</h5>
            </a>
          </div>
        </div>
        <div className="category_logo">
          <div>
            <a
              href="https://www.udemy.com/courses/marketing/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("../design_elements/categories_items/marketing.jpg")}
                alt="simple logo for marketing"
              />

              <h5>Marketing</h5>
            </a>
          </div>
        </div>
        <div className="category_logo">
          <div>
            <a
              href="https://www.udemy.com/courses/it-and-software/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("../design_elements/categories_items/it_and_software.jpg")}
                alt="simple logo for it and software"
              />

              <h5>IT and Software</h5>
            </a>
          </div>
        </div>
        <div className="category_logo">
          <div>
            <a
              href="./design_elements/categories_items/personal.jpg"
              target="_blank"
            >
              <img
                src="https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg"
                alt="simple logo for personal development"
              />

              <h5>Personal Development</h5>
            </a>
          </div>
        </div>
        <div className="category_logo">
          <div>
            <a
              href="https://www.udemy.com/courses/business/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("../design_elements/categories_items/business.jpg")}
                alt="simple logo for business"
              />

              <h5>Business</h5>
            </a>
          </div>
        </div>
        <div className="category_logo">
          <div>
            <a
              href="https://www.udemy.com/courses/photography/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("../design_elements/categories_items/photograpy.jpg")}
                alt="simple logo for photography"
              />

              <h5>Photography</h5>
            </a>
          </div>
        </div>
        <div className="category_logo">
          <div>
            <a
              href="https://www.udemy.com/courses/music/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("../design_elements/categories_items/music.jpg")}
                alt="simple logo for music"
              />

              <h5>Music</h5>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopCatigories;
