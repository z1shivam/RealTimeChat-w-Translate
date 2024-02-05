import Link from "next/link";
import CheckoutButton from "./ui/CheckoutButton";

const tiers = [
  {
    name: "Starter",
    id: null,
    href: "#",
    priceMonthly: null,
    description: "Get Chatting Right Away with Anyone!",
    features: [
      "20 Message chat limit in chats",
      "2 participants per chat",
      "support 2 languages",
      "48 hour support response time",
    ],
  },
  {
    name: "Pro",
    id: "si_soidnfoien",
    href: "#",
    priceMonthly: "$7.00",
    description: "Get Chatting Right Away with Anyone!",
    features: [
      "Unlimited Messages",
      "Unlimited participants per chat",
      "support 5 languages",
      "24 hour support response time",
    ],
  },
];

function PricingCards({ redirect }: { redirect: boolean }) {
  return (
    <div>
      <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className="flex flex-col overflow-hidden rounded-lg border-2 border-slate-300 shadow-lg dark:border-slate-800"
          >
            <div className="bg-white p-6 dark:bg-gray-900">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
                {tier.name}
              </h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                {tier.description}
              </p>
            </div>
            <div className="flex flex-1 flex-col justify-between bg-gray-50 p-6 dark:bg-slate-900">
              <div className="flex-1">
                <dl className="space-y-6">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700 dark:text-gray-300">
                        {feature}
                      </p>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="mt-8">
                <div className="rounded-lg shadow-md">
                  {redirect ? (
                    <Link
                      href={"/register"}
                      className={`
                      block w-full rounded-lg border border-transparent bg-black px-6 py-3 text-center text-base
                      font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-black
                     hover:dark:bg-gray-300
                    `}
                    >
                      Get Started Today
                    </Link>
                  ) : (
                    tier.id && <CheckoutButton />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingCards;
