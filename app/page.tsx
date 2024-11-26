"use client";

import { useRouter } from "next/navigation"; // Importar o useRouter
import HeaderComponent from "@/app/Components/headerComponent";
import configCliente from "./data/configCliente";
import SearchComponent from "./Components/searchComponent";
import { PiFireSimpleLight } from "react-icons/pi";
import ItemHeightComponent from "./Components/itemHighlightComponent";
import ItemfoodComponente from "./Components/itemFoodComponente";
import Categorys from "./data/Categorys";
import { useState } from "react";
import products from "./data/products";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("featured");
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter(); // Inicializar o hook de roteamento

  const handleCategoryClick = (categoryId: any) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  // Função para redirecionar ao clicar no produto
  const handleProductClick = (productId: string) => {
    router.push(`/produto/${productId}`);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory
      ? selectedCategory === "featured"
        ? product.featured === true
        : product.categoryId === selectedCategory
      : true;

    const matchesSearch = searchTerm
      ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.ingredients &&
          product.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(searchTerm.toLowerCase())
          ))
      : true;

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="w-full h-full flex justify-center">
      <div className="w-full max-w-screen-sm">
        <HeaderComponent configCliente={configCliente} />
        <SearchComponent onSearchChange={handleSearchChange} />
        <section id="sugestion" className="w-full px-4">
          <div className="w-full h-36 bg-slate-200 rounded-md mt-3"></div>
        </section>
        <section id="filters" className="w-full mt-3">
          <div className="flex gap-3 overflow-x-scroll pb-2 mx-4">
            <ItemHeightComponent
              text={"Em destaque"}
              icon={<PiFireSimpleLight size={22} />}
              active={selectedCategory === "featured"}
              onClick={() => handleCategoryClick("featured")}
            />
            {Categorys.map((category) => (
              <ItemHeightComponent
                key={category.id}
                text={category.name}
                icon={<category.icon size={22} />}
                active={selectedCategory === category.id}
                onClick={() => handleCategoryClick(category.id)}
              />
            ))}
          </div>
        </section>
        <section className="px-4 mt-2 w-full flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-5 w-full">
            {filteredProducts.map((product) => {
              const iconCategory = Categorys.find(
                (cat) => cat.id === product.categoryId
              );
              if (!iconCategory) return null;
              return (
                <div
                  key={product.id}
                  onClick={() => handleProductClick(product.id)} // Adicionado clique
                  className="cursor-pointer"
                >
                  <ItemfoodComponente
                    icon={<iconCategory.icon size={22} />}
                    title={product.name}
                    value={product.price}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
