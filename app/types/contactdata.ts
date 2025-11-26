export type ContactType = "phone" | "email" | "support" | "office";

export interface ContactItem {
  Id: number;
  Title: string;
  Icon: any;
  Details1: string | string[];
  Details2?: string;
}
