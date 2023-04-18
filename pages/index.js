import SectionAdoption from "@/components/Adoption/SectionAdoption";
import SectionCommunity from "@/components/Community/SectionCommunity";
import SectionFAQ from "@/components/FAQ/SectionFAQ";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import SectionMission from "@/components/Mission/SectionMission";
import SectionStories from "@/components/Stories/SectionStories";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Adoptme | Adopt Pet</title>
      </Head>
      <Header />
      <SectionMission />
      <SectionCommunity />
      <SectionAdoption />
      <SectionStories />
      <SectionFAQ />
      <Footer />
    </>
  );
}
