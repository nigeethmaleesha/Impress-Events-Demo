'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, ArrowUpRight, ChevronDown, Heart } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import LandingMotion from '@/components/LandingMotion';
import QuoteRequestModal from '@/components/QuoteRequestModal';
import { faqs } from '@/data/faqs';
import { categories, products } from '@/lib/catalogue';

const homeCats = ['Tablecloths', 'Napkins', 'Chargers', 'Chairs', 'Glassware', 'Tables'];
const galleryImages = [
  '/images/client-home/luxury-hall.png',
  '/images/client-home/wedding-exit.jpg',
  '/images/client-home/outdoor-aisle.jpg',
  '/images/client-home/blush-table-detail.jpg',
  '/images/client-home/chair-ceremony.jpg',
  '/images/client-home/brand-showcase-event.jpg',
];
const featuredVisuals = [
  '/images/client-home/luxury-hall.png',
  '/images/client-home/hero-event-table.jpg',
  '/images/client-home/brand-showcase-event.jpg',
  '/images/client-home/tablecloth-setting.jpg',
];

export default function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 4);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const homeFaqs = faqs.slice(0, 4);

  return (
    <>
      <LandingMotion />
      <QuoteRequestModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />

      <section className="hero impress-hero">
        <div className="hero-visual" aria-hidden="true">
          <Image
            src="/images/client-home/hero-event-table.jpg"
            alt="Natural luxury event table styling with florals, candlelight and elegant place settings"
            fill
            priority
            unoptimized
            className="hero-photo"
            sizes="100vw"
          />
        </div>
        <div className="hero-tint" />
        <div className="hero-atmosphere" aria-hidden="true" />
        <div className="hero-content page-container">
          <div className="hero-line">
            <span className="line-decoration" /> Impress Luxury Event Rentals
          </div>
          <h1 className="hero-title">
            Elegant Pieces For<br />
            <em>Beautiful Celebrations.</em>
          </h1>
          <p>
            Discover a curated wedding and event rental collection styled to make every table, toast and moment feel unforgettable.
          </p>
          <div className="hero-buttons">
            <Link href="/rentals" className="button button-cream">
              Explore Our Collection <ArrowUpRight size={17} />
            </Link>
            <button type="button" className="button button-outline-light hero-quote-button" onClick={() => setQuoteOpen(true)}>
              Request A Quotation <ArrowRight size={17} />
            </button>
          </div>
        </div>
        <div className="hero-bottom page-container">
          <span>Weddings · Events · Tablescapes · Rentals</span>
          <a href="#brand-intro" aria-label="Scroll to brand introduction">
            <ChevronDown size={20} />
          </a>
          <span>Designed To Impress</span>
        </div>
      </section>

      <section id="brand-intro" className="brand-showcase section-space page-container">
        <div className="brand-showcase-card">
          <div className="brand-showcase-logoWrap">
            <Image
              src="/images/brand/impress-logo.png"
              alt="Impress Luxury Event Rentals Logo"
              width={270}
              height={205}
              unoptimized
              className="brand-showcase-logo"
            />
          </div>
          <div className="brand-showcase-copy">
            <span className="eyebrow">The Impress Philosophy</span>
            <h2>
              For Moments That Deserve
              <br />
              <em>Something Extraordinary.</em>
            </h2>
            <p>
              We believe the little details create the biggest memories. From elegant chairs and refined linens to statement tabletop pieces, our collection is designed to elevate every celebration.
            </p>
            <div className="brand-showcase-actions">
              <Link href="/about" className="text-arrow">
                Learn Our Story <ArrowUpRight size={18} />
              </Link>
              <Link href="/lookbook" className="text-arrow subtle-link">
                View The Lookbook <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
        <div className="brand-showcase-photo">
          <Image
            src="/images/client-home/brand-showcase-event.jpg"
            alt="Natural indoor event setup with chandeliers and floral styling"
            fill
            unoptimized
            sizes="(max-width:850px) 100vw, 42vw"
          />
        </div>
      </section>

      <section className="collections-section section-space">
        <div className="page-container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Discover The Collection</span>
              <h2>
                Beautiful Pieces,
                <br />
                <em>Beautifully Curated.</em>
              </h2>
            </div>
            <Link className="text-arrow" href="/rentals">
              View All Rentals <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="category-grid">
            {homeCats.map((name, i) => {
              const c = categories.find((cat) => cat.name === name)!;
              return (
                <Link
                  key={name}
                  href={`/rentals?category=${encodeURIComponent(name)}`}
                  className={`category-tile category-tile-${i}`}
                >
                  <Image
                    src={c.image}
                    alt={`${name} rental category photo`}
                    fill
                    unoptimized
                    sizes="(max-width:700px) 50vw, (max-width:1000px) 33vw, 25vw"
                  />
                  <div className="category-overlay">
                    <span>0{i + 1} / The Collection</span>
                    <div>
                      <h3>{name}</h3>
                      <span className="category-arrow">
                        <ArrowUpRight size={21} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="feature-section section-space page-container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Our Most-Loved Pieces</span>
            <h2 className="home-feature-heading">
              A Little Inspiration <em>For Your Next Event.</em>
            </h2>
          </div>
          <Link href="/rentals" className="text-arrow">
            Explore All Pieces <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="featured-products">
          {featured.map((p, index) => (
            <ProductCard
              key={p.id}
              product={p}
              visualSrc={featuredVisuals[index % featuredVisuals.length]}
              visualAlt={`${p.title} styled in a natural event setting`}
            />
          ))}
        </div>
      </section>

      <section className="home-faq-section section-space page-container">
        <div className="section-heading faq-preview-heading">
          <div>
            <span className="eyebrow">Helpful Questions</span>
            <h2>
              Planning Support,
              <br />
              <em>Right When You Need It.</em>
            </h2>
          </div>
          <Link href="/faq" className="text-arrow">
            View All FAQs <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="home-faq-grid">
          {homeFaqs.map((faq, index) => (
            <details key={faq.q} className="home-faq-card" open={index === 0}>
              <summary>
                {faq.q}
                <span>+</span>
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="gallery-section section-space page-container">
        <h2 className="center-heading">
          A World Of <em>Inspiration.</em>
        </h2>
        <p className="center-intro">
          Editorial-style visuals to show the mood, texture and feeling behind the Impress Events experience.
        </p>
        <div className="gallery-grid">
          {galleryImages.map((src, index) => (
            <div key={src + index} className={`gallery-item gallery-item-${index + 1}`}>
              <Image
                src={src}
                alt={`Real event styling inspiration ${index + 1}`}
                fill
                unoptimized
                sizes="(max-width:700px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
        <div className="center-action">
          <Link href="/lookbook" className="button button-outline-dark">
            Visit Our Lookbook <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <section className="final-cta">
        <Heart size={24} strokeWidth={1.2} />
        <span className="eyebrow">Let&apos;s Make It Memorable</span>
        <h2>
          Something Beautiful
          <br />
          <em>Starts Here.</em>
        </h2>
        <p>Share your event details and let us help bring it to life.</p>
        <button type="button" className="button button-cream" onClick={() => setQuoteOpen(true)}>
          Start Your Quotation <ArrowUpRight size={17} />
        </button>
      </section>
    </>
  );
}
