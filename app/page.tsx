import Link from "next/link";

export default function Home() {
  return (
    <main className=" flex h-96 w-full items-center justify-center text-center">
      <div className="py-12 sm:py-20 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="py-8 text-4xl font-bold tracking-tight sm:text-6xl">
              Chat With Anyone!
            </h1>
            <Link href={'/pricing'} className="py-2 px-4 bg-slate-900 text-white rounded-md dark:bg-slate-800">
              Get Pricing
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
