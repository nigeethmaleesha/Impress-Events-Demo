'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Mail, MessageCircle, AlertCircle } from 'lucide-react';
import { useState, type FormEvent } from 'react';

export default function ContactForm() {
  const [data, setData] = useState({ name: '', email: '', subject: 'General enquiry', message: '', website: '' });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const change = (key: keyof typeof data, v: string) => setData((s) => ({ ...s, [key]: v }));

  async function send(e: FormEvent) {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error || 'Unable to send.');
      setSuccess(true);
      setData({ name: '', email: '', subject: 'General enquiry', message: '', website: '' });
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not send your message.');
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <section className="interior-hero">
        <div className="page-container">
          <span className="eyebrow">WE'D LOVE TO HEAR FROM YOU</span>
          <h1>
            Let&apos;s make it <em>beautiful.</em>
          </h1>
          <p>Questions, ideas or special requests? We&apos;re just a message away.</p>
        </div>
      </section>

      <section className="contact-grid page-container section-space">
        <div className="contact-details">
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>
            Tell us about
            <br />
            <em>your occasion.</em>
          </h2>
          <p>
            Whether you&apos;re planning a wedding, a private celebration or a corporate event, share a little about what you
            have in mind.
          </p>
          <div className="contact-icon-text">
            <MessageCircle size={22} />
            <div>
              <b>Planning an event?</b>
              <p>Start by browsing the rental collection, then send a quotation request with the pieces you love.</p>
              <Link className="text-arrow" href="/rentals">
                Explore rentals <ArrowRight size={15} />
              </Link>
            </div>
          </div>
          <div className="contact-icon-text">
            <Mail size={22} />
            <div>
              <b>General enquiries</b>
              <p>Use the form to reach our team directly. Business contact details will be added when supplied by the client.</p>
            </div>
          </div>
          <div className="contact-feature-photo">
            <Image src="/images/ai/gallery-02.webp" alt="Beautiful wedding styling and event decor" fill unoptimized sizes="(max-width:800px) 100vw, 450px" />
          </div>
        </div>

        <div className="contact-form-area">
          {success ? (
            <div className="contact-success">
              <CheckCircle2 size={40} />
              <h3>Message sent successfully.</h3>
              <p>Thank you for getting in touch. Our team will review your enquiry and reply to your email.</p>
              <button className="text-arrow" onClick={() => setSuccess(false)}>
                Send another message <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            <form onSubmit={send} className="contact-form">
              <span className="eyebrow">SEND US A MESSAGE</span>
              <h3>We&apos;re listening.</h3>
              <label className="form-field">
                <span>Your full name *</span>
                <input value={data.name} onChange={(e) => change('name', e.target.value)} required minLength={2} placeholder="Full name" maxLength={120} />
              </label>
              <label className="form-field">
                <span>Your email *</span>
                <input type="email" value={data.email} onChange={(e) => change('email', e.target.value)} required placeholder="Email address" maxLength={180} />
              </label>
              <label className="form-field">
                <span>Subject</span>
                <select value={data.subject} onChange={(e) => change('subject', e.target.value)}>
                  <option>General enquiry</option>
                  <option>Rental collection</option>
                  <option>Event styling</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="form-field">
                <span>How can we help? *</span>
                <textarea value={data.message} onChange={(e) => change('message', e.target.value)} rows={6} required minLength={10} maxLength={3000} placeholder="Tell us what you're looking for..." />
              </label>
              <div className="honeypot">
                <label>
                  Website
                  <input value={data.website} onChange={(e) => change('website', e.target.value)} tabIndex={-1} autoComplete="off" />
                </label>
              </div>
              {error && (
                <p className="form-error" role="alert">
                  <AlertCircle size={16} />
                  {error}
                </p>
              )}
              <button className="button button-dark submit-button" type="submit" disabled={sending}>
                {sending ? (
                  'Sending…'
                ) : (
                  <>
                    Send enquiry <ArrowRight size={17} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
