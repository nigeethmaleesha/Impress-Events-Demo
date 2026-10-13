'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, Search, ShoppingBag, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useQuote } from '@/context/QuoteContext';

const links = [
  { href: '/', title: 'Home' },
  { href: '/rentals', title: 'Rentals' },
  { href: '/lookbook', title: 'Lookbook' },
  { href: '/about', title: 'Our Story' },
  { href: '/faq', title: 'FAQs' },
  { href: '/contact', title: 'Contact' },
];

export function Header() {
  const { count, hydrated } = useQuote();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="announcement">
        ELEVATED RENTALS FOR UNFORGETTABLE OCCASIONS <span>✦</span> ENQUIRE ABOUT YOUR EVENT TODAY
      </div>
      <header className="header">
        <Link href="/" className="brandmark" aria-label="Impress Events home">
          <Image
            src="/images/brand/impress-logo.png"
            alt="Impress Luxury Event Rentals"
            width={180}
            height={136}
            priority
            unoptimized
            className="brandmark-image"
          />
        </Link>

        <nav className="navlinks" aria-label="Main navigation">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={pathname === l.href ? 'active' : ''}>
              {l.title}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <button
            aria-label="Search the rental catalogue"
            className="icon-button"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search size={20} strokeWidth={1.5} />
          </button>
          <Link href="/quote" className="icon-button cart-link" aria-label={`Quote cart with ${count} selected items`}>
            <ShoppingBag size={20} strokeWidth={1.5} />
            {hydrated && count > 0 && <span className="cart-count">{count > 99 ? '99+' : count}</span>}
          </Link>
          <button aria-label="Toggle menu" className="icon-button mobile-menu-button" onClick={() => setOpen(!open)}>
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {searchOpen && (
          <form action="/rentals" className="header-search">
            <Search size={16} />
            <input
              name="q"
              placeholder="Search fabrics, chairs, chargers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
            />
            <button type="submit">
              Search <ArrowRight size={15} />
            </button>
          </form>
        )}
      </header>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.title}
              <ArrowRight size={17} />
            </Link>
          ))}
          <Link href="/quote" className="mobile-quote">
            Your quote cart ({count})
          </Link>
        </nav>
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top page-container">
        <div className="footer-brand">
          <Link href="/" className="footer-logo-link" aria-label="Impress Events home">
            <Image
              src="/images/brand/impress-logo.png"
              alt="Impress Luxury Event Rentals"
              width={170}
              height={128}
              unoptimized
              className="footer-logo"
            />
          </Link>
          <p>
            A thoughtfully curated collection of event essentials, chosen to make your celebrations distinctly
            memorable.
          </p>
          <div className="footer-status">
            <span className="little-star">✳</span> Designed for beautiful moments.
          </div>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <Link href="/rentals">All rentals</Link>
          <Link href="/rentals?category=Tablecloths">Table linen</Link>
          <Link href="/rentals?category=Chargers">Tabletop</Link>
          <Link href="/rentals?category=Chairs">Furniture</Link>
          <Link href="/lookbook">Lookbook</Link>
        </div>

        <div className="footer-col">
          <h4>Information</h4>
          <Link href="/about">Our story</Link>
          <Link href="/contact">Get in touch</Link>
          <Link href="/faq">Frequently asked questions</Link>
          <Link href="/policies/privacy">Privacy policy</Link>
          <Link href="/policies/rental">Rental policy</Link>
          <Link href="/policies/terms">Terms & conditions</Link>
          <Link href="/policies/cancellation">Cancellation & damages</Link>
        </div>

        <div className="footer-col footer-message">
          <h4>Let&apos;s create something beautiful.</h4>
          <p>
            Planning a wedding or an event? Tell us what you need and we&apos;ll help you take the next step.
          </p>
          <Link href="/rentals" className="text-arrow light">
            Explore the collection <ArrowRight size={17} />
          </Link>
        </div>
      </div>

      <div className="footer-bottom page-container">
        <span>© {new Date().getFullYear()} Impress Events. All rights reserved.</span>
        <span>Wedding & event rental enquiries • No online checkout</span>
      </div>
    </footer>
  );
}
