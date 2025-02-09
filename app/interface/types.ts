import { IconType } from "react-icons";

export type BannerDetail = {
  data: string;
};

export type BannerItem = {
  title: string;
  Icon: IconType;
  detail: BannerDetail[];
};

