import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import Link from "next/link";

const Home: NextPage = () => {
  // const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Sherrie Lynn - Mobile Notary, Queen Creek</title>
        <meta name="description" content="Sherrie Lynn: Mobile Notary; Queen Creek, AZ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container flex flex-col items-center justify-center min-h-screen p-10 px-0 mx-auto md:py-20 md:p-10 md:px-0">
        <h1 className="font-extrabold text-center text-7xl">
          Sherrie Lynn - Mobile Notary
        </h1>

        <h3 className="items-center m-5 text-3xl">Services</h3>

        <section className="grid items-start grid-cols-1 gap-10 p-5 md:p-0 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 ">
          <section className="p-5 py-10 text-center duration-500 transform border-2 cursor-pointer border-neutral-800 rounded-2xl hover:scale-105 hover:border-blue-600 hover:-translate-y-1 hover:shadow-2xl">
            <h1 className="my-5 text-3xl">Mobile Notary</h1>
            <p className="mb-5">Serving Queen Creek, Arizona and surrounding areas.</p>
            <button className="p-2 px-6 text-white bg-blue-500 rounded-md hover:bg-blue-600">
              <Link href="/notary">
                Learn More
              </Link>
            </button>
          </section>

          <section className="p-5 py-10 text-center duration-500 transform border-2 cursor-pointer border-neutral-800 rounded-2xl hover:scale-105 hover:border-blue-600 hover:-translate-y-1 hover:shadow-2xl">
            <h1 className="my-5 text-3xl">Photographer</h1>
            <p className="mb-5">
              Professional photographer, specializing in family and individual natural light portrates. 
            </p>
            <button className="p-2 px-6 text-white bg-blue-500 rounded-md hover:bg-blue-600">
              <Link href="/photography">
                Learn More
              </Link>
            </button>
          </section>

          <section className="p-5 py-10 text-center duration-500 transform border-2 cursor-pointer border-neutral-800 rounded-2xl hover:scale-105 hover:border-blue-600 hover:-translate-y-1 hover:shadow-2xl">
            <h1 className="my-5 text-3xl">Finance coaching</h1>
            <p className="mb-5">
              Get the most out of your budget to live life to your fullest.
            </p>
            <button className="p-2 px-6 text-white bg-blue-500 rounded-md hover:bg-blue-600">
              <Link href="/finance">
                Learn More
              </Link>
            </button>
          </section>
        </section>
      </div>
    </>
  );
};

export default Home;
