import Image from "next/image";
import Button from "../Button";
import Container from "../Container";
import TextDesc from "../TextDesc";
import Icon from "./Icon";
import one from "@/public/hero/1.png";
import two from "@/public/hero/2.png";
import three from "@/public/hero/3.png";
import four from "@/public/hero/4.png";
import RightHero from "@/public/hero/RightHero.png";

export default function SectionHero() {
  return (
    <section id="Home" className="pt-[192px]">
      <Container>
        <div className="flex items-end gap-[78px]">
          <div className="w-5/12">
            <div className="relative">
              <span className="absolute top-4 right-12">
                <Icon />
              </span>
              <h1 className="text-5xl text-primary ">
                Let&apos;s Choose and Adopt your new Pet
              </h1>
            </div>
            <div className="w-9/12 mt-7 mb-9">
              <TextDesc>
                Adopt a pet, give them the best treatment, and you will feel
                really happy of friendship with your pet.
              </TextDesc>
            </div>
            <div className="flex gap-8">
              <Button variant="medium">Adopt now</Button>
              <Button variant="medium" transparent>
                Donate for food
              </Button>
            </div>
            <p className="mb-4 text-base uppercase text-primary mt-9">
              supported by:
            </p>
            <div className="flex gap-7">
              <Image src={one} alt="" />
              <Image src={two} alt="" />
              <Image src={three} alt="" />
              <Image src={four} alt="" />
            </div>
          </div>
          <div>
            <Image src={RightHero} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
}
