export type StatusState = "confirmed" | "pending" | "placeholder";

export type SkillGroup = {
  id: string;
  title: string;
  items: string[];
};

export type ProjectEntry = {
  id: string;
  name: string;
  type: string;
  status: StatusState;
  summary: string;
  details: string[];
};

export type CertificationEntry = {
  id: string;
  name: string;
  issuer: string;
  status: StatusState;
};

export type ContactEntry = {
  id: string;
  label: string;
  value: string;
  href?: string | null;
  status: StatusState;
};

export type SceneObjectEntry = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  bullets: string[];
  note: string;
  status: StatusState;
};
