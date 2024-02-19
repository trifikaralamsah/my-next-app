"use client";
import { fetcher, getData } from "@/services";
import Image from "next/image";
import useSWR from "swr";

export default function ProductDetail(props: any) {
  const { params } = props;
  // const product = await getData(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/product?id=${params.id}`
  // );
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/product?id=${params.id}`,
    fetcher
  );

  const product = {
    data: data?.data,
    error,
    isLoading,
  };

  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-400 rounded-lg">
        <Image
          width={500}
          height={500}
          className="p-8 rounded-t-lg object-cover h-96 mx-auto aspect-square col-span-2"
          src={product.data?.image}
          alt="product image"
        />
        <div className="p-4">
          <h3>{product.data?.name}</h3>
          <p>Price: ${product.data?.price}</p>
        </div>
      </div>
    </div>
  );
}
