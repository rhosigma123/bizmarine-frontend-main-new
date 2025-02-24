import { Interface } from "readline";

export interface Brands {
  id: number;
  name: string;
  order: string;
  slug: string;
  image: string;
  alt_tag: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface Branch {
  id: number;
  order: string;
  branch_name: string;
  email: string;
  email_2: string;
  phone: string;
  phone_2: string;
  address: string;
  map_url: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  twitter: string;
  whatsapp: string;
  youtube: string;
}

export interface Carousals {
  id: number;
  title: string;
  sub_title: string;
  order: string;
  image: string;
  alt_tag: string;
  button_text: string;
  button_url: string;
}

export interface Category {
  id: number;
  name: string;
  order: string;
  slug: string;
  status: string;
  image: string;
  alt_tag: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface Info {
  id: number;
  order: string;
  favicon: string;
  accent_color: string;
  company_name: string;
  company_tagline: string;
  footer_content: string;
  footer_logo: string;
  header_content: string;
  header_logo: string;
  primary_color: string;
  secondary_color: string;
  white_color: string;
}

export interface Products {
  whishlist: any;
  id: number;
  name: string;
  slug: string;
  order: string;
  description: string;
  quantity: number;
  content: string;
  brand: number;
  price: number;
  category: number;
  sku: string;
  image: string;
  alt_tag: string;
  created_at: string;
  updated_at: string;
}
export interface WishlistItem {
  id: number;
  name: string;
  slug: string;
  sku: string;
  description?: string;
  content?: string;
  image?: string;
  alt_tag?: string;
  price?: number | null;
  quantity?: number;
  order?: number;
  created_at?: string; // ISO date string
  updated_at?: string; // ISO date string
  brand?: {
    id: number;
    name: string;
    image: string;
    alt_tag: string;
    description: string;
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
  };
  category?: {
    id: number;
    name: string;
    image: string;
    alt_tag: string;
    description: string;
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
  };
}

export interface wishlistinterface {
  data: any;
}

export interface Careers {
  id: number;
  opening: string;
  slug: string;
  position: string;
  description: string;
  detail: string;
  salary: string;
  type: string;
  shift: string;
  order: number;
  location: string;
  created_at: string;
  updated_at: string;
}

export interface blog_category {
  id: number;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
}

export interface Blogs {
  id: number;
  title: string;
  slug: string;
  image: string;
  banner: string;
  alt_tag: string;
  description: string;
  content: string;
  read_time: string;
  show: boolean;
  author: string;
  created_at: string;
  updated_at: string;
  categories: blog_category[];
}

export interface RelatedBlogs {
  id: number;
  title: string;
  slug: string;
  image: string;
  banner: string;
  alt_tag: string;
  description: string;
  content: string;
  read_time: string;
  show: boolean;
  author: string;
  created_at: string;
  updated_at: string;
}

export interface RelatedBlogProps {
  data: RelatedBlogs[];
}

export interface SingleBlogData {
  content: string | TrustedHTML;
  blog: Blogs;
  related: RelatedBlogs[];
}

export interface Testimonials {
  id: number;
  name: string;
  designation: string;
  order: string;
  comment: string;
  photo: string;
  alt_tag: string;
}

export interface HomePageData {
  info: Info;
  carousals: Carousals[];
  branch: Branch;
  brand: Brands[];
  category: Category[];
  products: Products[];
  testimonials: Testimonials[];
}

export interface FilterStateType {
  newarrival: boolean;
  featured: boolean;
  popular: boolean;
}

export interface Productinterfce {
  id: number;
  name: string;
  price: number | null;
  image: string | null;
  alt_tag: string;
  description: string;
  content: string;
  quantity: number;
  sku: string;
  slug: string;
  created_at: string;
  updated_at: string;
  order: number;
  category: number;
  brand: number;
}

export interface FilterSectionType {
  title: string;
  cardcss?: string;
  currentfilter: FilterStateType;
  setcurrentfilter: React.Dispatch<React.SetStateAction<FilterStateType>>;
}
export interface CartItem {
  name: string;
  image: string;
  quantity: number;
  id: number;
  price: string;
  description: string;
}

export interface ViewproductCard {
  title:string,
  subtitle:string,
  image:string,
  btntitle:string,
  btnurl:string,
  css?:string
}
export interface CategoryCardInterface {
  slug: string;
  alt_tag: string;
  image: string;
  name: string;
  totalProducts: string;
}
export interface WarrentyCard {
  productImage: string;
  brandImage: string;
  description: string;
}

export interface Aboutbannerinterfce {
  image: string;
  title: string;
}

export interface Clients {
  alt_logo: string;
  logo: string;
  id: number;
  name: string;
  order: number;
}
export interface Certificate {
  alt_tag: string;
  image: string;
  id: number;
  name: string;
  order: number;
}
export interface FAQ {}
export interface CertificateProps {
  data: Certificate;
}

export interface categorycard {
  data: CategoryCardInterface;
}
export interface ClientsProps {
  data: Clients;
}
export interface ClientsSliderProps {
  data: Clients[];
}
export interface FAQProps {
  data: FAQ;
}
type megamanucategory= {
    id: number;
    name: string;
    image: string;
    description: string;
    alt_tag: string;
    slug: string;
  }
export interface MainInfo {
  info: Info;
  branch: Branch;
  category:megamanucategory[];
}
export interface Categories {
  category: Category;
}
export interface BrandsProps {
  brands: Brands;
}
export interface MainInfoProps {
  data: MainInfo;
}
export interface HomePageDataProps {
  data: HomePageData;
}
export interface CategoryProps {
  data: Category;
}
export interface ProductGridCardProps {
  data: Products;
  css?: string;
  wishlist: boolean;
  imagecs?:string,
}
export interface ProductListCardProps {
  data: Products;
}
export interface ProductsCardProps {
  data: Products[];
  cardcss?:string;
  gridView?: boolean;
  listView?: boolean;
}
export interface BrandsCardProps {
  data: Brands;
}
export interface BranchCardProps {
  data: Branch;
}
export interface TestimonialsCardProps {
  data: Testimonials;
}

export interface CarousalsProps {
  data: Carousals;
}
export interface InfoProps {
  data: Info;
}
export interface CareersProps {
  data: Careers;
}
export interface BlogProps {
  data: Blogs;
}
