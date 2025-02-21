import { IconType } from "react-icons";

export type BannerDetail = {
  data: string;
};

export type BannerItem = {
  title: string;
  Icon: IconType;
  detail: BannerDetail[];
};

export type service = {
  id: number;
  service: string;
  details: string;
  price: number;
};

export type team = {
  id: number;
  name: string;
  designation: string;
  NMC_id?: string;
  description: string;
};
