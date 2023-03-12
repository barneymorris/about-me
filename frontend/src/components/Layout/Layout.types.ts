import {
  TStrapiNavResponse,
  TStrapiResumeLinkMain,
} from "@/types/strapi.types";
import React from "react";

export type Props = {
  children: React.ReactNode;
  nav: TStrapiNavResponse;
  resumeLink: TStrapiResumeLinkMain;
};
