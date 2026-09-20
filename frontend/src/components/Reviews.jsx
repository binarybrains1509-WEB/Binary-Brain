import React, { useState } from 'react';
import { ArrowUpRight, Check, Send, Star, X } from 'lucide-react';
import { submitInquiry } from '../services/api';
import studentImage from '../assets/student.png';
import businessImage from '../assets/business.png';

const starterReviews = [
  {
    id: 'review-1',
    name: 'Aarav Sharma',
    role: 'Student',
    rating: 5,
    review: 'The guidance made my final year project much easier to understand and present.',
    image: studentImage,
  },
  {
    id: 'review-2',
    name: 'Priya Verma',
    role: 'Business Owner',
    rating: 5,
    review: 'BinaryBrains understood our requirements quickly and delivered a polished solution.',
    image: businessImage,
  },
];

function Stars({ rating, onSelect, interactive = false }) {
  return (
    <div className="flex gap-1" role={interactive ? 'radiogroup' : undefined} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={interactive ? () => onSelect(star) : undefined}
          className={`${interactive ? 'cursor-pointer rounded p-0.5 hover:bg-amber-400/10' : 'cursor-default'} transition-colors`}
          aria-label={interactive ? `${star} star${star === 1 ? '' : 's'}` : undefined}
          tabIndex={interactive ? 0 : -1}
        >
          <Star className={`h-4 w-4 ${star <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-600'}`} />
        </button>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [reviews, setReviews] = useState(starterReviews);
  const [form, setForm] = useState({ name: '', email: '', phone: '', role: '', rating: 5, review: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [isFormOpen, setFormOpen] = useState(false);

  const updateField = (field, value) => setForm((current) => ({ ...current, [field]: value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setStatus('Please enter a valid email address.');
      return;
    }
    if (form.phone.replace(/\D/g, '').length < 10) {
      setStatus('Please enter a valid mobile number with at least 10 digits.');
      return;
    }
    setLoading(true);
    setStatus('');

    try {
      await submitInquiry({
        submissionType: 'REVIEW',
        name: form.name,
        email: form.email,
        phone: form.phone,
        role: form.role || 'Client',
        rating: `${form.rating}/5`,
        review: form.review,
      });
      setReviews((current) => [{
        ...form,
        id: `review-${Date.now()}`,
        role: form.role || 'Client',
        image: form.role.toLowerCase().includes('business') ? businessImage : studentImage,
      }, ...current]);
      setForm({ name: '', email: '', phone: '', role: '', rating: 5, review: '' });
      setFormOpen(false);
      setStatus('Thank you for sharing your review.');
    } catch (error) {
      setStatus(error.message || 'Could not submit your review. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="reviews" className="relative scroll-mt-24 border-t border-white/[0.06] bg-[#071225] px-5 py-20 sm:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-amber-300">Client Reviews</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">Real words from people we have helped.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">A closer look at the experiences behind our work.</p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <button type="button" onClick={() => { setStatus(''); setFormOpen(true); }} className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-2.5 text-xs font-bold text-amber-200 transition hover:border-amber-200 hover:bg-amber-300/20">
              Write a review
              <ArrowUpRight className="h-4 w-4" />
            </button>
            {status && <p className="flex items-center gap-2 text-xs text-cyan-200" role="status"><Check className="h-4 w-4" />{status}</p>}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {reviews.map((item) => (
            <article key={item.id} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.025] p-6 shadow-2xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25">
              <div className="absolute right-6 top-5 text-5xl font-serif leading-none text-cyan-300/15">“</div>
              <Stars rating={Number(item.rating)} />
              <p className="mt-5 max-w-lg text-base leading-8 text-slate-200">“{item.review}”</p>
              <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5">
                <img src={item.image} alt={`${item.name} profile`} className="h-11 w-11 rounded-full border border-cyan-300/30 bg-[#0b1a35] object-cover object-top p-0.5" />
                <div>
                  <p className="text-sm font-bold text-white">{item.name}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="review-form-title">
          <form onSubmit={handleSubmit} className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-cyan-300/20 bg-[#0b1a35] p-6 shadow-2xl shadow-black/40 sm:p-8">
            <button type="button" onClick={() => setFormOpen(false)} className="absolute right-5 top-5 rounded-full p-2 text-slate-400 transition hover:bg-white/10 hover:text-white" aria-label="Close review form">
              <X className="h-5 w-5" />
            </button>
            <div className="mb-6 pr-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Your experience matters</p>
              <h3 id="review-form-title" className="mt-2 text-2xl font-bold text-white">Leave a review</h3>
              <p className="mt-2 text-sm text-slate-400">Tell us what your experience was like.</p>
            </div>
            <div className="space-y-4">
              <input required value={form.name} onChange={(event) => updateField('name', event.target.value)} placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/60" />
              <input required type="email" maxLength={120} value={form.email} onChange={(event) => updateField('email', event.target.value)} placeholder="Your email address" className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/60" />
              <input required type="tel" pattern="[+0-9 ()-]{10,20}" maxLength={20} value={form.phone} onChange={(event) => updateField('phone', event.target.value)} placeholder="Mobile number" className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/60" />
              <input value={form.role} onChange={(event) => updateField('role', event.target.value)} placeholder="Student, Founder, Client..." className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/60" />
              <div>
                <p className="mb-2 text-xs font-semibold text-slate-300">Your rating</p>
                <Stars rating={form.rating} onSelect={(rating) => updateField('rating', rating)} interactive />
              </div>
              <textarea required rows="4" value={form.review} onChange={(event) => updateField('review', event.target.value)} placeholder="Write your review..." className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/60" />
              <button type="submit" disabled={loading} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:brightness-110 disabled:cursor-wait disabled:opacity-60">
                <Send className="h-4 w-4" />
                {loading ? 'Sending...' : 'Submit review'}
              </button>
              {status && <p className="flex items-center gap-2 text-sm text-cyan-200" role="status"><Check className="h-4 w-4" />{status}</p>}
            </div>
          </form>
        </div>
      )}
    </section>
  );
}
