interface SocialLink {
  href: string;
  text: string;
}

export const reachOutLinks: SocialLink[] = [
  {
    href: "https://www.facebook.com",
    text: "Facebook",
  },
  {
    href: "mailto:info@example.com",
    text: "info@example.com",
  },
  {
    href: "tel:+1234567890",
    text: "1234567890",
  },
];
