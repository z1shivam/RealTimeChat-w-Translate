import Image from "next/image";

export default function Home() {
  return (
   <main className=" w-full text-center h-96 flex items-center justify-center">
    <div className="py-12 sm:py-20 lg:pb-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Chat With Anyone!
          </h1>
        </div>
      </div>
    </div>
   </main>
  );
}
