import productsJson from '@/data/products.json';

export type Product = {
  id: string;
  sku: string;
  sourceSku: string;
  title: string;
  category: string;
  subcategory: string;
  fabric: string;
  variants: string[];
  description: string;
  image: string;
  imageStatus: string;
  source: string;
  featured: boolean;
};

export const products: Product[] = productsJson as Product[];

export const categories = [
  { name: 'Tablecloths', image: '/images/ai/category-linens.webp', group: 'Table Linen', description: 'A beautiful foundation for every setting.' },
  { name: 'Runners', image: '/images/ai/category-linens.webp', group: 'Table Linen', description: 'Texture, movement & effortless elegance.' },
  { name: 'Napkins', image: '/images/ai/category-napkins.webp', group: 'Table Linen', description: 'Thoughtful details in every fold.' },
  { name: 'Chargers', image: '/images/ai/category-tabletop.webp', group: 'Tabletop', description: 'The finishing detail at every place.' },
  { name: 'Placemats', image: '/images/ai/category-tabletop.webp', group: 'Tabletop', description: 'Layers that make an impression.' },
  { name: 'Glassware', image: '/images/ai/category-tabletop.webp', group: 'Tabletop', description: 'Elevated pieces for every toast.' },
  { name: 'Cutlery', image: '/images/ai/gallery-02.webp', group: 'Tabletop', description: 'Beautifully considered dining details.' },
  { name: 'Table Numbers', image: '/images/ai/gallery-02.webp', group: 'Tabletop', description: 'Little details, unforgettable tables.' },
  { name: 'Napkin Rings', image: '/images/ai/category-napkins.webp', group: 'Tabletop', description: 'An elegant final touch.' },
  { name: 'Chairs', image: '/images/ai/category-chairs.webp', group: 'Furniture', description: 'Seating that complements every moment.' },
  { name: 'Tables', image: '/images/ai/category-tables.webp', group: 'Furniture', description: 'A perfect setting starts here.' },
  { name: 'Chair Sashes', image: '/images/ai/category-chairs.webp', group: 'Accessories', description: 'Make every chair part of the story.' },
  { name: 'Cushion Covers', image: '/images/ai/category-chairs.webp', group: 'Accessories', description: 'Comfort with a sophisticated finish.' },
] as const;

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function getCategoryImage(cat: string) {
  return categories.find((c) => c.name === cat)?.image || '/images/ai/gallery-01.webp';
}

export function titleCase(s: string) {
  return s.replace(/\b\w/g, (c) => c.toUpperCase());
}
