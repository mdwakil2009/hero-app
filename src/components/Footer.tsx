
import Link from "next/link";
import {
  MapPin,
  Mail,
  ArrowUpRight,  Compass,
  Plane,
  CalendarCheck,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const exploreLinks = [
  { name: "Home", href: "/" },
  { name: "All Destinations", href: "/destinations" },
  { name: "Add Destination", href: "/add-destination" },
];

const featureLinks = [
  { name: "Explore Places", href: "/destinations", icon: Compass },
  { name: "Travel Planning", href: "/destinations", icon: Plane },
  { name: "Booking Information", href: "/destinations", icon: CalendarCheck },
];

const supportLinks = [
  { name: "Contact Us", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/mdwakil2009",
    label: "GH",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    label: "in",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    label: "f",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white text-gray-600 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-400">
      <div className="mx-auto max-w-7xl px-6 pb-6 pt-14 lg:px-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand Information */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                <Compass size={25} />
              </span>

              <span className="text-2xl font-extrabold tracking-tight text-gray-950 dark:text-white">
                Hero<span className="text-blue-600">App</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7">
              Discover beautiful destinations, explore new adventures,
              and plan your next journey with Hero App. Your next
              unforgettable travel experience starts here.
            </p>

            {/* Social Media */}
            <div className="mt-6">
              <p className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">
                Follow us
              </p>

              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 font-bold text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-base font-bold text-gray-950 dark:text-white">
              Explore
            </h3>

            <ul className="mt-5 space-y-4">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Travel Features */}
          <div>
            <h3 className="text-base font-bold text-gray-950 dark:text-white">
              Travel Features
            </h3>

            <ul className="mt-5 space-y-4">
              {featureLinks.map(({ name, href, icon: Icon }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="group flex items-center gap-3 text-sm transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Icon
                      size={17}
                      className="shrink-0 text-blue-600"
                    />
                    <span>{name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-start gap-3 rounded-xl bg-blue-50 p-3 dark:bg-blue-950/30">
              <ShieldCheck
                size={20}
                className="mt-0.5 shrink-0 text-blue-600"
              />
              <p className="text-xs leading-5">
                Explore destinations and find useful information
                for your next trip.
              </p>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-base font-bold text-gray-950 dark:text-white">
              Help & Support
            </h3>

            <ul className="mt-5 space-y-4">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <p className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white">
                <Headphones size={17} className="text-blue-600" />
                Need help?
              </p>

              <a
                href="mailto:hello@example.com"
                className="mt-3 flex items-center gap-2 text-sm transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Mail size={16} className="shrink-0" />
                hello@example.com
              </a>

              <p className="mt-3 flex items-center gap-2 text-sm">
                <MapPin size={16} className="shrink-0 text-blue-600" />
                Bangladesh
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 border-t border-gray-200 pt-6 dark:border-gray-800">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm">
              © {new Date().getFullYear()} Hero App. All rights reserved.
            </p>

            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              Explore the world with Hero App
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
