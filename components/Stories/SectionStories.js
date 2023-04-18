import Image from "next/image";
import Container from "../Container";
import Stories from "@/public/Stories.png";
import HeadSection from "../HeadSection";
import Button from "../Button";

export default function SectionStories() {
  return (
    <section id="Stories" className="pt-[105px]">
      <Container>
        <div className="flex justify-between gap-[158px]">
          <Image
            src={Stories}
            alt=""
            className="flex-shrink-0 shadow-[3px_3px_15px_0_rgba(0,0,0,0.15)]"
          />
          <div className="mt-5">
            <HeadSection
              section="stories with pet"
              title="Sponsoring your pet before adopt"
              wTitle="426"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. It ac purus eget. Sit dolor est proin vestibulum, duis. im dolor sit amet, consectetur adipisc."
            />
            <div className="mt-8">
              <Button variant="large">Sponsor now</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
