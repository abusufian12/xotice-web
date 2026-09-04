"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import type { Dictionary } from "@/i18n/types";

interface ContactFormProps {
  dict: Dictionary;
}

export default function ContactForm({ dict }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="border border-charcoal/10 bg-ivory-dark p-8 text-center md:p-12">
        <p className="text-base text-charcoal md:text-lg">
          {dict.contact.form.success}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-charcoal/70">
            {dict.contact.form.name}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal transition-colors focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-charcoal/70">
            {dict.contact.form.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal transition-colors focus:border-accent"
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="mb-2 block text-sm text-charcoal/70">
          {dict.contact.form.company}
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal transition-colors focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="subject" className="mb-2 block text-sm text-charcoal/70">
          {dict.contact.form.subject}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal transition-colors focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-charcoal/70">
          {dict.contact.form.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full resize-none border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal transition-colors focus:border-accent"
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="w-full bg-accent px-8 py-3.5 text-sm tracking-wide text-white transition-colors hover:bg-accent-muted disabled:opacity-50 md:w-auto"
      >
        {sending ? dict.contact.form.sending : dict.contact.form.submit}
      </button>
    </form>
  );
}

interface ContactInfoProps {
  dict: Dictionary;
}

export function ContactInfo({ dict }: ContactInfoProps) {
  const info = dict.contact.info;

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-light text-charcoal md:text-xl">
          {info.title}
        </h3>
        <div className="mt-4 line-accent" />
      </div>

      <div className="space-y-6">
        <div className="flex gap-4">
          <MapPin size={20} className="mt-0.5 shrink-0 text-gold" strokeWidth={1.5} />
          <div>
            <p className="text-sm font-medium text-charcoal">{info.company}</p>
            <p className="text-sm text-muted">{info.companyEn}</p>
            <p className="mt-1 text-sm text-charcoal/70">{info.address}</p>
          </div>
        </div>

        <div className="flex gap-4">
          <Phone size={20} className="shrink-0 text-gold" strokeWidth={1.5} />
          <a href={`tel:${info.phone}`} className="text-sm text-charcoal/70 transition-colors hover:text-accent">
            {info.phone}
          </a>
        </div>

        <div className="flex gap-4">
          <Mail size={20} className="shrink-0 text-gold" strokeWidth={1.5} />
          <a href={`mailto:${info.email}`} className="text-sm text-charcoal/70 transition-colors hover:text-accent">
            {info.email}
          </a>
        </div>

        <div className="flex gap-4">
          <Clock size={20} className="shrink-0 text-gold" strokeWidth={1.5} />
          <div>
            <p className="text-sm font-medium text-charcoal">{info.hours}</p>
            <p className="text-sm text-charcoal/70">{info.hoursValue}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
