"use client";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState } from "react";

interface iAppProps {
  images: any;
}

export default function ImagesGallery({ images }: iAppProps) {
  const [bigImage, setBigImage] = useState(images[0]);
  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  };
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, index: any) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg  bg-yellow-100"
          >
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              onClick={() => handleSmallImageClick(image)}
              alt="Photo"
              className="h-full w-full object-cover object-center cursor-pointer"
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
      <span className="absolute left-0 
        top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase first-letter:tracking-wider text-white
        
        ">
SALE
        </span>
        <Image
          src={urlFor(bigImage).url()}
          alt="bigImage"
          width={500}
          height={500}
          className="h-full w-full object-cover object-center"
        />
   
      </div>
    </div>
  );
}
