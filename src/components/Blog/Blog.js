import React from "react";
import "./Blog.css";
function Blog() {
  const blogItems = [
    {
      title: "The best web developer",
      date: "April 23, 2021",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
    {
      title: "Website design - how to start?",
      date: "MARCH 21, 2021",
      text: "You certainly have some profile of your website’s user in your head. You need to think about what exactly they need, what their preferences are, why they ended up on your website and what they should find on it for you to reach your goal.",
    },
    {
      title: "The best web developer",
      date: "April 23, 2021",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
    {
      title: "The best web developer",
      date: "April 23, 2021",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
  ];
  return (
    <section className="blog">
      <h1 className="ghostTitle">Blog</h1>
      <div className="container">
        <div className="grid__blog">
          {blogItems.map((item, index) => {
            return (
              <div className="grid__blog__item" key={index}>
                <h1>
                  <a href="#" className="grid__blog__item__title">
                    {item.title}
                  </a>
                </h1>
                <span className="blog__item__date">{item.date}</span>
                <p className="section__description">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Blog;
