export type TechItem = {
  name: string;
  icon?: string;
};

export type ProjectModalType = "heypay" | "letitu" | "lawsdaq" | "reservation";

export type TestAccount = {
  role: string;
  id: string;
  pw: string;
  description: string;
};

export type ProjectItem = {
  id?: string;
  name?: string;
  title?: string;
  description?: string;
  subtitle?: string;
  summary?: string;
  period?: string;
  category?: string;
  techStack: (TechItem | string)[];
  link?: string;
  demoUrl?: string;
  githubUrl?: string;
  modalType?: ProjectModalType;
  testAccounts?: TestAccount[];
  keyFeatures?: string[];
};
