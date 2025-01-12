export type CoverImage = {
  url: string;
  file: string;
};

export type Image = {
  _key: string;
  url: string;
  file: string;
};

type Slug = {
  _type: string;
  current: string;
};

export type Program = {
  _id: string;
  programName: string;
  slug: Slug;
  images: Image[];
  coverImage: CoverImage;
  description: string;
  numberOfDays: number;
  destinations: string[];
  isFeatured: boolean;
  isHidden: boolean;
};
