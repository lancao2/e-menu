import { v4 as uuidv4 } from "uuid";

interface Iproduct{
    id: string;
    name: string;
    description: string; 
    price: string; 
    people: number; 
    preparationTime: string; 
    categoryId: string; 
    image: string;
    featured?: boolean,
    ingredients: string[]
}

const products: Iproduct[] = [
  {
    id: uuidv4(),
    name: "Cheeseburger Clássico",
    description: "Sanduíche com hambúrguer suculento, queijo derretido e molho especial.",
    price: "12.99",
    people: 1,
    preparationTime: "15 minutos",
    categoryId: "550e8400-e29b-41d4-a716-446655440000",
    image: "https://example.com/images/cheeseburger.jpg",
    featured: true,
    ingredients: ["Hambúrguer", "Queijo", "Pão", "Molho especial"],
  },
  {
    id: uuidv4(),
    name: "Double Bacon Burger",
    description: "Hambúrguer duplo com bacon crocante e molho barbecue.",
    price: "18.99",
    people: 1,
    preparationTime: "20 minutos",
    categoryId: "550e8400-e29b-41d4-a716-446655440000",
    image: "https://example.com/images/double-bacon.jpg",
    featured: true,
    ingredients: ["Dois hambúrgueres", "Bacon", "Pão", "Molho barbecue"],
  },
  {
    id: uuidv4(),
    name: "Veggie Delight",
    description: "Sanduíche vegetariano com legumes frescos e molho de iogurte.",
    price: "14.99",
    people: 1,
    preparationTime: "15 minutos",
    categoryId: "550e8400-e29b-41d4-a716-446655440000",
    image: "https://example.com/images/veggie-delight.jpg",
    ingredients: ["Pão", "Legumes frescos", "Molho de iogurte"],
  },
  {
    id: uuidv4(),
    name: "Chicken Crispy",
    description: "Sanduíche de frango empanado com alface e maionese especial.",
    price: "13.99",
    people: 1,
    preparationTime: "18 minutos",
    categoryId: "550e8400-e29b-41d4-a716-446655440000",
    image: "https://example.com/images/chicken-crispy.jpg",
    ingredients: ["Frango empanado", "Pão", "Alface", "Maionese especial"],
  },
  {
    id: uuidv4(),
    name: "X-Salada Especial",
    description: "Clássico sanduíche com hambúrguer, queijo, tomate, alface e maionese.",
    price: "11.99",
    people: 1,
    preparationTime: "12 minutos",
    categoryId: "550e8400-e29b-41d4-a716-446655440000",
    image: "https://example.com/images/x-salada.jpg",
    ingredients: ["Hambúrguer", "Queijo", "Tomate", "Alface", "Maionese"],
  },
  {
    id: uuidv4(),
    name: "Coca-Cola Lata",
    description: "Refrigerante gelado de 350ml.",
    price: "4.50",
    people: 1,
    preparationTime: "2 minutos",
    categoryId: "550e8400-e29b-41d4-a716-446655440001",
    image: "https://example.com/images/coca-cola.jpg",
    featured: true,
    ingredients: [],
  },
  {
    id: uuidv4(),
    name: "Suco de Laranja Natural",
    description: "Suco feito na hora com laranjas frescas.",
    price: "6.50",
    people: 1,
    preparationTime: "5 minutos",
    categoryId: "550e8400-e29b-41d4-a716-446655440001",
    image: "https://example.com/images/suco-laranja.jpg",
    ingredients: [],
  },
  {
    id: uuidv4(),
    name: "Milkshake de Morango",
    description: "Milkshake cremoso com cobertura de morango.",
    price: "9.99",
    people: 1,
    preparationTime: "7 minutos",
    categoryId: "550e8400-e29b-41d4-a716-446655440001",
    image: "https://example.com/images/milkshake-morango.jpg",
    ingredients: [],
  },
  {
    id: uuidv4(),
    name: "Água Mineral",
    description: "Garrafa de água mineral 500ml.",
    price: "2.50",
    people: 1,
    preparationTime: "1 minuto",
    categoryId: "550e8400-e29b-41d4-a716-446655440001",
    image: "https://example.com/images/agua-mineral.jpg",
    ingredients: [],
  },
  {
    id: uuidv4(),
    name: "Chá Gelado de Pêssego",
    description: "Chá gelado refrescante com sabor de pêssego.",
    price: "5.00",
    people: 1,
    preparationTime: "3 minutos",
    categoryId: "550e8400-e29b-41d4-a716-446655440001",
    image: "https://example.com/images/cha-pessego.jpg",
    ingredients: [],
  },
  {
    id: uuidv4(),
    name: "Combo Clássico",
    description: "Cheeseburger, batata frita e refrigerante.",
    price: "22.99",
    people: 1,
    preparationTime: "20 minutos",
    categoryId: "550e8400-e29b-41d4-a716-446655440002",
    image: "https://example.com/images/combo-classico.jpg",
    featured: true,
    ingredients: ["Cheeseburger", "Batata frita", "Refrigerante"],
  },
  {
    id: uuidv4(),
    name: "Combo Família",
    description: "Dois hambúrgueres, duas batatas fritas e dois refrigerantes.",
    price: "45.99",
    people: 2,
    preparationTime: "25 minutos",
    categoryId: "550e8400-e29b-41d4-a716-446655440002",
    image: "https://example.com/images/combo-familia.jpg",
    featured: true,
    ingredients: ["Dois hambúrgueres", "Duas batatas fritas", "Dois refrigerantes"],
  },
  {
    id: uuidv4(),
    name: "Combo Vegetariano",
    description: "Veggie Delight, batata frita e suco natural.",
    price: "25.99",
    people: 1,
    preparationTime: "20 minutos",
    categoryId: "550e8400-e29b-41d4-a716-446655440002",
    image: "https://example.com/images/combo-vegetariano.jpg",
    ingredients: ["Veggie Delight", "Batata frita", "Suco natural"],
  },
  {
    id: uuidv4(),
    name: "Combo Kids",
    description: "Mini-hambúrguer, batata frita pequena e suco de fruta.",
    price: "15.99",
    people: 1,
    preparationTime: "18 minutos",
    categoryId: "550e8400-e29b-41d4-a716-446655440002",
    image: "https://example.com/images/combo-kids.jpg",
    ingredients: ["Mini-hambúrguer", "Batata frita pequena", "Suco de fruta"],
  },
  {
    id: uuidv4(),
    name: "Combo Premium",
    description: "Double Bacon Burger, batata frita grande e milkshake.",
    price: "29.99",
    people: 1,
    preparationTime: "25 minutos",
    categoryId: "550e8400-e29b-41d4-a716-446655440002",
    image: "https://example.com/images/combo-premium.jpg",
    ingredients: ["Double Bacon Burger", "Batata frita grande", "Milkshake"],
  },
  {
    id: uuidv4(),
    name: "Brownie de Chocolate",
    description: "Brownie macio com pedaços de chocolate.",
    price: "7.50",
    people: 1,
    preparationTime: "10 minutos",
    categoryId: "550e8400-e29b-41d4-a716-446655440003",
    image: "https://example.com/images/brownie.jpg",
    featured: true,
    ingredients: ["Chocolate", "Farinha", "Ovos", "Açúcar", "Manteiga"],
  },
  {
    id: uuidv4(),
    name: "Sorvete de Baunilha",
    description: "Sorvete cremoso de baunilha.",
    price: "6.99",
    people: 1,
    preparationTime: "5 minutos",
    categoryId: "550e8400-e29b-41d4-a716-446655440003",
    image: "https://example.com/images/sorvete-baunilha.jpg",
    ingredients: ["Leite", "Baunilha", "Açúcar"],
  },
  {
    id: uuidv4(),
    name: "Pudim de Leite",
    description: "Sobremesa clássica com calda de caramelo.",
    price: "8.99",
    people: 1,
    preparationTime: "15 minutos",
    categoryId: "550e8400-e29b-41d4-a716-446655440003",
    image: "https://example.com/images/pudim.jpg",
    ingredients: ["Leite condensado", "Leite", "Ovos", "Caramelo"],
  },
  {
    id: uuidv4(),
    name: "Torta de Limão",
    description: "Torta gelada com creme de limão e cobertura de merengue.",
    price: "9.50",
    people: 1,
    preparationTime: "12 minutos",
    categoryId: "550e8400-e29b-41d4-a716-446655440003",
    image: "https://example.com/images/torta-limao.jpg",
    featured: true,
    ingredients: ["Creme de limão", "Biscoito", "Merengue"],
  },
  {
    id: uuidv4(),
    name: "Petit Gâteau",
    description: "Bolo quente de chocolate servido com sorvete.",
    price: "14.99",
    people: 1,
    preparationTime: "15 minutos",
    categoryId: "550e8400-e29b-41d4-a716-446655440003",
    image: "https://example.com/images/petit-gateau.jpg",
    ingredients: ["Petit Gâteau", "Sorvete"],
  },
       
]

export default products;