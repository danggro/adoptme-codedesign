import { useEffect } from "react";
import Container from "../Container";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import NavRight from "./NavRight";

export default function NavBar() {
  useEffect(() => {
    window.onscroll = function () {
      const nav = document.querySelector("#navigation");

      if (window.pageYOffset > nav.offsetTop) {
        nav.classList.add("fixed-nav");
      } else {
        nav.classList.remove("fixed-nav");
      }
    };
  }, []);

  return (
    <nav
      id="navigation"
      className="fixed top-0 z-50 w-full mt-10 transition-all"
    >
      <Container>
        <div className="flex items-center justify-between">
          <NavLogo />
          <NavLink />
          <NavRight />
        </div>
      </Container>
    </nav>
  );
}
