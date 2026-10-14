import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = { title: 'Event Lookbook' };

const lookbookImages = [
  '/images/client-home/hero-event-table.jpg',
  '/images/client-home/chair-ceremony.jpg',
  '/images/client-home/tablecloth-setting.jpg',
  '/images/client-home/charger-place-setting.jpg',
  '/images/client-home/outdoor-aisle.jpg',
  '/images/client-home/soft-table.jpg',
  '/images/client-home/blush-table-detail.jpg',
  '/images/client-home/wedding-exit.jpg',
  '/images/client-home/neutral-place-setting.jpg',
  '/images/client-home/warm-dining.jpg',
  '/images/client-home/brand-showcase-event.jpg',
  '/images/client-home/romantic-florals.jpg',
  '/images/client-home/glassware-table.jpg',
];

export default function Lookbook() {
  return (
    <>
      <section className="interior-hero">
        <div className="page-container">
          <span className="eyebrow">THE IMPRESS LOOKBOOK</span>
          <h1>
            Gather Inspiration. <em>Create Magic.</em>
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
          A curated selection of natural event photography to help you explore the style, details and atmosphere behind the Impress collection.
        </p>
        <div className="center-action">
          <Link href="/rentals" className="button button-dark">
            Explore The Rental Collection <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
