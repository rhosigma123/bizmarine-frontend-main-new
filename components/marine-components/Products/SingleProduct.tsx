"use client";
import React, { useEffect, useState } from "react";
import AddToCartBtn from "@/components/marine-components/Cart/AddToCartBtn";
import NumberOfProducts from "@/components/marine-components/NumberOfProducts";
import SingleProductSlider from "@/components/marine-components/Products/SingleProductSlider";
import axios from "@/config/config";
import { Products } from "@/types/interface";
import { useParams } from "next/navigation";

const SingleProduct = () => {
  const params = useParams<{ id: string }>();
  const [data, setData] = useState<Products | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/products/${params.id}`);
        console.log("Products Detailed Data:", response.data.product);
        setData(response.data.product);
      } catch (errors) {
        console.log(errors);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container p-5 md:py-10 grid gap-10">
      <div className=" grid sm:grid-cols-[1fr_1fr] gap-5">
        <div className="grid">
          <SingleProductSlider picture={data?.image} alt={data?.alt_tag} />
        </div>
        <div className="grid gap-5 content-start">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-secondary-foreground">
            {data?.name}
          </h1>
          <span>Product SKY: 85550</span>
          <span>
            <strong>Available: </strong>Only {data?.quantity} item in stock
          </span>
          <div className="flex gap-5 justify-between">
            {/* <NumberOfProducts /> */}
            {/* <AddToCartBtn className="w-full" product={data} /> */}
          </div>
        </div>
        {/* <div className="p-5 grid col-span-1 sm:col-span-2 lg:col-span-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 border rounded-xl">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="grid grid-cols-[.5fr_2fr] sm:grid-cols-[1fr_2.5fr] gap-x-3"
              >
                <Image
                  className="row-span-2 w-[70px] h-[70px]"
                  width={80}
                  height={80}
                  src={offer.icon}
                  alt={offer.offerTitle}
                />
                <h3 className="col-span-1 font-bold text-xl text-primary">
                  {offer.offerTitle}
                </h3>
                <p className="col-span-1 font-medium text-base">
                  {offer.offerDetail}
                </p>
              </div>
            ))}
          </div> */}
      </div>
      <div className="border grid gap-5 rounded-xl p-5">
        <h2 className="text-2xl text-secondary-foreground font-bold">
          Description
        </h2>
        <div className="grid gap-3">
          {/* <p className="text-xl font-medium">+Gf+ 546 D32Dn25 Ball Valve</p>
          <p className="text-xl font-medium">+Gf+</p>
          <p className="text-xl font-medium">Type: 546 D32Dn25</p>
          <p className="text-xl font-medium">Pvc-u Epdm</p>
          <p className="text-xl font-medium">2 20180807</p>
          <p className="text-xl font-medium">Pn16 </p>
          <p className="text-xl font-medium">Dn25</p>
          <p className="text-xl font-medium">2 20180807</p>
          <p className="text-xl font-medium">Pvc-u Epdm</p> */}
          <p>{data?.description}</p>
        </div>
        <h2 className="text-2xl text-secondary-foreground font-bold">
          Shipping Policy
        </h2>
        <div className="grid gap-5">
          <p>
            At Aeliya Marine Tech, we strive to provide efficient and reliable
            shipping services to our customers worldwide. Please read the
            following information regarding our shipping policy:
          </p>
          <h2>Shipping Options</h2>
          <p>
            We offer various shipping options for each country, and the methods
            and costs are clearly indicated on all quotations. Our official
            logistics partners are DHL & FedEx, renowned for their extensive
            delivery networks and time-definite solutions to over 200+ countries
            and territories worldwide. For specific services available in your
            country, please visit the FedEx and DHL websites. On rare occasions,
            we may use alternative carriers for logistical or operational
            reasons.
          </p>
          <h2>Processing and Delivery</h2>
          <p>
            Stock items are typically shipped from our warehouses within 24
            hours of payment confirmation. Delivery times are specified on all
            quotations, and we provide several options, including Next Day
            Delivery to many locations. We also offer time-definite and Saturday
            deliveries to meet your requirements. Once your item(s) have been
            shipped, we will send you a Shipment Notification email containing
            thame and a tracking number with a link to their website, allowing
            you to track your package.
          </p>
          <h2>Express Delivery</h2>
          <p>
            Understanding the impact and cost of equipment breakdowns, we
            provide worldwide express delivery for all our products. Through our
            network of preferred partner warehouses and distribution centers, we
            offer a unique and efficient service across the globe.
          </p>
          <h2>Arrange Your Own Shipping</h2>
          <p>
            If you prefer to arrange your own shipping, you have the option to
            do so. However, please note that there may be a charge for packing
            and handling. To use your own shipping company, please contact our
            sales team with your account details and the desired service level,
            and we will assist you accordingly. It is important to highlight
            that we do not accept responsibility or liability for any loss or
            damage during transit if you choose your own carrier. It is your
            responsibility to resolve any issues directly with your shipping
            company.
          </p>
          <h2>Local Customs Charges</h2>
          <p>
            Please be aware that any charges related to the import of goods into
            your country, such as local taxes and customs duties, are your
            responsibility. We do not accept responsibility or liability for
            these charges. It is crucial that you comply with the requirements
            and regulations of your country regarding customs fees.
          </p>
          <h2>Order Status and Issues</h2>
          <p>
            Missing or Delayed Order: Delivery usually takes 2-5 working days
            from the receipt of payment, depending on the chosen delivery
            option. In case of a delay or longer delivery time, we will notify
            you promptly. If you believe your item has been lost or delayed,
            please contact us for further assistance.
          </p>
        </div>
        <h2 className="text-2xl text-secondary-foreground font-bold">
          Customer Reviews
        </h2>
      </div>
    </div>
  );
};

export default SingleProduct;
