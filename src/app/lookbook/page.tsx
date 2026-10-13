import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = { title: 'Event Lookbook' };

const lookbookImages = [
  '/images/ai/gallery-01.webp',
  '/images/ai/story.webp',
  '/images/ai/category-linens.webp',
  '/images/ai/category-tabletop.webp',
  '/images/ai/category-chairs.webp',
  '/images/ai/gallery-02.webp',
  '/images/ai/hero.webp',
  '/images/ai/category-tables.webp',
  '/images/ai/category-napkins.webp',
  '/images/ai/gallery-01.webp',
  '/images/ai/story.webp',
];

export default function Lookbook() {
  return (
    <>
      <section className="interior-hero">
        <div className="page-container">
          <span className="eyebrow">THE IMPRESS LOOKBOOK</span>
          <h1>
            Gather inspiration. <em>Create magic.</em>
          </h1>
          <p>A curated moodboard of tablescapes, gatherings and beautifully styled celebrations.</p>
        </div>
      </section>

      <section className="page-container section-space">
        <div className="lookbook-grid">
          {lookbookImages.map((src, i) => (
            <div key={`${src}-${i}`} className={`lookbook-photo ${i === 0 || i === 4 ? 'tall' : ''}`}>
              <Image
                src={src}
                alt={`Event styling inspiration ${i + 1}`}
                fill
                unoptimized
                sizes="(max-width:680px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
        <p className="gallery-caption">
          High-quality AI concept imagery is used for the demo lookbook while approved final event photography is being
          prepared.
        </p>
        <div className="center-action">
          <Link href="/rentals" className="button button-dark">
            Explore the rental collection <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
