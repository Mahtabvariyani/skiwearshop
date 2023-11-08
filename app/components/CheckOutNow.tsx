"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
}

export default function CheckoutNow({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(priceId: string) {
    checkoutSingleItem(priceId);
  }

const product = {
  name: name,
  description: description,
  price: price,
  currency: currency,
  image: urlFor(image).url(),
  price_id: price_id,
};
return (
  <Button
    variant="outline"
    onClick={() => {
      buyNow(product.price_id);
    }}
  >
    Checkout Now
  </Button>
);
}