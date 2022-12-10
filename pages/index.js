import Head from "next/head";
import { useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import FakeStoreApi from "./api/FakeStoreApi";

export default function Home() {
  const [products, setProducts] = useState(FakeStoreApi);

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* {Header} */}
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* {Banner} */}
        <Banner />
        {/* {Product Feed} */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const products = await fetch("https://fakestoreapi.com/products").then(
//     (res) => res.json()
//   );

//   return {
//     props: {
//       products,
//     },
//   };
// }
