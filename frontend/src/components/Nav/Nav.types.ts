import {
  TStrapiNavResponse,
  TStrapiResumeLinkMain,
} from "@/types/strapi.types";

export type TStyledHeader = {
  scrollDirection: string;
  scrolledToTop: boolean;
};

export type Props = {
  isHome: boolean;
  nav: TStrapiNavResponse;
  resumeLink: TStrapiResumeLinkMain;
};
