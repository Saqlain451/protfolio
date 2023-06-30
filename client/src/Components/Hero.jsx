import React from "react";

const Hero = () => {
  return (
    <>
      <section>
        <div className="p-10">
          <div className="d-flex center">
            <div className="hero-img">
              <img
                src="./assets/me.webp"
                alt="pic"
                className="img-fluid img-circle"
                width="864"
                height="883"
              />
            </div>
          </div>
          <h1 className="mt-4 fs-4 text-center">The Art of Web Development</h1>
          <p className="fs-1-5 pl-10 pr-10 mt-2 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            pariatur delectus voluptatum illo ipsum dolores consequuntur a
            aliquid velit reiciendis commodi repudiandae ratione eveniet maxime
            cum dolorum neque nam voluptate.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
