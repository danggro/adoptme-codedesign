import Container from "../Container";

export default function Footer() {
  return (
    <footer>
      <div className="h-[1px] w-screen bg-primary/20"></div>
      <Container>
        <div className="flex justify-between my-10">
          <p className="text-lg text-primary">
            Copyright 2023. Adoptme. All right reserved
          </p>
          <p className="text-lg text-primary">
            (62)811-767-666 | adoptme@email.com
          </p>
        </div>
      </Container>
    </footer>
  );
}
