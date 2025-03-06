interface BaseItem {
  name: string;
  desc: string;
}

interface Service extends BaseItem {
  title: string;
  slug: string;
  img: string;
}

type IconName =
  | 'HiShieldCheck'
  | 'MdWorkspacePremium'
  | 'FaUserDoctor'
  | 'FaMagnifyingGlassDollar';
interface PromiseType extends BaseItem {
  img: IconName;
}

interface Slide {
  src: string;
  alt?: string;
}
