import { useState } from "react";
import Arrow from "../Arrow";
import Container from "../Container";
import HeadSection from "../HeadSection";
import Filter from "./Filter";
import mockAdopts from "@/utils/Adoption.json";
import Image from "next/image";
import Button from "../Button";

export default function SectionAdoption() {
  const [adopts, setAdopts] = useState(mockAdopts);
  const [curr, setCurr] = useState(false);

  const next = () => {
    setCurr(true);
  };
  const prev = () => {
    setCurr(false);
  };
  return (
    <section id="Adoption" className="pt-[116px] ">
      <Container>
        <div className="w-6/12">
          <HeadSection
            section="adoption pet"
            title="Adopt the pet that has waited too long"
            wTitle="417"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. It ac purus eget. Sit dolor est proin vestibulum, duis. im dolor sit amet, consectetur adipisci."
          />
        </div>
        <div className="mt-2">
          <div className="flex justify-end gap-10">
            <div className="relative">
              <input
                type="text"
                id="filter"
                placeholder="Filters"
                className="py-[15px] px-[17px] outline-none focus:outline-primary text-lg text-secondary bg-white shadow-[0px_0px_4px_0_rgba(0,0,0,0.15)]"
              />
              <label
                htmlFor="filter"
                className="absolute -translate-y-[50%] top-[50%] right-[17px]"
              >
                <Filter />
              </label>
            </div>
            <div className="flex gap-[69px]">
              <button
                className={`rotate-180  ${
                  curr ? "text-primary" : "text-primary/30"
                }`}
                onClick={prev}
              >
                <Arrow />
              </button>
              <button
                className={`${curr ? "text-primary/30" : "text-primary"}`}
                onClick={next}
              >
                <Arrow />
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-hidden">
          <div
            className={`flex min-w-full  transition-all duration-500 ease-out gap-9 mt-[53px] pb-4 ${
              curr && "-translate-x-[103%]"
            }`}
          >
            {adopts.map((a) => {
              return (
                <div
                  key={a.id}
                  className="flex-shrink-0 p-2 pb-4 bg-white text-center shadow-[0px_4px_4px_0_rgba(0,0,0,0.15)] "
                >
                  <div className="relative transition-all ">
                    <div className="absolute inset-0 grid place-items-center bg-card-adopt group">
                      <h2 className="absolute w-full left-[50%] -translate-x-[50%] text-xl text-white bottom-4 group-hover:text-black">
                        {a.wait} Days Waiting
                      </h2>
                      <div className="hidden group-hover:block">
                        <Button variant="large2">Adopt</Button>
                      </div>
                    </div>
                    <Image
                      src={a.img}
                      width={281}
                      height={333}
                      alt=""
                      className=""
                    />
                  </div>
                  <h4 className="text-lg text-black mt-[14px] mb-1">
                    {a.name}
                  </h4>
                  <h4 className="text-lg text-black">
                    {a.old} {a.year ? "Years old" : "Months old"}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
