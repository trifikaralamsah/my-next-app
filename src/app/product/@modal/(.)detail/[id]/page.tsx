"use client";
// import Modal from "@/components/core/Modal";
import { fetcher, getData } from "@/services";
import dynamic from "next/dynamic";
import Image from "next/image";
import useSWR from "swr";

const Modal = dynamic(() => import("@/components/core/Modal"));

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
    <Modal>
      <Image
        width={500}
        height={500}
        className="p-8 rounded-t-lg object-cover h-96 mx-auto aspect-square col-span-2"
        src={product.data?.image}
        alt={product.data?.name}
      />
      <div className="p-4">
        <h3>{product.data?.name}</h3>
        <p>Price: ${product.data?.price}</p>
      </div>
    </Modal>
  );
}
