import { Layout } from "@/components/Layout/Layout.component";
import styled from "styled-components";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = () => {
  return (
    <Layout>
      <StyledMainContainer className="fillHeight"></StyledMainContainer>
    </Layout>
  );
};

export default IndexPage;
