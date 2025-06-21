import React from "react";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com/yourprofile",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Email",
    url: "mailto:your@email.com",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://facebook.com/yourprofile",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourprofile",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.09 9.09 0 0 1-2.88 1.1A4.48 4.48 0 0 0 12 8.09v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    ),
  },
];

const ContactDetails: React.FC = () => (
  <div className="flex flex-col items-center gap-4 mt-8">
    <h3 className="text-xl font-bold text-stone-700 mb-2">Contact Us</h3>
    <div className="flex gap-6">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-700 hover:text-amber-600 transition-colors duration-200"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  </div>
);

export default ContactDetails;
