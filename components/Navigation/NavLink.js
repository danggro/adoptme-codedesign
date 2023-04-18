import LinkNav from "./LinkNav";

export default function NavLink() {
  return (
    <ul className="flex justify-between gap-12">
      <LinkNav href="#Home">Home</LinkNav>
      <LinkNav href="#Adoption">Adoption</LinkNav>
      <LinkNav href="#Community">Community</LinkNav>
      <LinkNav href="#Stories">Stories with pet</LinkNav>
      <LinkNav href="#FAQ">FAQ</LinkNav>
    </ul>
  );
}
