import SectionHero from "./Hero/SectionHero";
import NavBar from "./Navigation/NavBar";

export default function Header() {
  return (
    <div className="max-w-screen h-[821px] gradient-header">
      <NavBar />
      <SectionHero />
    </div>
  );
}
