import { Layout } from "@/components/Layout/Layout.component";
import { About } from "@/sections/About/About.section";
import { Featured } from "@/sections/Featured/Featured.section";
import { Hero } from "@/sections/Hero/Hero.section";
import { Jobs } from "@/sections/Jobs/Jobs.section";
import {
  TSrapiHeroMain,
  TStrapiAllResponse,
  TStrapiHeroResponse,
  TStrapiTags,
} from "@/types/strapi.types";
import { AppContext } from "next/app";
import styled from "styled-components";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

type Props = {
  hero: TSrapiHeroMain;
};

const IndexPage: React.FC<Props> = ({ hero }) => {
  console.log("hero", hero);

  return (
    <Layout>
      <StyledMainContainer className="fillHeight">
        <Hero name_ru={hero.name_ru} name_en={hero.name_en} />
        <About />
        <Jobs />
        <Featured />
      </StyledMainContainer>
    </Layout>
  );
};

export async function getServerSideProps(ctx: AppContext) {
  const urls = [
    {
      url: `${process.env.STRAPI_HOST}/api/hero`,
      tag: "hero",
    },
  ];

  const response = {} as TStrapiTags;

  await Promise.all(
    urls.map(async (item) => {
      const resp = await fetch(item.url);
      const parsed = (await resp.json()) as TStrapiHeroResponse;

      response.Hero = parsed.data.attributes;
    })
  );

  return {
    props: {
      hero: response.Hero,
    },
  };
}

export default IndexPage;
