import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, ChevronDown, Heart, Sparkles } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import LandingMotion from '@/components/LandingMotion';
import { categories, products } from '@/lib/catalogue';

const homeCats = ['Tablecloths', 'Napkins', 'Chargers', 'Chairs', 'Glassware', 'Tables'];
const galleryImages = [
  '/images/ai/gallery-01.webp',
  '/images/ai/gallery-02.webp',
  '/images/ai/category-chairs.webp',
  '/images/ai/story.webp',
  '/images/ai/category-tabletop.webp',
  '/images/ai/category-linens.webp',
];

export default function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 8);

  return (
    <>
      <LandingMotion />
      <section className="hero impress-hero">
        <div className="hero-visual" aria-hidden="true">
          <Image
            src="/images/ai/hero.webp"
            alt=""
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
            <span className="line-decoration" /> IMPRESS LUXURY EVENT RENTALS
          </div>
          <h1 className="hero-title">
            Elegant pieces for<br />
            <em>beautiful celebrations.</em>
          </h1>
          <p>
            Discover a curated wedding and event rental collection styled to make every table, toast and moment feel
            unforgettable.
          </p>
          <div className="hero-buttons">
            <Link href="/rentals" className="button button-cream">
              Explore our collection <ArrowUpRight size={17} />
            </Link>
            <Link href="/quote" className="button button-outline-light">
              Request a quotation <ArrowRight size={17} />
            </Link>
          </div>
        </div>
        <div className="hero-bottom page-container">
          <span>WEDDINGS · EVENTS · TABLESCAPES · RENTALS</span>
          <a href="#brand-intro" aria-label="Scroll to brand introduction">
            <ChevronDown size={20} />
          </a>
          <span>DESIGNED TO IMPRESS</span>
        </div>
      </section>

      <section id="brand-intro" className="brand-showcase section-space page-container">
        <div className="brand-showcase-card">
          <div className="brand-showcase-logoWrap">
            <Image
              src="/images/brand/impress-logo.png"
              alt="Impress Luxury Event Rentals logo"
              width={270}
              height={205}
              unoptimized
              className="brand-showcase-logo"
            />
          </div>
          <div className="brand-showcase-copy">
            <span className="eyebrow">THE IMPRESS PHILOSOPHY</span>
            <h2>
              For moments that deserve
              <br />
              <em>something extraordinary.</em>
            </h2>
            <p>
              We believe the little details create the biggest memories. From elegant chairs and refined linens to
              statement tabletop pieces, our collection is designed to elevate every celebration.
            </p>
            <div className="brand-showcase-actions">
              <Link href="/about" className="text-arrow">
                Learn our story <ArrowUpRight size={18} />
              </Link>
              <Link href="/lookbook" className="text-arrow subtle-link">
                View the lookbook <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
        <div className="brand-showcase-photo">
          <Image
            src="/images/ai/gallery-02.webp"
            alt="Luxury event table styling close-up"
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
              <span className="eyebrow">DISCOVER THE COLLECTION</span>
              <h2>
                Beautiful pieces,
                <br />
                <em>beautifully curated.</em>
              </h2>
            </div>
            <Link className="text-arrow" href="/rentals">
              View all rentals <ArrowUpRight size={18} />
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
                    alt={`${name} editorial category visual`}
                    fill
                    unoptimized
                    sizes="(max-width:700px) 50vw, (max-width:1000px) 33vw, 25vw"
                  />
                  <div className="category-overlay">
                    <span>0{i + 1} / THE COLLECTION</span>
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
            <span className="eyebrow">OUR MOST-LOVED PIECES</span>
            <h2>
              A little inspiration
              <br />
              <em>for your next event.</em>
            </h2>
          </div>
          <Link href="/rentals" className="text-arrow">
            Explore all pieces <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="featured-products">{featured.map((p) => <ProductCard key={p.id} product={p} />)}</div>
        <p className="image-caveat">
          High-quality concept photography is used across the demo to present the brand beautifully while final
          item-by-item product images are being prepared.
        </p>
      </section>

      <section className="gallery-section section-space page-container">
        <div className="center-kicker">
          <Sparkles size={14} /> MOMENTS IN THE MAKING <Sparkles size={14} />
        </div>
        <h2 className="center-heading">
          A world of <em>inspiration.</em>
        </h2>
        <p className="center-intro">
          Editorial-style visuals to show the mood, texture and feeling behind the Impress Events experience.
        </p>
        <div className="gallery-grid">
          {galleryImages.map((src, index) => (
            <div key={src + index} className={`gallery-item gallery-item-${index + 1}`}>
              <Image
                src={src}
                alt={`Wedding event styling inspiration ${index + 1}`}
                fill
                unoptimized
                sizes="(max-width:700px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
        <div className="center-action">
          <Link href="/lookbook" className="button button-outline-dark">
            Visit our lookbook <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <section className="story-band">
        <div className="story-photo">
          <Image
            src="/images/ai/story.webp"
            alt="Elegant event seating and floral styling"
            fill
            unoptimized
            sizes="(max-width:850px) 100vw, 50vw"
          />
        </div>
        <div className="story-copy">
          <span className="eyebrow">CURATED WITH INTENTION</span>
          <h2>
            More than rentals.
            <br />
            <em>A feeling.</em>
          </h2>
          <p>
            From the first thoughtful detail to the final finishing touch, we believe beautifully styled spaces have the
            power to bring people together.
          </p>
          <p>
            Our collection brings together table linens, dining essentials, furniture and finishing touches for your most
            meaningful occasions.
          </p>
          <Link className="button button-dark" href="/about">
            Get to know us <ArrowUpRight size={17} />
          </Link>
          <span className="large-outline-mark">IE</span>
        </div>
      </section>

      <section className="how-section section-space">
        <div className="page-container">
          <div className="center-kicker">AS SIMPLE AS ONE, TWO, THREE</div>
          <h2 className="center-heading">
            Your vision, <em>our details.</em>
          </h2>
          <div className="how-grid">
            {[
              { n: '01', title: 'Discover', desc: 'Browse our collection and choose the pieces that fit your vision.' },
              { n: '02', title: 'Select', desc: 'Choose your favourite items, options and quantities for the event.' },
              { n: '03', title: 'Request', desc: 'Send your event details and receive a tailored quotation by email.' },
            ].map((x) => (
              <div className="how-card" key={x.n}>
                <span>{x.n}</span>
                <h3>{x.title}</h3>
                <p>{x.desc}</p>
              </div>
            ))}
          </div>
          <p className="how-note">Submitting a quote request does not reserve items or confirm a booking.</p>
        </div>
      </section>

      <section className="final-cta">
        <Heart size={24} strokeWidth={1.2} />
        <span className="eyebrow">LET'S MAKE IT MEMORABLE</span>
        <h2>
          Something beautiful
          <br />
          <em>starts here.</em>
        </h2>
        <p>Share your event details and let us help bring it to life.</p>
        <Link href="/rentals" className="button button-cream">
          Start your quotation <ArrowUpRight size={17} />
        </Link>
      </section>
    </>
  );
}
