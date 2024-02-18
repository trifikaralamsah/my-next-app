import { getData } from "@/services";
import Image from "next/image";
import Link from "next/link";

type ProductPageProps = { params: { slug: string[] } };

// async function getData() {
//   // const res = await fetch("https://fakestoreapi.com/products", {
//   //   cache: "no-store",
//   // });

//   // no cache
//   // const res = await fetch("http://localhost:3000/api/product", {
//   //   cache: "no-store",
//   // });

//   // cache with revalidate time based
//   // const res = await fetch("http://localhost:3000/api/product", {
//   //   cache: "force-cache", // default cache nextjs
//   //   next: {
//   //     revalidate: 10,
//   //   },
//   // });

//   // cache with revalidate on-demand based
//   const res = await fetch("http://localhost:3000/api/product", {
//     cache: "force-cache", // default cache nextjs
//     next: {
//       tags: ["products"],
//     },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data fake api");
//   }

//   return res.json();
// }

export default async function ProductPage(props: ProductPageProps) {
  const { params } = props;
  const { products } = await getData("http://localhost:3000/api/product");
  console.log(products);
  return (
    <div className="grid grid-cols-4 mt-3 gap-5 place-items-center mx-5">
      {/* <h1>{params.slug ? "Detail Product Page" : "Product Page"}</h1> */}
      {products.length > 0 &&
        products.map((product: any) => {
          return (
            <Link
              href={`/product/detail/${product.id}`}
              key={product.id}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5"
            >
              <Image
                width={500}
                height={500}
                className="p-8 rounded-t-lg h-96"
                src={product.image}
                alt="product image"
                loading="lazy"
              />
              <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                  {product.name}
                </h5>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    ${product.price}
                  </span>
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </Link>
          );
        })}

      {params.slug && (
        <>
          <h1>Full Params : {params.slug}</h1>
          <p>Category : {params.slug[0]}</p>
          <p>Gender : {params.slug[1]}</p>
          <p>Id : {params.slug[2]}</p>
        </>
      )}
    </div>
  );
}
