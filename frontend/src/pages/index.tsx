import { Layout } from "@/components/Layout/Layout.component";
import { About } from "@/sections/About/About.section";
import { Featured } from "@/sections/Featured/Featured.section";
import { Hero } from "@/sections/Hero/Hero.section";
import { Jobs } from "@/sections/Jobs/Jobs.section";
import {
  TStrapiHeroMain,
  TStrapiHeroResponse,
  TStrapiAboutResponse,
  TStrapiTags,
  TStrapiAboutMain,
  TStrapiJobsMain,
  TStrapiFeaturesResponse,
  TStrapiFeaturesMain,
  TStrapiNavMain,
  TStrapiNavResponse,
  TStrapiResumeLinkMain,
} from "@/types/strapi.types";
import styled from "styled-components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

type Props = {
  hero: TStrapiHeroMain;
  about: TStrapiAboutMain;
  jobs: TStrapiJobsMain;
  features: TStrapiFeaturesResponse;
  nav: TStrapiNavResponse;
  resumeLink: TStrapiResumeLinkMain;
};

const IndexPage: React.FC<Props> = (props) => {
  console.log("props", props);
  const { hero, about, jobs, features, nav, resumeLink } = props;

  return (
    <Layout nav={nav} resumeLink={resumeLink}>
      <StyledMainContainer className="fillHeight">
        <Hero {...hero} />
        <About {...about} />
        <Jobs {...jobs} />
        <Featured data={features.data} />
      </StyledMainContainer>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const urls = [
    {
      url: `${process.env.STRAPI_HOST}/api/hero`,
      tag: "Hero",
    },
    {
      url: `${process.env.STRAPI_HOST}/api/about`,
      tag: "About",
    },
    {
      url: `${process.env.STRAPI_HOST}/api/job`,
      tag: "Jobs",
    },
    {
      url: `${process.env.STRAPI_HOST}/api/features`,
      tag: "Features",
    },
    {
      url: `${process.env.STRAPI_HOST}/api/navs`,
      tag: "Nav",
    },
    {
      url: `${process.env.STRAPI_HOST}/api/resume-link`,
      tag: "ResumeLink",
    },
  ];

  const response = {} as TStrapiTags;

  await Promise.all(
    urls.map(async (item) => {
      const resp = await fetch(item.url);

      const parsed = (await resp.json()) as
        | TStrapiHeroResponse
        | TStrapiAboutResponse
        | TStrapiJobsMain
        | TStrapiFeaturesMain
        | TStrapiNavMain;

      if (item.tag !== "Features" && item.tag !== "Nav") {
        // @ts-ignore
        response[item.tag] = parsed.data.attributes;
      } else {
        // @ts-ignore
        response[item.tag] = parsed;
      }
    })
  );

  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        "common",
        "hero",
        "about",
        "featured",
        "nav",
      ])),
      hero: response.Hero,
      about: response.About,
      jobs: response.Jobs,
      features: response.Features,
      nav: response.Nav,
      resumeLink: response.ResumeLink,
    },
  };
};

export default IndexPage;
