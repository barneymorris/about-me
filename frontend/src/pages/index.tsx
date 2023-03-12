import { Layout } from "@/components/Layout/Layout.component";
import { About } from "@/sections/About/About.section";
import { Featured } from "@/sections/Featured/Featured.section";
import { Hero } from "@/sections/Hero/Hero.section";
import { Jobs } from "@/sections/Jobs/Jobs.section";
import {
  TSrapiHeroMain,
  TStrapiHeroResponse,
  TStrapiTags,
} from "@/types/strapi.types";
import styled from "styled-components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

type Props = {
  hero: TSrapiHeroMain;
};

const IndexPage: React.FC<Props> = (props) => {
  console.log("props", props);
  const { hero } = props;

  return (
    <Layout>
      <StyledMainContainer className="fillHeight">
        <Hero
          name_ru={hero.name_ru}
          name_en={hero.name_en}
          heading_en={hero.heading_en}
          heading_ru={hero.heading_ru}
        />
        <About />
        <Jobs />
        <Featured />
      </StyledMainContainer>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
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
      ...(await serverSideTranslations(locale as string, ["common", "hero"])),
      hero: response.Hero,
    },
  };
};

export default IndexPage;
