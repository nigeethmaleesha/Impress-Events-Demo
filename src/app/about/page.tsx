import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Flower2, Heart, Sparkles } from 'lucide-react';

export const metadata: Metadata = { title: 'Our Story' };

export default function About() {
  return (
    <>
      <section className="interior-hero">
        <div className="page-container">
          <span className="eyebrow">A STORY OF BEAUTIFUL CELEBRATIONS</span>
          <h1>
            The details make <em>the difference.</em>
          </h1>
          <p>Curated event essentials for special moments, celebrations and connections.</p>
        </div>
      </section>

      <section className="page-container about-grid section-space">
        <div className="about-photo">
          <Image src="/images/ai/story.png" alt="Elegant event celebration setting" fill unoptimized sizes="(max-width:800px) 100vw, 50vw" />
        </div>
        <div className="about-content">
          <span className="eyebrow">ABOUT IMPRESS EVENTS</span>
          <h2>
            Make room for
            <br />
            <em>extraordinary.</em>
          </h2>
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
            Discover the collection <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <section className="value-grid page-container section-space">
        {[
          { icon: <Flower2 />, title: 'Thoughtfully curated', text: 'Beautiful pieces selected to create a memorable atmosphere.' },
          { icon: <Heart />, title: 'Occasions with meaning', text: 'From an intimate gathering to a celebration to remember.' },
          { icon: <Sparkles />, title: 'Made for your vision', text: 'Choose the details that complement your own unique style.' },
        ].map((v) => (
          <div className="value-card" key={v.title}>
            {v.icon}
            <h3>{v.title}</h3>
            <p>{v.text}</p>
          </div>
        ))}
      </section>
    </>
  );
}
