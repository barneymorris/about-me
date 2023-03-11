import { Layout } from "@/components/Layout/Layout.component";
import { About } from "@/sections/About/About.section";
import { Featured } from "@/sections/Featured/Featured.section";
import { Hero } from "@/sections/Hero/Hero.section";
import { Jobs } from "@/sections/Jobs/Jobs.section";
import styled from "styled-components";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = () => {
  return (
    <Layout>
      <StyledMainContainer className="fillHeight">
        <Hero />
        <About />
        <Jobs />
        <Featured />
      </StyledMainContainer>
    </Layout>
  );
};

export default IndexPage;
