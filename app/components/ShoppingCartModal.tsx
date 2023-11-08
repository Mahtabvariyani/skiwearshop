"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";

export default function ShoppingCartModal() {
  const {
    cartCount,
    shouldDisplayCart,
    totalPrice,
    removeItem,
    handleCartClick,
    cartDetails,
    redirectToCheckout,
  } = useShoppingCart();

  async function handleCheckoutClick(event: any) {
    event.preventDefault();
    try {
      const result = await redirectToCheckout();
      if (result?.error) console.log("result");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-yellow-200">
              {cartCount === 0 ? (
                <h1 className="text-rose-600 text-4xl py-10">
                  You dont have any Items
                </h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className="flex py-6 ">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-yellow-200">
                        <Image
                          src={entry.image as string}
                          alt="image"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col ">
                        <div>
                          <div className="flex justify-between text-base  font-medium text-bold text-teal-200 ">
                            <h3>{entry.name}</h3>
                            <p className="ml-4">${entry.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-rose-300 line-clamp-2">
                            {entry.description}
                          </p>
                        </div>
                        <div className="flex flex-1 justify-between text-sm">
                          <p className="text-yellow-300 text-bold">
                            Items:
                            {entry.quantity}
                          </p>
                          <div className="flex">
                            <Button
                              type="button"
                              onClick={() => removeItem(entry.id)}
                              className="font-medium text-bold text-teal-700 hover:text-rose-600/80 "
                            >
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
          <div className="border-t border-yellow-100 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base text-yellow-100">
              <p>SubTotal</p>
              <p>${totalPrice}</p>
            </div>
            <p className="mt-0.5 text-sm text-rose-300">
              Shipping will be Added at the CheckOut!
            </p>
            <div className="mt-6">
              <Button
                onClick={handleCheckoutClick}
                className="w-full text-bold text-rose-800 hover:bg-rose-500 hover:text-white"
              >
                Check Out
              </Button>
            </div>

            <div className="mt-6">
              <Button
                className="w-full text-bold text-teal-800 hover:bg-teal-500 hover:text-white"
                onClick={() => handleCartClick()}
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
