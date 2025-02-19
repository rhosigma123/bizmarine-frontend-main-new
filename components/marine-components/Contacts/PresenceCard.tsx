import React from "react";
import Image from "next/image";
import Link from "next/link";
function PresenceCard() {
  return (
    <div className="flex items-start  p-5 rounded-xl  bg-lightgray  flex-col gap-4">
      <span className="w-full relative flex items-center justify-start gap-5 h-auto">
        <Image
          src={"/indianflag.png"}
          alt="indianflag"
          height={500}
          width={500}
          className="w-[70px] relative object-cover h-[50px]"
        />
        <p className="text-xl font-medium text-foreground ">UAE</p>
      </span>

      <span className="w-full relative h-auto">
        <h2 className="text-lg font-meidum text-secodary ">Address :</h2>
        <p className="text-base font-medium text-foreground ">
          Plot No. 22, Rautara Industrial Estate,Shilphata, Thane 400 612
        </p>
      </span>

      <span className="w-full relative h-auto flex flex-col gap-1 ">
        <h2 className="w-full text-lg font-medium text-webtext  ">Phone :</h2>
        <div className="w-full relative flex  flex-wrap items-center gap-2 md:gap-2 ">
          <Link
            href={"tel:(+91) 9773141989"}
            className="text-base font-medium text-webtext "
          >
            (+91) 9773141989
          </Link>
          /
          <Link
            href={"tel:(+91) 9773141989"}
            className="text-base font-medium text-webtext "
          >
            (+91) 9773141989
          </Link>
        </div>
      </span>

      <span className="w-full relative h-auto">
        <h2 className="text-lg font-meidum text-secodary ">Phone :</h2>
        <Link href="melto:sales@bizmarine.com" className="text-base font-medium text-foreground ">
        sales@bizmarine.com
        </Link>
      </span>


    </div>
  );
}

export default PresenceCard;
