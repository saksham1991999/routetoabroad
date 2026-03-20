export type PillarId = 'education' | 'tourism' | 'trade';

export type Theme = 'light' | 'dark';

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface FormFieldError {
  field: string;
  message: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  ariaLabel: string;
}

export interface NavLink {
  label: string;
  path: string;
  translationKey: string;
}
