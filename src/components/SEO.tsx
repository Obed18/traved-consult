import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SERVICES } from "../data/services";

const SITE_URL = "https://travedconsult.com";
const DEFAULT_IMAGE = `${SITE_URL}/icon.png`;

type PageSEO = {
  title: string;
  description: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

const pages: Record<string, PageSEO> = {
  "/": {
    title: "Study Abroad & Travel Consultancy in Ghana | TravEd Consult",
    description:
      "TravEd Consult helps students and professionals in Ghana study abroad, choose universities, secure visas, find scholarships and plan international travel.",
  },
  "/about": {
    title: "About TravEd Consult | International Education Experts",
    description:
      "Learn how TravEd Consult supports students and professionals in Ghana with trusted study abroad, career counselling and international travel guidance.",
  },
  "/services": {
    title: "Study Abroad, Visa & Travel Services | TravEd Consult",
    description:
      "Explore TravEd Consult services for university applications, visa facilitation, career counselling, academic support, travel planning and global education events.",
  },
  "/blog": {
    title: "Study Abroad Advice & Visa Tips | TravEd Consult Blog",
    description:
      "Practical study abroad, scholarship, statement of purpose, student visa and post-study work advice for international students.",
    type: "article",
  },
  "/contact": {
    title: "Contact TravEd Consult | Accra, Ghana",
    description:
      "Contact TravEd Consult in Accra for personalised guidance on studying abroad, university applications, visas, scholarships and international travel.",
  },
  "/book": {
    title: "Book a Consultation | TravEd Consult",
    description:
      "Book a consultation with TravEd Consult for personalised study abroad, visa, scholarship, career and travel guidance.",
  },
  "/faqs": {
    title: "Frequently Asked Questions | TravEd Consult",
    description:
      "Find answers to common questions about university applications, study destinations, scholarships, visas and travel support.",
  },
  "/test": {
    title: "TravEd Consult",
    description: "TravEd Consult service preview.",
    noIndex: true,
  },
};

const upsertMeta = (attribute: "name" | "property", key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
};

const SEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const serviceId = pathname.startsWith("/services/") ? pathname.split("/")[2] : undefined;
    const service = serviceId ? SERVICES.find((item) => item.id === serviceId) : undefined;
    const page = service
      ? {
          title: `${service.title} | TravEd Consult`,
          description: service.heroDescription,
        }
      : pages[pathname] || pages["/"];
    const canonicalPath = service ? `/services/${service.id}` : pathname === "/test" ? "/" : pathname;
    const canonicalUrl = `${SITE_URL}${canonicalPath === "/" ? "" : canonicalPath}`;

    document.title = page.title;
    upsertMeta("name", "description", page.description);
    upsertMeta("name", "author", "TravEd Consult");
    upsertMeta("name", "robots", page.noIndex ? "noindex, nofollow" : "index, follow");
    upsertMeta("property", "og:title", page.title);
    upsertMeta("property", "og:description", page.description);
    upsertMeta("property", "og:type", page.type || "website");
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", DEFAULT_IMAGE);
    upsertMeta("property", "og:site_name", "TravEd Consult");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", page.title);
    upsertMeta("name", "twitter:description", page.description);
    upsertMeta("name", "twitter:image", DEFAULT_IMAGE);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: "TravEd Consult",
      url: SITE_URL,
      logo: DEFAULT_IMAGE,
      description: page.description,
      email: "hello@travedconsult.com",
      telephone: "+233549213246",
      address: {
        "@type": "PostalAddress",
        streetAddress: "16 Coquette Street, Madina New Road",
        addressLocality: "Accra",
        addressCountry: "GH",
      },
      areaServed: "Ghana",
      sameAs: [
        "https://www.facebook.com/share/1GwafEKyne/?mibextid=wwXIfr",
        "https://www.instagram.com/traved_consult",
        "https://x.com/traved_consult",
      ],
    };
    let script = document.head.querySelector<HTMLScriptElement>('script[data-seo="organization"]');
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seo = "organization";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, [pathname]);

  return null;
};

export default SEO;
