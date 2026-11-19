"use client";

import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Footer } from "@/components/landing/Footer";
import { Mail, Twitter, Linkedin, Sparkles, Heart, Compass } from "lucide-react";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  tag: string;
  bio: string;
  image: string;
  email?: string;
  twitter?: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sean Mike",
    role: "Chief Executive Officer & Founder",
    tag: "Executive Leadership",
    bio: "Guiding the vision and strategic direction of Wisdomly. Passionate about building calm, distraction-free technology that helps people pause and reflect every day.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    email: "hello@wisdomly.top",
    twitter: "https://twitter.com/wisdomlyapp",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Dr. Elena Rostova",
    role: "Head of Content & Curation",
    tag: "Editorial & Research",
    bio: "Leading research across classical philosophy, literature, and modern psychology to hand-select quotes that spark genuine insight and clarity.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    email: "hello@wisdomly.top",
    twitter: "https://twitter.com/wisdomlyapp",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Marcus Chen",
    role: "Head of Product & Design",
    tag: "Design & UX",
    bio: "Championing calm computing and clean typography. Designing interactions that respect your time and keep timeless wisdom front and center.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    email: "hello@wisdomly.top",
    twitter: "https://twitter.com/wisdomlyapp",
    linkedin: "https://linkedin.com",
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <PageHeader
        title="Meet Our Team"
        description="The curators, designers, and engineers behind Wisdomly — dedicated to bringing you timeless insight, one quote at a time."
      />

      {/* Values / Mission banner */}
      <section className="py-12 bg-zinc-50 dark:bg-zinc-900/40 border-b border-zinc-100 dark:border-zinc-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-500 flex items-center justify-center shrink-0">
                <Sparkles size={24} />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-white mb-1">Human Curation</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Every quote is hand-reviewed for truth, depth, and resonance before reaching your screen.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-500 flex items-center justify-center shrink-0">
                <Compass size={24} />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-white mb-1">Calm by Design</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">No ads, no engagement traps, and no invasive algorithms. Technology that respects your mind.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-500 flex items-center justify-center shrink-0">
                <Heart size={24} />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-white mb-1">Privacy First</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">We never collect, sell, or track personal data. Your moments of reflection are completely yours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Roster Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/30 border border-brand-100 dark:border-brand-900/50 mb-4">
              <span className="text-xs font-bold text-brand-700 dark:text-brand-300 uppercase tracking-wider">
                Leadership & Representatives
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
              Driven by simplicity.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative rounded-3xl bg-zinc-50/70 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 hover:border-brand-300 dark:hover:border-brand-700 transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/5 overflow-hidden flex flex-col"
              >
                {/* Photo */}
                <div className="relative h-72 w-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Tag Pill */}
                  <span className="absolute top-4 left-4 text-[11px] font-bold px-3 py-1 rounded-full bg-white/90 dark:bg-zinc-900/90 text-zinc-800 dark:text-zinc-200 backdrop-blur-md shadow-sm">
                    {member.tag}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 mb-4">
                      {member.role}
                    </p>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed font-sans mb-6">
                      {member.bio}
                    </p>
                  </div>

                  {/* Social / Contact Icons */}
                  <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800 flex items-center gap-3">
                    {member.email && (
                      <Link
                        href={`mailto:${member.email}`}
                        className="w-9 h-9 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:bg-brand-500 hover:text-white transition-colors shadow-sm"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail size={16} />
                      </Link>
                    )}
                    {member.twitter && (
                      <Link
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:bg-brand-500 hover:text-white transition-colors shadow-sm"
                        aria-label={`${member.name} on X`}
                      >
                        <Twitter size={16} />
                      </Link>
                    )}
                    {member.linkedin && (
                      <Link
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:bg-brand-500 hover:text-white transition-colors shadow-sm"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <Linkedin size={16} />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Reach-Out Box */}
          <div className="mt-20 p-8 md:p-12 rounded-3xl bg-zinc-900 text-white text-center max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black mb-3 tracking-tight">
                Want to connect with our leadership?
              </h3>
              <p className="text-zinc-400 mb-8 max-w-xl mx-auto text-sm md:text-base font-medium">
                Whether you have media inquiries, editorial suggestions, or questions about Wisdomly, our representatives are here to help.
              </p>
              <Link
                href="mailto:hello@wisdomly.top"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-brand-400 text-zinc-950 font-bold hover:bg-brand-300 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-500/20"
              >
                <Mail size={18} />
                Contact Our Team (hello@wisdomly.top)
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
