export interface Property {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
}

export const mockProperties: Property[] = [
  {
    id: 1,
    name: "Modern Downtown Apartment",
    description: "Luxurious apartment with city views",
    imageUrl: "/public/images/prj1.jpeg",
    price: 500000,
    bedrooms: 2,
    bathrooms: 2
  },
  {
    id: 2,
    name: "Suburban Family Home",
    description: "Spacious home with large backyard",
    imageUrl: "/public/images/prj2.jpeg",
    price: 750000,
    bedrooms: 4,
    bathrooms: 3
  },
  {
    id: 3,
    name: "Beach House",
    description: "Beautiful oceanfront property",
    imageUrl: "/public/images/prj3.jpeg",
    price: 1200000,
    bedrooms: 3,
    bathrooms: 2
  }
];
