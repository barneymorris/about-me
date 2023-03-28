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
  TStrapiSocialsResponse,
  TStrapiSocialsMain,
  TStrapiProjectsMain,
  TStrapiProjectsResponse,
} from "@/types/strapi.types";
import styled from "styled-components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import { Projects } from "@/sections/Projects/Projects.component";
import { Contact } from "@/sections/Contact/Contact.component";
import Head from "next/head";
import { useRouter } from "next/router";

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
  socials: TStrapiSocialsMain;
  projects: TStrapiProjectsResponse;
};

const IndexPage: React.FC<Props> = (props) => {
  const { hero, about, jobs, features, nav, resumeLink, socials, projects } =
    props;

  const { locale } = useRouter();

  const title =
    locale === "ru"
      ? "Борис Сырпин | Fullstack разработчик "
      : "Boris Syrpin | Fullstack Developer";

  const desc =
    locale === "ru"
      ? "Привет! Я Борис Сырпин и я фулстэк React разработчик. Ищете в компанию фротендера/бэкэндера? Напишите мне!"
      : "Hello, I'm Boris Syrpin. You are looking for frontend/backend developer? Contact me!";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout nav={nav} resumeLink={resumeLink} socials={socials}>
        <StyledMainContainer className="fillHeight">
          <Hero {...hero} />
          <About {...about} />
          <Jobs {...jobs} />
          <Featured data={features.data} />
          <Projects projects={projects} />
          <Contact email={socials.email} />
        </StyledMainContainer>
      </Layout>
    </>
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
    {
      url: `${process.env.STRAPI_HOST}/api/social`,
      tag: "Socials",
    },
    {
      url: `${process.env.STRAPI_HOST}/api/projects`,
      tag: "Projects",
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
        | TStrapiNavMain
        | TStrapiSocialsResponse
        | TStrapiProjectsMain;

      if (
        item.tag !== "Features" &&
        item.tag !== "Nav" &&
        item.tag !== "Projects"
      ) {
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
        "projects",
        "contact",
      ])),
      hero: response.Hero,
      about: response.About,
      jobs: response.Jobs,
      features: response.Features,
      nav: response.Nav,
      resumeLink: response.ResumeLink,
      socials: response.Socials,
      projects: response.Projects,
    },
  };
};

export default IndexPage;
