import { client } from "../lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
async function getData() {
  const query = `*[_type == 'product'][0...4] | order(_createdAt desc) {
        _id,
          price,
          name,
          "slug":slug.current,
          "categoryName":category->name,
          "imageUrl":images[0].asset->url}`;

  const data = await client.fetch(query);
  return data;
}

export interface simplifiedProduct {
  _id: string;
  imageUrl: string;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
}

export default async function Newest() {
  const data: simplifiedProduct[] = await getData();
console.log(data)
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-yellow-600">
            Our Newest Product
          </h2>
          <Link href="/all" className="text-rose-100 flex items-center gap-x-1">
            <span>
              <ArrowRight />
            </span>
            See All
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-rose-200 group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.imageUrl}
                  alt="products image"
                  className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                  width={300}
                  height={300}
                />
              </div>
              <div className="flex justify-between mt-4">
                <div>
                  <h3 className="text-sm text-teal-300">
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-teal-100">{product.categoryName}</p>
                </div>
                <p className="text-sm font-medium ">
                  €{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
