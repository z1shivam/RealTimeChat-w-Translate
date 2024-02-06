'use client'

import { useSession } from "next-auth/react";

function CheckoutButton() {
  const {data: session} =  useSession();
  const createCheckoutSession = async () => {
    if(!session) return;
    // push a document in firestore db
    // create a checkout sesssion

    // stripe extension firebase will create a checkout session.
  };
  return (
    <>
    {/* if subscribed show me the user is subscribed! */}
    <button
    onClick={()=> createCheckoutSession()}
      className={`
      block h-full w-full rounded-lg border border-transparent bg-black px-6 py-3 text-center text-base
      font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-black
      hover:dark:bg-gray-300
      `}
      >
      Checkout
    </button>
      </>
  );
}

export default CheckoutButton;
