import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  GraduationCap, 
  Building2, 
  Sparkles, 
  Loader2,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitInquiry } from '../services/api';

export default function QuoteModal({ isOpen, onClose, initialAudience = 'GENERAL', initialService = '' }) {
  const [audience, setAudience] = useState('STUDENT');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceNeeded: '',
    budgetOrTimeline: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialAudience === 'BUSINESS') {
      setAudience('BUSINESS');
    } else if (initialAudience === 'STUDENT') {
      setAudience('STUDENT');
    }
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceNeeded: initialService }));
    }
  }, [initialAudience, initialService, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Please provide your name and email address.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    if (formData.phone.trim() && formData.phone.replace(/\D/g, '').length < 10) {
      setError('Please enter a valid mobile number with at least 10 digits.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        audienceType: audience,
        serviceNeeded: formData.serviceNeeded || (audience === 'STUDENT' ? 'Final Year Projects' : 'Website Development'),
        budgetOrTimeline: formData.budgetOrTimeline,
        message: formData.message
      };

      const res = await submitInquiry(payload);
      
      setSubmitted(true);
      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (cErr) {
        // Safe fallback if canvas not available
      }
    } catch (err) {
      setError(err.message || 'Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceNeeded: '',
      budgetOrTimeline: '',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl shadow-blue-950/80 overflow-hidden">
        
        {/* Background ambient corner glow */}
        <div className={`absolute top-0 right-0 w-64 h-64 ${audience === 'STUDENT' ? 'bg-purple-600/15' : 'bg-emerald-600/15'} rounded-full blur-3xl pointer-events-none`}></div>

        {/* Close button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Success Screen */
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              Inquiry Received!
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you for reaching out to <span className="font-bold text-sky-400">BinaryBrains</span>. Our tech team has received your project details and will connect with you shortly.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/30 transition-all"
              >
                Back to Homepage
              </button>
            </div>
          </div>
        ) : (
          /* Form Content */
          <div className="space-y-6">
            
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-1">
                <Sparkles className="w-3.5 h-3.5" /> Start Your Journey
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Request a Free Quote
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Share your requirements and we'll prepare a custom roadmap and proposal.
              </p>
            </div>

            {/* Audience Switcher Tabs */}
            <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-slate-950 border border-slate-800">
              <button
                type="button"
                onClick={() => setAudience('STUDENT')}
                className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  audience === 'STUDENT'
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-900/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>I'm a Student</span>
              </button>

              <button
                type="button"
                onClick={() => setAudience('BUSINESS')}
                className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  audience === 'BUSINESS'
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>I'm a Business</span>
              </button>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Submission Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    maxLength={120}
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    pattern="[+0-9 ()-]{10,20}"
                    maxLength={20}
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Service Required
                  </label>
                  <select
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    {audience === 'STUDENT' ? (
                      <>
                        <option value="Final Year Projects">Final Year Projects</option>
                        <option value="Project Guidance">Project Guidance</option>
                        <option value="Portfolio Development">Portfolio Development</option>
                        <option value="Resume Building">Resume Building</option>
                        <option value="Internship Guidance">Internship Guidance</option>
                        <option value="Career Support">Career Support</option>
                      </>
                    ) : (
                      <>
                        <option value="Website Development">Website Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="ERP Solutions">ERP Solutions</option>
                        <option value="Custom Software">Custom Software</option>
                        <option value="E-Commerce Development">E-Commerce Development</option>
                        <option value="Cloud & DevOps">Cloud & DevOps</option>
                        <option value="IT Support & Maintenance">IT Support & Maintenance</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  {audience === 'STUDENT' ? 'Graduation Batch / University' : 'Estimated Budget / Timeline'}
                </label>
                <input
                  type="text"
                  placeholder={audience === 'STUDENT' ? 'e.g. 2026 Batch, Computer Science' : 'e.g. $3,000 - $5,000 or 1-2 Months'}
                  value={formData.budgetOrTimeline}
                  onChange={(e) => setFormData({ ...formData, budgetOrTimeline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Project Details / Message
                </label>
                <textarea
                  rows="3"
                  placeholder="Tell us about your project, idea, or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600 resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 transition-all shadow-lg ${
                    audience === 'STUDENT'
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-purple-900/40'
                      : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-emerald-900/40'
                  }`}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting to BinaryBrains...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
