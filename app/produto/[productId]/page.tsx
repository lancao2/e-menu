"use client";

import { useRouter } from "next/navigation";
import React from "react";
import products from "@/app/data/products";
import { Iproduct } from "@/app/data/products";

export default function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const router = useRouter();
  const [product, setProduct] = React.useState<Iproduct | undefined>();

  React.useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await params;
      const foundProduct = products.find(
        (p) => p.id === resolvedParams.productId
      );
      setProduct(foundProduct);
    }

    fetchParams();
  }, [params]);

  if (!product) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p>Carregando produto...</p>
      </div>
    );
  }

  return (
    <main className="w-full h-full p-4">
      <button className="text-blue-500" onClick={() => router.back()}>
        Voltar
      </button>
      <div className="mt-4">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p>{product.description}</p>
        <p className="text-lg font-semibold mt-2">Preço: R$ {product.price}</p>
        <p className="mt-2">Tempo de preparo: {product.preparationTime}</p>
        {product.ingredients && (
          <div className="mt-4">
            <h2 className="font-semibold">Ingredientes:</h2>
            <ul className="list-disc list-inside">
              {product.ingredients.map((ingredient: string, index: number) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
