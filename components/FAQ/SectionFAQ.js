import Container from "../Container";
import HeadSection from "../HeadSection";
import LeftFAQ from "./LeftFAQ";
import RightFAQ from "./RightFAQ";

export default function SectionFAQ() {
  return (
    <section id="FAQ" className="pt-[219px] mb-[95px]">
      <Container>
        <div className="w-6/12 px-8 mx-auto text-center">
          <HeadSection
            title="Adopt the pet that has waited too long"
            wTitle="417"
            center
            section="forum answer and question"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. It ac purus eget. Sim dolor sit amet, consectetur adipisci."
          />
        </div>
        <div className="flex mt-[107px] gap-[38px]">
          <div className="w-6/12">
            <LeftFAQ />
          </div>
          <div className="w-6/12">
            <RightFAQ />
          </div>
        </div>
      </Container>
    </section>
  );
}
