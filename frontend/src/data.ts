import shop1 from "./assets/shop1.png";

export const SHOPS = [
  {
    id: "motabhai",
    name: "Motabhai",
    location: "Agrasen Chowk, Durg",
    fullAddress: "Near Agrasen Chowk, Durg, 491001",
    phone: "+91-87700-01968",
    image: shop1, // Use your actual asset imports
  },
  {
    id: "classic",
    name: "Classic Collection",
    location: "Station Road, Durg",
    fullAddress: "Shop No. 12, Station Road, Durg, 491001",
    phone: "+91-75873-15027",
    image: shop1,
  },
  {
    id: "electronics",
    name: "New Era Electronis",
    location: "Indira Market, Durg",
    fullAddress: "Opposite Town Hall, Indira Market, Durg, 491001",
    phone: "+91-88123-45678",
    image: shop1,
  }
];

export const PRODUCTS = [
  { id: 1, name: "Denim Shirt", discount: "30% Off", desc: "Authentic medium-wash denim, relaxed fit. Durable cotton blend with button", oldPrice: 499, price: 299 },
  { id: 2, name: "Cotton Chinos", discount: "20% Off", desc: "Slim-fit breathable cotton trousers for daily wear", oldPrice: 899, price: 719 },
  { id: 3, name: "Graphic Tee", discount: "50% Off", desc: "100% Organic cotton with vintage aesthetic print", oldPrice: 599, price: 299 },
];