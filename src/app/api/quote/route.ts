import { NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import { validateQuote } from '@/lib/validate';
import { products } from '@/lib/catalogue';
import { EmailNotConfigured, escapeHtml, sendEmail } from '@/lib/mailer';
export const runtime='nodejs';
export async function POST(req:Request){
  try{
    if(Number(req.headers.get('content-length')||0)>30000)return NextResponse.json({error:'Request too large.'},{status:413});
    const raw=await req.json();const check=validateQuote(raw);
    if(!check.ok)return NextResponse.json({error:check.error},{status:400});
    const d=check.data;
    const reference=`IE-${new Date().toISOString().slice(0,10).replaceAll('-','')}-${randomUUID().slice(0,6).toUpperCase()}`;
    const lines=d.items.map((i,n)=>{const p=products.find(p=>p.id===i.productId)!;return {n:n+1,title:p.title,sku:p.sku,variant:i.variant,quantity:i.quantity};});
    const body=lines.map(l=>`${l.n}. ${l.title} (${l.sku}) • ${l.variant} • Qty ${l.quantity}`).join('\n');
    const text=`NEW RENTAL QUOTATION REQUEST\nReference: ${reference}\n\nName: ${d.name}\nEmail: ${d.email}\nPhone: ${d.phone}\nEvent: ${d.eventType}\nDate: ${d.eventDate}\nLocation: ${d.eventLocation}\nNotes: ${d.notes||'None'}\n\nREQUESTED ITEMS:\n${body}\n\nNot a confirmed booking or reservation.`;
    const html=`<div style="font:15px/1.6 Arial,sans-serif;color:#292724;max-width:700px;margin:auto;padding:24px"><p style="color:#ab8971;letter-spacing:3px;font-size:12px">IMPRESS EVENTS</p><h1 style="font-family:Georgia,serif;font-weight:400">New quotation request</h1><p><b>Reference:</b> ${escapeHtml(reference)}</p><table cellpadding="8" style="border-collapse:collapse;width:100%;background:#f8f5f1"><tbody>${[['Customer',d.name],['Email',d.email],['Phone',d.phone],['Event type',d.eventType],['Event date',d.eventDate],['Event location',d.eventLocation],['Additional notes',d.notes||'None']].map(([k,v])=>`<tr><td style="width:150px;color:#777">${escapeHtml(k)}</td><td>${escapeHtml(v)}</td></tr>`).join('')}</tbody></table><h2 style="font:26px Georgia,serif">Requested rental items</h2><table cellpadding="10" style="border-collapse:collapse;width:100%"><thead><tr style="background:#eee6dc;text-align:left"><th>Item</th><th>Variant</th><th>Qty</th></tr></thead><tbody>${lines.map(l=>`<tr style="border-bottom:1px solid #e5e0d9"><td>${escapeHtml(l.title)}<br><small>${escapeHtml(l.sku)}</small></td><td>${escapeHtml(l.variant)}</td><td>${l.quantity}</td></tr>`).join('')}</tbody></table><p style="padding:12px;background:#f8f5f1">This is a quotation request, not a confirmed rental booking. Please verify availability and final pricing before responding.</p></div>`;
    await sendEmail({subject:`[${reference}] New ${d.eventType} rental enquiry — ${d.name}`,text,html,replyTo:d.email,customerEmail:d.email});
    return NextResponse.json({ok:true,reference});
  }catch(e){
    if(e instanceof EmailNotConfigured)return NextResponse.json({error:'Email is not connected yet. Please ask the website administrator to configure SMTP credentials.'},{status:503});
    if(e instanceof SyntaxError)return NextResponse.json({error:'Invalid request data.'},{status:400});
    console.error('Quotation email error',e);
    return NextResponse.json({error:'Unable to send your request right now. Please try again shortly.'},{status:502});
  }
}
