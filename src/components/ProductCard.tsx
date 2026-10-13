'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Plus, Check } from 'lucide-react';
import { useState } from 'react';
import { useQuote } from '@/context/QuoteContext';
import type { Product } from '@/lib/catalogue';
import { getCategoryImage } from '@/lib/catalogue';
export default function ProductCard({product}:{product:Product}){
 const {addItem}=useQuote();const [added,setAdded]=useState(false);
 const quickAdd=()=>{addItem(product.id,product.variants[0],1);setAdded(true);window.setTimeout(()=>setAdded(false),1800);};
 return <article className="product-card">
  <div className="product-image-wrap">
   <Link href={`/rentals/${product.id}`} className="product-image-link" aria-label={`View ${product.title}`}><Image src={getCategoryImage(product.category)} alt={`${product.category} collection visual — exact product photograph pending`} fill sizes="(max-width:700px) 50vw, (max-width:1100px) 33vw, 25vw" className="product-image" unoptimized/></Link>
   <span className="product-photo-note">Visual reference</span>
   <button type="button" onClick={quickAdd} className={`quick-add ${added?'added':''}`} aria-label={`Add one ${product.title} to quote`} title={`Quick add: ${product.variants[0]}`}>{added?<Check size={19}/>:<Plus size={19}/>}</button>
  </div>
  <div className="product-meta"><span>{product.category}</span><span>SKU {product.sku}</span></div>
  <Link className="product-title" href={`/rentals/${product.id}`}>{product.title} <ArrowUpRight size={15}/></Link>
  <div className="product-bottom"><span>{product.variants.length>1?`${product.variants.length} options`:'Price on request'}</span><Link href={`/rentals/${product.id}`}>View details</Link></div>
 </article>
}
