interface BaseItem {
  name: string;
  desc: string;
  img: string;
}

interface Service extends BaseItem {
  color: string;
}

interface PromiseType extends BaseItem {}

interface Slide {
  src: string;
  alt?: string;
}