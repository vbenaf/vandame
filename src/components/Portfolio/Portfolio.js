import React from "react";
import "./Portfolio.css";
function Portfolio() {
  const portfolioItems = [
    {
      title: "Face Recognition",
      image:
        "https://cdn.dribbble.com/users/6115570/screenshots/14287249/media/056a83c59b83033675886fb97415b7c2.png?compress=1&resize=400x300",
    },
    {
      title: "Task App",
      image:
        "https://www.alcax.com/blog/wp-content/uploads/2020/10/flutter-app-development-for-android-and-ios.jpg",
    },
    {
      title: "Netflix",
      image:
        "https://tecnoticias.net/wp-content/uploads/2021/02/Netflix-Downloads-For-You-Feature.jpg",
    },
    {
      title: "Face Recognition",
      image:
        "https://cdn.dribbble.com/users/6115570/screenshots/14287249/media/056a83c59b83033675886fb97415b7c2.png?compress=1&resize=400x300",
    },
  ];
  return (
    <section className="portfolio">
      <div className="container">
        <h1 className="titleSection">PORTFOLIO</h1>
        <p className="section__description">
          This is a gallery of some projects chosen by me. Some of them are
          university projects and some others are projects to learn new
          technologies and improve my knowledge.
        </p>
        <div className="grid">
          {portfolioItems.map((item, index) => {
            return (
              <div
                className="grid__item"
                key={index}
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h1 className="grid__item__title">{item.title}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
