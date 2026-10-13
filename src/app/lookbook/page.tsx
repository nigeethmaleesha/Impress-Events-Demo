import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = { title: 'Event Lookbook' };

const lookbookImages = [
  '/images/ai/gallery-01.png',
  '/images/ai/story.png',
  '/images/ai/category-linens.png',
  '/images/ai/category-tabletop.png',
  '/images/ai/category-chairs.png',
  '/images/ai/gallery-02.png',
  '/images/ai/hero.png',
  '/images/ai/category-tables.png',
  '/images/ai/category-napkins.png',
  '/images/ai/gallery-01.png',
  '/images/ai/story.png',
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
