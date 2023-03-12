export type TStrapiAdditionalInfo = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type TSrapiHeroMain = {
  name_ru: string;
  name_en: string;
  heading_ru: string;
  heading_en: string;
};

export type TStrapiHeroResponse = {
  data: {
    id: number;
    attributes: TSrapiHeroMain & TStrapiAdditionalInfo;
  };
};

export type TStrapiAllResponse = [TStrapiHeroResponse];

export type TStrapiTags = {
  Hero: TSrapiHeroMain;
};
