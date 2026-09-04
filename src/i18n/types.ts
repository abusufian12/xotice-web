export interface Dictionary {
  metadata: {
    home: { title: string; description: string };
    about: { title: string; description: string };
    business: { title: string; description: string };
    sisterConcerns: { title: string; description: string };
    philosophy: { title: string; description: string };
    contact: { title: string; description: string };
  };
  nav: {
    home: string;
    about: string;
    business: string;
    sisterConcerns: string;
    philosophy: string;
    contact: string;
    contactUs: string;
  };
  hero: {
    label: string;
    title: string;
    titleLine2: string;
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  intro: {
    label: string;
    title: string;
    titleLine2: string;
    paragraph1: string;
    paragraph2: string;
  };
  coreValues: {
    label: string;
    title: string;
    items: Array<{ number: string; title: string; description: string }>;
  };
  japanWorld: {
    label: string;
    title: string;
    description: string;
  };
  businesses: {
    label: string;
    title: string;
    subtitle: string;
    items: Array<{ title: string; description: string }>;
    explore: string;
    futureBusiness: string;
    futureDescription: string;
  };
  sisterConcerns: {
    label: string;
    title: string;
    subtitle: string;
    explore: string;
    items: Array<{ number: string; name: string; category: string; description: string }>;
  };
  philosophy: {
    label: string;
    title: string;
    quote: string;
    statement: string;
    keywords: string[];
  };
  vision: {
    label: string;
    title: string;
    description: string;
    concept: string;
    conceptSub: string;
  };
  why: {
    label: string;
    title: string;
    items: Array<{ number: string; title: string; description: string }>;
  };
  contactCta: {
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
  about: {
    label: string;
    title: string;
    subtitle: string;
    mission: { title: string; content: string };
    approach: { title: string; content: string };
    global: { title: string; content: string };
  };
  businessPage: {
    label: string;
    title: string;
    subtitle: string;
    intro: string;
  };
  sisterConcernsPage: {
    label: string;
    title: string;
    subtitle: string;
    intro: string;
  };
  philosophyPage: {
    label: string;
    title: string;
    intro: string;
    principles: Array<{ title: string; content: string }>;
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    description: string;
    form: {
      name: string;
      email: string;
      company: string;
      subject: string;
      message: string;
      submit: string;
      sending: string;
      success: string;
    };
    info: {
      title: string;
      company: string;
      companyEn: string;
      address: string;
      phone: string;
      email: string;
      hours: string;
      hoursValue: string;
    };
  };
  footer: {
    tagline: string;
    company: string;
    companyEn: string;
    companyInfo: string;
    privacy: string;
    contact: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
    hoursValue: string;
    copyright: string;
  };
}
