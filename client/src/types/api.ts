export type TechIcon = {
  icon: {
    url: string;
  };
  title: string;
};

export type Module = {
  title: string;
  subtitle: string;
  description: string;
};

export type SocialLink = {
  title: string;
  url: string;
};

export type Image = {
  url: string;
  alternativeText: string;
};

export type Author = {
  photo: Image;
  name: string;
  role: string;
  socialLinks: SocialLink[];
  description: string;
};

export type Review = {
  name: string;
  text: string;
  photo: {
    url: string;
  };
};

export type LogoProps = Image;

export type HeaderProps = {
  title: string;
  description: string;
  button: {
    label: string;
    url: string;
  };
  image: Image;
};

export type SectionAboutProps = {
  title: string;
  description: string;
  image: Image;
};

export type SectionTechProps = {
  title: string;
  techIcons: TechIcon[];
};

export type SectionConceptsProps = {
  title: string;
  concepts: Array<{
    title: string;
  }>;
};

export type SectionModulesProps = {
  title: string;
  modules: Module[];
};

export type SectionAgendaProps = {
  title: string;
  description: string;
};

export type PricingBoxProps = {
  totalPrice: number;
  numberInstallments: number;
  priceInstallments: number;
  benefits: string;
  button: {
    label: string;
    url: string;
  };
};

export type SectionAboutUsProps = {
  title: string;
  authors: Author[];
};

export type SectionReviewsProps = {
  title: string;
  reviews: Review[];
};

export type SectionFaqProps = {
  title: string;
  questions: {
    question: string;
    answer: string;
  };
};

export type LandingPageProps = {
  logo: LogoProps;
  header: HeaderProps;
  sectionAboutProject: SectionAboutProps;
  sectionTech: SectionTechProps;
  sectionConcepts: SectionConceptsProps;
  sectionModules: SectionModulesProps;
  sectionAgenda: SectionAgendaProps;
  pricingBox: PricingBoxProps;
  sectionAboutUs: SectionAboutUsProps;
  sectionReviews: SectionReviewsProps;
  sectionFaq: SectionFaqProps;
};
