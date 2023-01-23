import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "./scroll.scss";

const Scroll = () => {
  const refAboutUs = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutUsEl = refAboutUs.current;
      const currentScrollPosition = window.scrollY;

      const elScrollPosition = aboutUsEl.offsetTop;
      const currentWindowHeight = window.innerHeight;
      const elCurrentHeight = aboutUsEl.offsetHeight;

      const targetScrollPosition =
        elScrollPosition - currentWindowHeight + elCurrentHeight;

      if (currentScrollPosition >= targetScrollPosition) {
        aboutUsEl.classList.add("active");
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      {[...new Array(15)].map((item, index) => (
        <p key={index}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo in
          est reprehenderit molestias rerum molestiae enim illo, fugit modi non
          soluta quibusdam magni repellendus. Enim quos illum quisquam nisi
          facere? Amet excepturi, rerum ratione maiores veritatis repellendus,
          ipsa hic aliquid, commodi velit fugit consequuntur consectetur
          doloremque explicabo dolor esse. Pariatur amet architecto, placeat
          praesentium suscipit totam laudantium iste enim rerum!
        </p>
      ))}

      <p className={"about-us"} ref={refAboutUs}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo in
        est reprehenderit molestias rerum molestiae enim illo, fugit modi non
        soluta quibusdam magni repellendus. Enim quos illum quisquam nisi
        facere? Amet excepturi, rerum ratione maiores veritatis repellendus,
        ipsa hic aliquid, commodi velit fugit consequuntur consectetur
        doloremque explicabo dolor esse. Pariatur amet architecto, placeat
        praesentium suscipit totam laudantium iste enim rerum!
      </p>

      {[...new Array(15)].map((item, index) => (
        <p key={index}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo in
          est reprehenderit molestias rerum molestiae enim illo, fugit modi non
          soluta quibusdam magni repellendus. Enim quos illum quisquam nisi
          facere? Amet excepturi, rerum ratione maiores veritatis repellendus,
          ipsa hic aliquid, commodi velit fugit consequuntur consectetur
          doloremque explicabo dolor esse. Pariatur amet architecto, placeat
          praesentium suscipit totam laudantium iste enim rerum!
        </p>
      ))}
    </Container>
  );
};

export default Scroll;
