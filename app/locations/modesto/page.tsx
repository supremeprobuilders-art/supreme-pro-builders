import type { Metadata } from "next";
import Link from "next/link";

import EstimateForm from "../../../components/EstimateForm";
import LandingHeader from "../../../components/LandingHeader";
import {
  phoneDisplay,
  phoneHref,
  servicePages,
} from "../../../lib/site-data";

export const metadata: Metadata = {
  title: "General Contractor & Remodeling Contractor in Modesto, CA",
  description:
    "Supreme Pro Builders is a licensed general contractor serving Modesto with kitchen and bathroom remodeling, whole-home renovations, ADUs, tenant improvements, and commercial construction.",
  alternates: {
    canonical: "/locations/modesto",
  },
  openGraph: {
    title: "General Contractor in Modesto, CA | Supreme Pro Builders",
    description:
      "Residential remodeling and commercial construction from a licensed Modesto general contractor.",
    url: "https://supremeprobuilders.com/locations/modesto",
    images: [{ url: "/images/kitchen-hero.webp" }],
  },
};

const residential = servicePages.filter((service) =>
  [
    "kitchen-remodeling",
    "bathroom-remodeling",
    "whole-home-remodeling",
    "adus-home-additions",
  ].includes(service.slug),
);

const commercial = servicePages.filter((service) =>
  ["tenant-improvements", "commercial-construction"].includes(service.slug),
);

const modestoFaqs = [
  {
    question: "What construction services do you provide in Modesto?",
    answer:
      "Supreme Pro Builders provides residential remodeling, kitchens, bathrooms, whole-home renovations, ADUs, additions, tenant improvements, commercial interiors, and ground-up construction depending on project fit.",
  },
  {
    question: "Are you a licensed California general contractor?",
    answer:
      "Yes. Supreme Pro Builders Inc. lists California contractor license #1138049.",
  },
  {
    question: "Do you help with permits in Modesto?",
    answer:
      "When permits are required, permitting and inspection coordination can be included within the approved construction scope.",
  },
  {
    question: "Do you work outside Modesto?",
    answer:
      "Yes. Projects are considered throughout the Central Valley, Sacramento region, Bay Area, and other Northern California markets depending on scope and fit.",
  },
];

export default function ModestoPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GeneralContractor",
        name: "Supreme Pro Builders Inc.",
        url: "https://supremeprobuilders.com/locations/modesto",
        telephone: "+1-510-725-5120",
        email: "motuma@spbinc.co",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1620 N Carpenter Road",
          addressLocality: "Modesto",
          addressRegion: "CA",
          postalCode: "95351",
          addressCountry: "US",
        },
        areaServed: {
          "@type": "City",
          name: "Modesto",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: modestoFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <LandingHeader />
      <main className="landing-main">
        <section className="service-hero location-hero">
          <img src="/images/kitchen-hero.webp" alt="" />
          <div className="service-hero-shade" />
          <div className="page-shell service-hero-content">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>Modesto</span>
            </nav>
            <p className="eyebrow light">Based in Modesto, California</p>
            <h1>General contractor for Modesto homes and businesses.</h1>
            <p>
              Residential remodeling, ADUs, tenant improvements, and commercial
              construction managed by one licensed California general
              contractor.
            </p>
            <div className="hero-ctas">
              <a className="button button-large" href="#estimate">
                Request a project estimate
              </a>
              <a className="text-link light-link" href={phoneHref}>
                Call {phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <section className="service-overview section page-shell">
          <div>
            <p className="eyebrow">Local construction capability</p>
            <h2>One builder for projects across the property.</h2>
          </div>
          <div className="service-overview-copy">
            <p>
              Supreme Pro Builders serves homeowners, property owners,
              developers, and businesses in Modesto with connected
              preconstruction, trade coordination, construction, inspections,
              punch work, and closeout.
            </p>
            <p>
              Whether the project is a focused bathroom remodel, a complete home
              renovation, a commercial build-out, or a ground-up opportunity,
              the goal is the same: clear scope, accountable coordination, and
              a finished result built around the way the space needs to work.
            </p>
          </div>
        </section>

        <section className="local-services section">
          <div className="page-shell">
            <div className="section-heading">
              <p className="eyebrow light">For Modesto homeowners</p>
              <h2>Residential remodeling and home construction.</h2>
            </div>
            <div className="related-grid local-card-grid">
              {residential.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <span>{service.eyebrow}</span>
                  <strong>{service.shortTitle}</strong>
                  <small>Explore service →</small>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section page-shell">
          <div className="section-heading">
            <p className="eyebrow">For developers & businesses</p>
            <h2>Commercial work from existing conditions to closeout.</h2>
          </div>
          <div className="fit-grid">
            {commercial.map((service) => (
              <article key={service.slug}>
                <h3>{service.shortTitle}</h3>
                <p>{service.heroCopy}</p>
                <Link className="text-link" href={`/services/${service.slug}`}>
                  Explore {service.shortTitle} →
                </Link>
              </article>
            ))}
            <article>
              <h3>Focused commercial scopes</h3>
              <p>
                Demolition, framing, drywall, ceilings, glazing, storefronts,
                doors, interiors, and finish work can be coordinated depending
                on project fit.
              </p>
            </article>
          </div>
        </section>

        <section className="faq section page-shell">
          <div className="faq-heading">
            <p className="eyebrow">Local project questions</p>
            <h2>Modesto construction FAQs</h2>
          </div>
          <div className="faq-list">
            {modestoFaqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="estimate section" id="estimate">
          <div className="page-shell estimate-grid">
            <div className="estimate-copy">
              <p className="eyebrow">Start your Modesto project</p>
              <h2>Tell us what you want to build.</h2>
              <p>
                Share the project type, property location, and a few details.
                We’ll follow up to discuss the best next step.
              </p>
              <a className="direct-call" href={phoneHref}>
                <div>
                  <small>Prefer to call?</small>
                  <strong>{phoneDisplay}</strong>
                </div>
              </a>
            </div>
            <EstimateForm source="/locations/modesto" />
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="page-shell">
          <strong>Supreme Pro Builders Inc.</strong>
          <span>1620 N Carpenter Road · Modesto, CA 95351</span>
          <a href={phoneHref}>{phoneDisplay}</a>
        </div>
      </footer>

      <div className="mobile-bar" aria-label="Quick contact">
        <a href={phoneHref}>Call now</a>
        <a href="#estimate">Get free estimate →</a>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}

