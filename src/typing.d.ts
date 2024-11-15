interface BaseItem {
  name: string;
  desc: string;
  img: string;
}

interface Service extends BaseItem {
  title: string;
  slug: string;
}

interface PromiseType extends BaseItem {}

interface Slide {
  src: string;
  alt?: string;
}