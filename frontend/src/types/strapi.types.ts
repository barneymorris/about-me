export type TStrapiAdditionalInfo = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type TStrapiHeroMain = {
  name_ru: string;
  name_en: string;
  heading_ru: string;
  heading_en: string;
  description_ru: string;
  description_en: string;
};

export type TStrapiAboutMain = {
  title_ru: string;
  title_en: string;
  text_ru: string;
  text_en: string;
  skills: string[];
  anchor: string;
};

export type TStrapiJobsMain = {
  title_ru: string;
  title_en: string;
  jobs_ru: string;
  jobs_en: string;
  anchor: string;
};

export type TStrapiFeaturesMain = {
  img: string;
  project_title_ru: string;
  project_title_en: string;
  skills: string[];
  link: string;
  project_description_ru: string;
  project_description_en: string;
};

export type TStrapiNavMain = {
  text_ru: string;
  text_en: string;
  anchor: string;
};

export type TStrapiResumeLinkMain = {
  link: string;
};

export type TStrapiSocialsMain = {
  email: string;
  socials: {
    name: string;
    url: string;
  }[];
};

export type TStrapiProjectMainItem = {
  title_ru: string;
  title_en: string;
  desc_ru: string;
  desc_en: string;
  tech: string[];
  github: string;
};

export type TStrapiProjectsMain = {
  id: number;
  attributes: TStrapiProjectMainItem & TStrapiAdditionalInfo;
};

export type TStrapiHeroResponse = {
  data: {
    id: number;
    attributes: TStrapiHeroMain & TStrapiAdditionalInfo;
  };
};

export type TStrapiAboutResponse = {
  data: {
    id: number;
    attributes: TStrapiAboutMain & TStrapiAdditionalInfo;
  };
};

export type TStrapiJobsResponse = {
  data: {
    id: number;
    attributes: TStrapiJobsMain & TStrapiAdditionalInfo;
  };
};

export type TStrapiResumeLinkResponse = {
  data: {
    id: number;
    attributes: TStrapiResumeLinkMain & TStrapiAdditionalInfo;
  };
};

export type TStrapiProjectsResponse = {
  data: {
    id: number;
    attributes: TStrapiProjectsMain & TStrapiAdditionalInfo;
  }[];
};

export type TStrapiFeaturesResponse = {
  data: {
    id: number;
    attributes: TStrapiFeaturesMain & TStrapiAdditionalInfo;
  }[];
};

export type TStrapiSocialsResponse = {
  data: {
    id: number;
    attributes: TStrapiSocialsMain & TStrapiAdditionalInfo;
  }[];
};

export type TStrapiNavResponse = {
  data: {
    id: number;
    attributes: TStrapiNavMain & TStrapiAdditionalInfo;
  }[];
};

export type TStrapiAllResponse = [
  TStrapiHeroResponse,
  TStrapiAboutResponse,
  TStrapiJobsResponse,
  TStrapiFeaturesResponse,
  TStrapiNavResponse,
  TStrapiResumeLinkResponse
];

export type TStrapiTags = {
  Hero: TStrapiHeroMain;
  About: TStrapiAboutMain;
  Jobs: TStrapiJobsMain;
  Features: TStrapiFeaturesMain;
  Nav: TStrapiNavMain;
  ResumeLink: TStrapiResumeLinkMain;
  Socials: TStrapiSocialsMain;
  Projects: TStrapiProjectsMain;
};
