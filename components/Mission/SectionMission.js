import Container from "../Container";
import HeadSection from "../HeadSection";
import TextDesc from "../TextDesc";

export default function SectionMission() {
  return (
    <section className="pt-[162px]">
      <Container>
        <div className="flex justify-between gap-[175px] items-end">
          <div className="max-w-[500px] -mb-6">
            <HeadSection
              section="our mission for pet"
              title="Let's Choose and Adopt your New Lovely Pet"
            />
          </div>
          <div className="w-6/12 mb-2">
            <TextDesc>
              You need to see some pets in Adoptme. We have the friend that's
              you need to have. We also have the equipment you need to take care
              of it.
            </TextDesc>
          </div>
        </div>
      </Container>
    </section>
  );
}
