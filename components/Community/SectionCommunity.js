import Image from "next/image";
import Container from "../Container";
import Community from "@/public/Community.png";
import HeadSection from "../HeadSection";
import ItemCommunity from "./ItemCommunity";

export default function SectionCommunity() {
  return (
    <section id="Community" className="pt-[90px]">
      <Container>
        <div className="flex justify-between pr-[90px] gap-[97px]">
          <Image src={Community} alt="" className="flex-shrink-0 mt-8 -mx-2" />
          <div>
            <HeadSection
              title="Connect with adoptme across the country"
              wTitle="417"
              section="adoptme community"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. It ac purus eget. Sit dolor est proin vestibulum, duis. im dolor sit amet, consec"
            />
            <div className="flex gap-3 mt-11">
              <ItemCommunity num="150" desc="proin vestibulum, duis. im dol." />
              <ItemCommunity num="2k" desc="proin ulduis, isimuim dol." />
              <ItemCommunity num="3k" desc="proin vestibulum, duis. im dua." />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
