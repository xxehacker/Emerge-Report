"use client";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
// import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="h-1 top-0 left-0 w-full border-b border-white/5 bg-black/60 backdrop-blur-xl z-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-red-700 to-red-600 flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c2 0 4 1 4 3s-2 3-4 3-4-1-4-3 2-3 4-3zm-6 8s2 4 6 4 6-4 6-4"
                    />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-white">
                  Emerge Report
                </span>
              </Link>
            </div>

            {/* Main Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {/* <Link
                href="/check-phishing"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Check Phishing
              </Link> */}

              <Link
                href="/submit-report"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Submit Report
              </Link>
              <Link
                href="/track-report"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Track Report
              </Link>
              <Link
                href="/learn-more"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>

            {/* Emergency Button */}
            <div className="flex items-center space-x-4">
              {/* <Link
                href="/contact"
                className="hidden md:block text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Contact
              </Link> */}
              <button className="group flex h-9 items-center gap-2 rounded-full bg-red-500/10 pl-4 pr-5 text-sm font-medium text-red-500 ring-1 ring-inset ring-red-500/20 transition-all hover:bg-red-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                Emergency: 1930
              </button>

              {/*  Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-zinc-400 hover:text-white"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
