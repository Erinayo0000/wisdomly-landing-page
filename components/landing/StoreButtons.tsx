import Link from "next/link";

interface StoreButtonsProps {
  className?: string;
  size?: "default" | "large";
}

export function GooglePlayIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.609 1.814L13.793 12 3.61 22.186a1.95 1.95 0 01-.61-1.42V3.234c0-.555.226-1.06.61-1.42zm11.246 11.248l2.36 2.36-12.06 6.945 9.7-9.305zm0-2.124L5.155 1.633l12.06 6.946-2.36 2.359zm1.06 1.062l3.473-1.996a1.5 1.5 0 000-2.608l-3.473-1.997-2.124 2.125 2.124 2.126z" />
    </svg>
  );
}

export function AppleIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.76 1.04-1.81.93-2.87-.9.04-1.99.6-2.63 1.36-.56.65-1.06 1.71-.93 2.74 1.01.08 2.01-.48 2.63-1.23z" />
    </svg>
  );
}

export function StoreButtons({ className = "", size = "default" }: StoreButtonsProps) {
  const isLarge = size === "large";

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${className}`}>
      {/* Google Play - Live */}
      <Link
        href="https://play.google.com/store/apps/details?id=com.wisdomly.org"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-3 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-brand-500/10 border border-zinc-800 dark:border-zinc-200 ${
          isLarge ? "px-7 py-4 text-base" : "px-6 py-3.5 text-sm"
        }`}
      >
        <GooglePlayIcon className={isLarge ? "w-7 h-7 shrink-0 text-brand-400 dark:text-brand-600" : "w-6 h-6 shrink-0 text-brand-400 dark:text-brand-600"} />
        <div className="text-left leading-tight">
          <p className="text-[10px] uppercase font-bold tracking-wider opacity-80">Get it on</p>
          <p className="font-extrabold tracking-tight">Google Play</p>
        </div>
      </Link>

      {/* App Store - Coming Soon */}
      <div
        className={`inline-flex items-center gap-3 bg-zinc-100 dark:bg-zinc-900/80 text-zinc-400 dark:text-zinc-500 rounded-2xl font-bold border border-zinc-200 dark:border-zinc-800 cursor-not-allowed select-none relative group ${
          isLarge ? "px-7 py-4 text-base" : "px-6 py-3.5 text-sm"
        }`}
      >
        <AppleIcon className={isLarge ? "w-7 h-7 shrink-0 opacity-70" : "w-6 h-6 shrink-0 opacity-70"} />
        <div className="text-left leading-tight">
          <div className="flex items-center gap-2">
            <p className="text-[10px] uppercase font-bold tracking-wider opacity-80">Download on</p>
            <span className="text-[9px] uppercase font-black px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-600 dark:text-brand-400 border border-brand-500/30">
              Coming Soon
            </span>
          </div>
          <p className="font-extrabold tracking-tight text-zinc-600 dark:text-zinc-400">App Store</p>
        </div>
      </div>
    </div>
  );
}
