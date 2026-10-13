import type { Metadata } from 'next';import Link from 'next/link';import { ArrowUpRight } from 'lucide-react';
export const metadata:Metadata={title:'Frequently Asked Questions'};
const faqs=[
 {q:'How do I request a rental quotation?',a:'Browse the collection, select the product options and quantities you need, add them to your quote cart, then submit your event details through our quotation form.'},
 {q:'Does sending a quotation request confirm my booking?',a:'No. A request is an enquiry only. Our team must review availability and final pricing before a booking can be confirmed.'},
 {q:'How will I receive my quotation?',a:'Our team receives your request by email and can respond directly to the email address you provided.'},
 {q:'Can I request multiple items at the same time?',a:'Yes. Add as many different rental pieces as you need to your quote cart, adjust the quantities and submit one combined request.'},
 {q:'Are prices displayed on the website?',a:'Rental pricing is provided by enquiry until the business approves a public price list. Final pricing can depend on your requested pieces and event requirements.'},
 {q:'Can I confirm availability online?',a:'Live availability and automatic date-based reservation are not offered. Please submit your request so the team can check your event date.'},
 {q:'Can I ask about delivery or special requirements?',a:'Yes. Use the additional requirements box in your quotation request, or contact our team with your event details. Specific terms will be confirmed by the business.'},
];
export default function FAQ(){return <><section className="interior-hero"><div className="page-container"><span className="eyebrow">HERE TO HELP</span><h1>Good questions, <em>thoughtful answers.</em></h1><p>Everything you need to know about choosing your rentals and sending an enquiry.</p></div></section><section className="faq-layout page-container section-space"><div><span className="eyebrow">FAQS</span><h2>A little more<br/><em>peace of mind.</em></h2><p>Need more information about your event? We're always happy to hear from you.</p><Link className="text-arrow" href="/contact">Get in touch <ArrowUpRight size={16}/></Link></div><div className="faqs">{faqs.map((f,i)=><details key={f.q} open={i===0}><summary>{f.q}<span>+</span></summary><p>{f.a}</p></details>)}</div></section></>}
