"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-20 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 relative overflow-hidden rounded-lg transition-transform group-hover:scale-110 duration-300">
                <Image src="/app_logo.svg" alt="Wisdomly" fill className="object-cover" />
              </div>
              <span className="text-xl font-black text-zinc-900 dark:text-white tracking-tighter">
                Wisdomly
              </span>
            </Link>
            <p className="text-zinc-500 font-medium leading-relaxed font-sans pr-4">
              Wisdomly delivers hand-picked wisdom in short, memorable quotes. Calm, ad-free, and offline-friendly.
            </p>
          </div>

          <div>
            <h4 className="font-black text-sm text-zinc-900 dark:text-white uppercase tracking-widest mb-6">
              Product
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="https://play.google.com/store/apps/details?id=com.wisdomly.org" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-brand-600 font-medium transition-colors flex items-center gap-1">
                  Google Play Store
                </Link>
              </li>
              <li>
                <span className="text-zinc-400 font-medium flex items-center gap-1.5">
                  App Store <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold">Coming Soon</span>
                </span>
              </li>
              <li>
                <Link href="/#features" className="text-zinc-500 hover:text-brand-600 font-medium transition-colors">Features</Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-zinc-500 hover:text-brand-600 font-medium transition-colors">How it works</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-sm text-zinc-900 dark:text-white uppercase tracking-widest mb-6">
              Resources
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/team" className="text-zinc-500 hover:text-brand-600 font-medium transition-colors">Our Team</Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-500 hover:text-brand-600 font-medium transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-zinc-500 hover:text-brand-600 font-medium transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-zinc-500 hover:text-brand-600 font-medium transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-sm text-zinc-900 dark:text-white uppercase tracking-widest mb-6">
              Connect
            </h4>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-brand-600 hover:text-white transition-all">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950 transition-all">
                <Github size={18} />
              </Link>
              <Link href="mailto:hello@wisdomly.top" className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-brand-600 hover:text-white transition-all">
                <Mail size={18} />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
              © 2026 Wisdomly. Published by{" "}
              <Link
                href="https://play.google.com/store/apps/developer?id=K%E2%80%99+ELEGANCE+UNI."
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-800 dark:text-zinc-200 font-semibold underline decoration-zinc-300 dark:decoration-zinc-700 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                K’ ELEGANCE UNI.
              </Link>
              . All rights reserved.
            </p>
            <p className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
              A subsidiary of SLEY LTD · Wisdom, one quote at a time.
            </p>
          </div>
          <p className="text-sm text-zinc-400 font-medium flex items-center gap-1 shrink-0">
            Wisdom, <span className="text-brand-500">one quote at a time.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
