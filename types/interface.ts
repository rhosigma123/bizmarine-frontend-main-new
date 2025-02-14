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
    categories: blog_category[]
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
    data: RelatedBlogs[]
}

export interface SingleBlogData {
    blog: Blogs;
    related: RelatedBlogs[]
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

export interface FilterSectionType{
    title:string,
    cardcss?:string,
    
}


export interface ViewproductCard{
    image:string,

}
export interface CategoryCardInterface{
    slug: any;
    alt_tag: any;
    image:string,
    name:string,
    totalProducts:string
}
export interface WarrentyCard{
    productImage:string,
    brandImage:string,
    description:string
}

export interface Aboutbannerinterfce{
    image:string,
    title:string
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
export interface FAQ {

}
export interface CertificateProps {
    data: Certificate
}

export interface categorycard{
    data:CategoryCardInterface
}
export interface ClientsProps {
    data: Clients
}
export interface ClientsSliderProps {
    data: Clients[];
}
export interface FAQProps {
    data: FAQ
}

export interface MainInfo {
    info: Info;
    branch: Branch;
}
export interface Categories {
    category: Category
}
export interface BrandsProps {
    brands: Brands
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
    css?:string
    wishlist:boolean
}
export interface ProductListCardProps {
    data: Products;
}
export interface ProductsCardProps {
    data: Products[];
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
