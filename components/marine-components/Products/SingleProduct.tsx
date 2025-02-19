"use client";
import React, { useEffect, useState } from "react";
import AddToCartBtn from "@/components/marine-components/Cart/AddToCartBtn";
import NumberOfProducts from "@/components/marine-components/NumberOfProducts";
import ProductRigth from "./ProductRigth";
import SingleProductSlider from "@/components/marine-components/Products/SingleProductSlider";
import axios from "@/config/config";
import { FilterStateType, Products } from "@/types/interface";
import { useParams } from "next/navigation";
import ReviewSection from "./ReviewSection";
import MarineShopbanner from "../Home/MarineShopbanner";
import WishlistSection from "@/components/marine-components/Common/WishlistSection";
import ProductFIlrterSection from "./ProductFIlrterSection";
import ContentLoader from "react-content-loader";

const SingleProduct = () => {
  const params = useParams<{ slug: string }>();
  const [data, setData] = useState<Products | null>(null);
  const [RelatedProducts, setRelatedproducts] = useState<Products | []>([]);
  const [currentFilter1, setCurrentFilter1] = useState({
    newarrival: true,
    featured: false,
    popular: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/product/${params.slug}`);
        console.log("Products Detailed Data:", response.data.product);
        setData(response.data.product);
        setRelatedproducts(response.data.relatedrpoducts);
      } catch (errors) {
        console.log(errors);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return (
      <>
        <section className="w-full relative h-auto biz__container py-5">
          <ContentLoader
            speed={2}
            width={"100%"}
            height={"100%"}
            viewBox="0 0 1280 900"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="753" y="419" rx="5" ry="5" width="510" height="2" />
            <rect x="147" y="24" rx="0" ry="0" width="540" height="540" />
            <rect x="12" y="25" rx="0" ry="0" width="104" height="109" />
            <rect x="11" y="165" rx="0" ry="0" width="104" height="109" />
            <rect x="11" y="305" rx="0" ry="0" width="105" height="109" />
            <rect x="753" y="27" rx="0" ry="0" width="160" height="18" />
            <rect x="753" y="63" rx="0" ry="0" width="496" height="32" />
            <rect x="753" y="189" rx="0" ry="0" width="45" height="16" />
            <rect x="753" y="224" rx="0" ry="0" width="80" height="80" />
            <rect x="11" y="451" rx="0" ry="0" width="105" height="109" />
            <rect x="73" y="479" rx="0" ry="0" width="2" height="14" />
            <rect x="753" y="127" rx="20" ry="20" width="101" height="32" />
            <rect x="872" y="128" rx="21" ry="21" width="85" height="32" />
            <rect x="972" y="125" rx="20" ry="20" width="146" height="32" />
            <rect x="1133" y="127" rx="20" ry="20" width="66" height="32" />
            <rect x="828" y="190" rx="0" ry="0" width="175" height="16" />
            <rect x="937" y="194" rx="0" ry="0" width="8" height="8" />
            <rect x="854" y="224" rx="0" ry="0" width="80" height="80" />
            <rect x="954" y="224" rx="0" ry="0" width="80" height="80" />
            <rect x="753" y="309" rx="0" ry="0" width="80" height="5" />
            <rect x="753" y="364" rx="0" ry="0" width="53" height="16" />
            <rect x="828" y="348" rx="25" ry="25" width="432" height="42" />
            <rect x="753" y="459" rx="0" ry="0" width="140" height="32" />
            <rect x="1150" y="521" rx="0" ry="0" width="6" height="4" />
            <rect x="1157" y="496" rx="0" ry="0" width="49" height="5" />
            <rect x="753" y="504" rx="0" ry="0" width="70" height="12" />
            <rect x="753" y="549" rx="25" ry="25" width="435" height="42" />
            <rect x="1101" y="459" rx="25" ry="25" width="48" height="48" />
            <rect x="1213" y="459" rx="25" ry="25" width="48" height="48" />
            <rect x="1172" y="461" rx="0" ry="0" width="16" height="30" />
            <rect x="1212" y="547" rx="25" ry="25" width="48" height="48" />
            <rect x="12" y="627" rx="0" ry="0" width="175" height="18" />
            <circle cx="20" cy="675" r="8" />
            <rect x="40" y="670" rx="0" ry="0" width="331" height="12" />
            <circle cx="20" cy="701" r="8" />
            <rect x="40" y="696" rx="0" ry="0" width="331" height="12" />
            <circle cx="20" cy="727" r="8" />
            <rect x="40" y="722" rx="0" ry="0" width="331" height="12" />
            <circle cx="20" cy="754" r="8" />
            <rect x="40" y="749" rx="0" ry="0" width="331" height="12" />
            <rect x="11" y="800" rx="0" ry="0" width="566" height="12" />
            <rect x="11" y="882" rx="0" ry="0" width="566" height="12" />
            <rect x="11" y="817" rx="0" ry="0" width="566" height="12" />
            <rect x="11" y="838" rx="0" ry="0" width="566" height="12" />
            <rect x="11" y="860" rx="0" ry="0" width="566" height="12" />
            <rect x="895" y="635" rx="0" ry="0" width="175" height="18" />
            <circle cx="903" cy="683" r="8" />
            <rect x="923" y="678" rx="0" ry="0" width="331" height="12" />
            <circle cx="903" cy="709" r="8" />
            <rect x="923" y="704" rx="0" ry="0" width="331" height="12" />
            <circle cx="903" cy="735" r="8" />
            <rect x="923" y="730" rx="0" ry="0" width="331" height="12" />
            <circle cx="903" cy="762" r="8" />
            <rect x="923" y="757" rx="0" ry="0" width="331" height="12" />
          </ContentLoader>
        </section>
      </>
    );
  }

  return (
    <>
      <div className="p-5 md:py-10 biz__container grid gap-10">
        <div className=" grid h-full sm:grid-cols-[1.5fr_1fr] gap-10">
          <section className=" h-full relative flex flex-col  gap-10 md:sticky p-5 top-10 bg-white rounded-xl ">
            <span className="w-fit relative flex flex-col items-start gap-1   ">
              <h1 className=" text-2xl font-semibold text-primary ">
                {data.name}
              </h1>
              <div className="w-full relative gap-3 h-auto flex items-center justify-between ">
                <p className="text-base font-medium text-foreground px-2 py-1 bg-lightgray">
                  Code : {data.sku}
                </p>
                <p className="text-base font-medium text-foreground px-2 py-1 bg-secondary"></p>
                <p className="text-base font-medium text-foreground ">
                  20 Customer Reviews
                </p>
              </div>
            </span>
            <div className="w-full relative h-full grid gap-3">
              <SingleProductSlider picture={data?.image} alt={data?.alt_tag} />
            </div>
          </section>
          <div className="grid gap-5 content-start">
            <ProductRigth productDetailtype={data}  />
          </div>
        </div>
        <div className=" grid gap-5 rounded-xl ">
          <div className=" min-w-full  relative flex flex-col ">
            <h2 className="text-xl  text-primary w-fit relative h-auto border-t py-3 px-5 border-primary  font-bold">
              Description
            </h2>
            <div className="grid gap-3 border p-7 ">
              <p>{data?.description}</p>
            </div>
          </div>

          <div className=" min-w-full relative flex flex-col ">
            <h2 className="text-xl  text-primary w-fit relative h-auto border-t py-3 px-5 border-primary  font-bold">
              Shipping Policy
            </h2>
            <div className="grid gap-3 border  p-7">
              <p>
                At Aeliya Marine Tech, we strive to provide efficient and
                reliable shipping services to our customers worldwide. Please
                read the following information regarding our shipping policy:
              </p>
              <h2>Shipping Options</h2>
              <p>
                We offer various shipping options for each country, and the
                methods and costs are clearly indicated on all quotations. Our
                official logistics partners are DHL & FedEx, renowned for their
                extensive delivery networks and time-definite solutions to over
                200+ countries and territories worldwide. For specific services
                available in your country, please visit the FedEx and DHL
                websites. On rare occasions, we may use alternative carriers for
                logistical or operational reasons.
              </p>
              <h2>Processing and Delivery</h2>
              <p>
                Stock items are typically shipped from our warehouses within 24
                hours of payment confirmation. Delivery times are specified on
                all quotations, and we provide several options, including Next
                Day Delivery to many locations. We also offer time-definite and
                Saturday deliveries to meet your requirements. Once your item(s)
                have been shipped, we will send you a Shipment Notification
                email containing thame and a tracking number with a link to
                their website, allowing you to track your package.
              </p>
              <h2>Express Delivery</h2>
              <p>
                Understanding the impact and cost of equipment breakdowns, we
                provide worldwide express delivery for all our products. Through
                our network of preferred partner warehouses and distribution
                centers, we offer a unique and efficient service across the
                globe.
              </p>
              <h2>Arrange Your Own Shipping</h2>
              <p>
                If you prefer to arrange your own shipping, you have the option
                to do so. However, please note that there may be a charge for
                packing and handling. To use your own shipping company, please
                contact our sales team with your account details and the desired
                service level, and we will assist you accordingly. It is
                important to highlight that we do not accept responsibility or
                liability for any loss or damage during transit if you choose
                your own carrier. It is your responsibility to resolve any
                issues directly with your shipping company.
              </p>
              <h2>Local Customs Charges</h2>
              <p>
                Please be aware that any charges related to the import of goods
                into your country, such as local taxes and customs duties, are
                your responsibility. We do not accept responsibility or
                liability for these charges. It is crucial that you comply with
                the requirements and regulations of your country regarding
                customs fees.
              </p>
              <h2>Order Status and Issues</h2>
              <p>
                Missing or Delayed Order: Delivery usually takes 2-5 working
                days from the receipt of payment, depending on the chosen
                delivery option. In case of a delay or longer delivery time, we
                will notify you promptly. If you believe your item has been lost
                or delayed, please contact us for further assistance.
              </p>
            </div>
          </div>
        </div>

        {/* <ReviewSection /> */}
      </div>
      {/* {RelatedProducts?.length <= 0 && (
        <ProductFIlrterSection
          title={"RELATED PRODUCTS"}
          currentfilter={currentFilter1}
          setcurrentfilter={setCurrentFilter1}
        />
      )} */}
      {/* <MarineShopbanner /> */}
    </>
  );
};

export default SingleProduct;
