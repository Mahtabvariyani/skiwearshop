import AddToBag from "@/app/components/AddToBag";
import ImagesGallery from "@/app/components/ImagesGallery";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import {  Ship, Star } from "lucide-react";

export interface fullProduct {
  _id: string;
  images: any;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
  description: string;
  price_id:string;
}

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]{
        _id,
          images,
          name,
          price,
          description,
          "slug":slug.current,
          "categoryName":category->name,
          price_id
      }`;
  const data = await client.fetch(query);
  return data;
}

export const dynamic = "force-dynamic";

export default async function page({ params }: { params: { slug: string } }) {
  const data: fullProduct = await getData(params.slug);
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImagesGallery images={data.images} />

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-yellow-300 text-bold">
                {data.categoryName}
              </span>
              <h2 className="text-2xl font-extrabold text-teal-400 lg:text-3xl">
                {data.name}
              </h2>
            </div>
            <div className="mb-6 items-center gap-3 md:mb-10">
              <Button className="rounded-full gap-x-2">
                <span>4.2</span>
                <Star size={15} />
              </Button>
              <span className="text-sm text-yellow-200 transition duration-150 pl-2">
                56 Rating
              </span>
            </div>
            <div className="mb-4 ">
              <div className="flex items-end gap-2">
                <span className="text-xl text-bold text-yellow-300 md:text-2xl">
                  ${data.price}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  ${data.price + 70}
                </span>
              </div>
              <span className="text-teal-500">Incl. Vat Plus Shipping</span>
            </div>
            <div className="mb-6 flex items-center gap-2 text-teal-200">
              <Ship />
              <span className="text-rose-200 text-sm">2-3 Shipping Day</span>
            </div>
            <div className="flex gap-2.5">
            <AddToBag
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
              <Button className="bg-teal-500">Add to Bag</Button>
              <Button className="bg-rose-500">CheckOut Now</Button>
            </div>
            <p className="mt-12 text-base text-gray-400 tracking-wide text-bold">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
