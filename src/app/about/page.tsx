import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = { title: 'Our Story' };

export default function About() {
  return (
    <>
      <section className="page-container about-grid section-space" aria-labelledby="about-intro-title">
        <div className="about-photo">
          <Image
            src="/images/client-home/brand-showcase-event.jpg"
            alt="Naturally photographed wedding reception with floral centrepieces, chandeliers and elegant table settings"
            fill
            priority
            unoptimized
            sizes="(max-width:800px) 100vw, 50vw"
          />
        </div>
        <div className="about-content">
          <span className="eyebrow">About Impress Events</span>
          <h1 id="about-intro-title" className="about-intro-heading">
            Make Room For
            <br />
            <em>Extraordinary.</em>
          </h1>
          <p>
            Impress Events offers a carefully curated selection of tableware and event essentials, designed to help bring
            unforgettable occasions to life.
          </p>
          <p>
            From refined linens and elegant charger plates to sophisticated seating and glassware, our collection helps
            transform thoughtfully designed spaces into lasting impressions.
          </p>
          <p>Every event is personal. We invite you to explore the collection and share your vision with our team.</p>
          <Link className="button button-dark" href="/rentals">
            Discover The Collection <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <section className="about-owner-section section-space" aria-labelledby="owner-intro-title">
        <div className="page-container about-owner-layout">
          <div className="about-owner-heading">
            <span className="eyebrow">The Owner&apos;s Vision</span>
            <h2 id="owner-intro-title">
              A Personal Touch
              <br />
              <em>Behind Every Celebration.</em>
            </h2>
          </div>
          <div className="about-owner-copy">
            <p>
              Impress Events is built around a simple idea: meaningful occasions deserve details that feel thoughtfully
              chosen. From the setting of a table to the finishing touches of a venue, the collection is designed to help
              create an atmosphere that reflects each celebration.
            </p>
            <p>
              The vision for the business is to make it easier for customers to discover beautiful rental pieces, share
              their ideas and plan memorable moments with confidence. Whether it is a wedding, a private gathering or
              another important occasion, every enquiry begins with the customer&apos;s own vision.
            </p>
            <p>
              As Impress Events grows, the aim remains the same: to bring together thoughtful styling, practical event
              essentials and a welcoming experience for every customer.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
