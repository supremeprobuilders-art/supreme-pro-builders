"use client";

import Link from "next/link";
import { useState } from "react";

import EstimateForm from "../components/EstimateForm";
import {
  contactEmail as email,
  phoneDisplay,
  phoneHref,
} from "../lib/site-data";

const services = [
  {
    number: "01",
    title: "Whole-home remodeling",
    copy: "One coordinated team for full interior transformations, additions, layout changes, finishes, and final details.",
    image: "/images/kitchen-dark.webp",
    tag: "Complete transformations",
    href: "/services/whole-home-remodeling",
  },
  {
    number: "02",
    title: "Kitchen remodeling",
    copy: "Functional layouts, cabinetry, countertops, lighting, flooring, and the construction work that brings it all together.",
    image: "/images/kitchen-hero.webp",
    tag: "Built around your life",
    href: "/services/kitchen-remodeling",
  },
  {
    number: "03",
    title: "Bathroom remodeling",
    copy: "From efficient bathroom updates to custom, spa-inspired spaces with clean finishes and thoughtful details.",
    image: "/images/bathroom-modern.webp",
    tag: "Polished, practical spaces",
    href: "/services/bathroom-remodeling",
  },
  {
    number: "04",
    title: "ADUs & additions",
    copy: "More living space, rental potential, or room for family—planned and built with the existing property in mind.",
    image: "/images/kitchen-1.webp",
    tag: "Make the property work harder",
    href: "/services/adus-home-additions",
  },
  {
    number: "05",
    title: "Ground-up construction",
    copy: "Residential and commercial builds managed from preconstruction and permitting through closeout and the final walkthrough.",
    image: "/images/kitchen-12.webp",
    tag: "Complete project delivery",
    href: "/services/commercial-construction",
  },
  {
    number: "06",
    title: "Commercial & tenant improvements",
    copy: "Buildouts, reconfigurations, glazing, drywall, demolition, and finish work for offices, retail, hospitality, and commercial spaces.",
    image: "/images/bathroom-luxury.webp",
    tag: "Built for business",
    href: "/services/tenant-improvements",
  },
];

const commercialScopes = [
  {
    title: "Tenant improvements",
    copy: "Complete interior buildouts, reconfigurations, upgrades, and finish packages shaped around your space and business requirements.",
  },
  {
    title: "Glazing & storefronts",
    copy: "Commercial glass, storefront systems, interior glazing, doors, and coordinated openings as part of a complete construction scope.",
  },
  {
    title: "Drywall & interiors",
    copy: "Framing, drywall, ceilings, insulation, finishes, and the interior trades needed to take a space from shell to ready.",
  },
  {
    title: "Demolition",
    copy: "Selective interior demolition, structural demolition coordination, site clearing, and preparation for the work that follows.",
  },
  {
    title: "Ground-up construction",
    copy: "End-to-end construction for new commercial buildings, additions, and development projects with one accountable general contractor.",
  },
  {
    title: "Permitting to closeout",
    copy: "Preconstruction coordination, permitting support, inspections, punch work, closeout, and a thorough final walkthrough.",
  },
];

const residentialScopes = [
  "Whole-home remodeling",
  "Kitchen & bathroom remodeling",
  "ADUs & additions",
  "Ground-up custom homes",
  "Outdoor living & backyard upgrades",
  "Layout changes & interior renovations",
];

const regions = [
  "Modesto",
  "Stockton",
  "Tracy",
  "Manteca",
  "Sacramento",
  "Elk Grove",
  "San Jose",
  "Fremont",
  "Oakland",
  "Pleasanton",
  "Walnut Creek",
  "San Francisco",
];

const reviews = [
  {
    quote:
      "Our kitchen looks amazing. The team checked in often and made everything feel stress-free.",
    name: "Jacob R.",
    project: "Kitchen remodel",
  },
  {
    quote:
      "Professional team, clear updates, and the work came out beautiful. We couldn’t be happier.",
    name: "Rita C.",
    project: "Whole-home improvements",
  },
  {
    quote:
      "The bathroom turned out great. They handled surprises calmly and kept the project moving.",
    name: "Hannah P.",
    project: "Bathroom remodel",
  },
];

const Arrow = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 10h11M11 6l4 4-4 4" />
  </svg>
);

const Phone = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7.2 3.5 9.8 8l-2 2.1a15.7 15.7 0 0 0 6.1 6.1l2.1-2 4.5 2.6-1.1 3.1c-.3.8-1.1 1.3-2 1.2A16.8 16.8 0 0 1 2.9 6.6c-.1-.9.4-1.7 1.2-2l3.1-1.1Z" />
  </svg>
);

const Check = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="m4 10 4 4 8-9" />
  </svg>
);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Supreme Pro Builders home">
          <img src="/images/logo.webp" alt="Supreme Pro Builders Inc." />
        </a>
        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Primary">
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="#commercial" onClick={() => setMenuOpen(false)}>
            Commercial
          </a>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Our work
          </a>
          <a href="#process" onClick={() => setMenuOpen(false)}>
            Process
          </a>
          <a href="#areas" onClick={() => setMenuOpen(false)}>
            Service area
          </a>
        </nav>
        <div className="header-actions">
          <a className="header-phone" href={phoneHref}>
            <Phone />
            <span>{phoneDisplay}</span>
          </a>
          <a className="button button-small" href="#estimate">
            Get an estimate
          </a>
          <button
            className={menuOpen ? "menu-button menu-active" : "menu-button"}
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-image" role="img" aria-label="Completed kitchen remodel" />
          <div className="hero-shade" />
          <div className="hero-content page-shell">
            <p className="eyebrow light">
              Licensed California General Contractor · #1138049
            </p>
            <h1 id="hero-title">
              Build it once.
              <br />
              <em>Build it right.</em>
            </h1>
            <p className="hero-copy">
              One licensed general contractor for commercial development,
              tenant improvements, custom homes, and complete remodeling across
              the Bay Area, Sacramento, and Central Valley.
            </p>
            <div className="hero-ctas">
              <a className="button button-large" href="#estimate">
                Get a free project estimate <Arrow />
              </a>
              <a className="text-link light-link" href={phoneHref}>
                Call {phoneDisplay}
              </a>
            </div>
            <div className="hero-proof">
              <span>
                <Check /> Developers, businesses & homeowners
              </span>
              <span>
                <Check /> Financing options available
              </span>
              <span>
                <Check /> Clear project communication
              </span>
            </div>
          </div>
          <a className="hero-scroll" href="#services" aria-label="Scroll to services">
            <span>Explore</span>
            <i />
          </a>
        </section>

        <section className="intro section page-shell" id="services">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">One builder. Every phase.</p>
              <h2>From the first idea to the final walkthrough.</h2>
            </div>
            <p>
              From a homeowner’s first remodel to a developer’s commercial
              build, Supreme Pro Builders brings the planning, trade
              coordination, construction, and communication under one roof.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-image">
                  <img src={service.image} alt="" loading="lazy" />
                  <span>{service.tag}</span>
                </div>
                <div className="service-card-copy">
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <Link href={service.href}>
                    Explore this service <Arrow />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="audiences section" id="commercial">
          <div className="page-shell">
            <div className="audience-heading">
              <div>
                <p className="eyebrow light">Commercial & residential expertise</p>
                <h2>Built for development. Built for home.</h2>
              </div>
              <p>
                Diverse capabilities, one point of accountability. We work with
                developers, property owners, business operators, and homeowners
                to move projects from an early idea to a finished space.
              </p>
            </div>

            <div className="audience-panels">
              <article className="commercial-panel">
                <div className="panel-intro">
                  <span className="panel-kicker">For developers & businesses</span>
                  <h3>Commercial construction without the handoff gaps.</h3>
                  <p>
                    Engage Supreme Pro Builders for a focused tenant
                    improvement or a complete ground-up build. We coordinate
                    the work across phases so decisions, trades, schedule, and
                    closeout stay connected.
                  </p>
                  <Link
                    className="button button-large"
                    href="/services/tenant-improvements"
                  >
                    Explore tenant improvements <Arrow />
                  </Link>
                </div>
                <div className="commercial-scope-grid">
                  {commercialScopes.map((scope, index) => (
                    <div className="commercial-scope" key={scope.title}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <h4>{scope.title}</h4>
                      <p>{scope.copy}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="residential-panel">
                <div>
                  <span className="panel-kicker">For homeowners</span>
                  <h3>One team for the home you want next.</h3>
                  <p>
                    Remodel one important space, transform the full house, add
                    an ADU, or build from the ground up—with a team that can
                    carry the entire construction scope.
                  </p>
                </div>
                <ul>
                  {residentialScopes.map((scope) => (
                    <li key={scope}>
                      <Check /> {scope}
                    </li>
                  ))}
                </ul>
                <Link
                  className="text-link"
                  href="/services/whole-home-remodeling"
                >
                  Explore residential remodeling <Arrow />
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className="statement">
          <div className="page-shell statement-grid">
            <p className="eyebrow light">Full-scope construction</p>
            <h2>
              From permitting and demolition to finishing details and the final
              walkthrough.
            </h2>
            <p>
              One experienced builder keeps the complete scope connected,
              whether the project is a commercial development, business
              buildout, custom home, or major remodel.
            </p>
            <a className="button button-outline" href="#estimate">
              Start the conversation <Arrow />
            </a>
          </div>
        </section>

        <section className="work section page-shell" id="work">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Craftsmanship you can see.</h2>
          </div>
          <div className="project-collage">
            <figure className="project-main">
              <img
                src="/images/kitchen-hero.webp"
                alt="Bright custom kitchen with navy island"
                loading="lazy"
              />
              <figcaption>Kitchen remodeling</figcaption>
            </figure>
            <figure>
              <img
                src="/images/bathroom-modern.webp"
                alt="Modern black and white bathroom remodel"
                loading="lazy"
              />
              <figcaption>Bathroom remodeling</figcaption>
            </figure>
            <figure>
              <img
                src="/images/kitchen-dark.webp"
                alt="Dark cabinetry and wood kitchen remodel"
                loading="lazy"
              />
              <figcaption>Full interior renovation</figcaption>
            </figure>
          </div>
          <a className="button button-dark centered-button" href="#estimate">
            Tell us what you want to build <Arrow />
          </a>
        </section>

        <section className="process section" id="process">
          <div className="page-shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">A better building experience</p>
                <h2>Clear steps. No mystery.</h2>
              </div>
              <p>
                Every project is different, but the fundamentals stay the same:
                understand the goal, establish the scope, coordinate the work,
                and keep the owner informed.
              </p>
            </div>
            <ol className="process-list">
              <li>
                <span>01</span>
                <div>
                  <h3>Goals & preconstruction</h3>
                  <p>
                    We learn the project, property, business or household needs,
                    timeline priorities, and the outcome you need.
                  </p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Site review & scope</h3>
                  <p>
                    We review existing conditions and define demolition,
                    structural, glazing, interior, and finish requirements.
                  </p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Planning & permitting</h3>
                  <p>
                    The scope, sequencing, trade coordination, and permitting
                    path are organized before construction moves forward.
                  </p>
                </div>
              </li>
              <li>
                <span>04</span>
                <div>
                  <h3>Build, closeout & walkthrough</h3>
                  <p>
                    We manage construction, inspections, punch work, closeout,
                    and the final walkthrough with clear owner communication.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="reviews section page-shell" aria-labelledby="reviews-title">
          <div className="review-intro">
            <p className="eyebrow">Client feedback</p>
            <h2 id="reviews-title">The finish matters. So does the experience.</h2>
            <div className="stars" aria-label="5 out of 5 stars">
              ★★★★★
            </div>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <blockquote key={review.name}>
                <span className="quote-mark">“</span>
                <p>{review.quote}</p>
                <footer>
                  <strong>{review.name}</strong>
                  <span>{review.project}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="areas section" id="areas">
          <div className="page-shell areas-grid">
            <div>
              <p className="eyebrow light">Where we build</p>
              <h2>Serving Northern California’s fastest-growing communities.</h2>
              <p>
                Based in Modesto and serving residential and commercial clients
                throughout the Central Valley, Sacramento region, and Bay Area.
                Contact us about larger commercial and development projects
                across Northern California.
              </p>
              <a className="text-link light-link" href={phoneHref}>
                Ask about your location <Arrow />
              </a>
            </div>
            <div className="region-list">
              {regions.map((region) => (
                region === "Modesto" ? (
                  <Link key={region} href="/locations/modesto">
                    {region} <span aria-hidden="true">→</span>
                  </Link>
                ) : (
                  <span key={region}>{region}</span>
                )
              ))}
            </div>
          </div>
        </section>

        <section className="estimate section" id="estimate">
          <div className="page-shell estimate-grid">
            <div className="estimate-copy">
              <p className="eyebrow">Let’s talk about your project</p>
              <h2>Get a free project estimate.</h2>
              <p>
                Share the basics and your preferred contact information. We’ll
                follow up to learn more and discuss the best next step.
              </p>
              <a className="direct-call" href={phoneHref}>
                <span>
                  <Phone />
                </span>
                <div>
                  <small>Prefer to call?</small>
                  <strong>{phoneDisplay}</strong>
                </div>
              </a>
              <div className="estimate-trust">
                <span>
                  <Check /> No-pressure conversation
                </span>
                <span>
                  <Check /> Residential & commercial
                </span>
                <span>
                  <Check /> Financing options available
                </span>
              </div>
            </div>

            <EstimateForm source="/" />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="page-shell footer-top">
          <a className="footer-brand" href="#top">
            <img src="/images/logo-white.webp" alt="Supreme Pro Builders Inc." />
          </a>
          <p>
            Remodeling and construction for homes and businesses across the Bay
            Area, Sacramento, and Central Valley.
          </p>
          <a className="button button-outline" href="#estimate">
            Start your project <Arrow />
          </a>
        </div>
        <div className="page-shell footer-details">
          <div>
            <strong>Contact</strong>
            <a href={phoneHref}>{phoneDisplay}</a>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
          <div>
            <strong>Office</strong>
            <address>
              1620 N Carpenter Road
              <br />
              Modesto, CA 95351
            </address>
          </div>
          <div>
            <strong>Credentials</strong>
            <span>California License #1138049</span>
            <span>General Building Contractor</span>
          </div>
        </div>
        <div className="page-shell footer-bottom">
          <span>© {new Date().getFullYear()} Supreme Pro Builders Inc.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>

      <div className="mobile-bar" aria-label="Quick contact">
        <a href={phoneHref}>
          <Phone />
          Call now
        </a>
        <a href="#estimate">
          Get free estimate <Arrow />
        </a>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GeneralContractor",
            name: "Supreme Pro Builders Inc.",
            url: "https://supremeprobuilders.com",
            telephone: "+1-510-725-5120",
            email,
            address: {
              "@type": "PostalAddress",
              streetAddress: "1620 N Carpenter Road",
              addressLocality: "Modesto",
              addressRegion: "CA",
              postalCode: "95351",
              addressCountry: "US",
            },
            areaServed: [
              "Central Valley, California",
              "Sacramento, California",
              "San Francisco Bay Area, California",
            ],
            serviceType: [
              "Residential Remodeling",
              "Commercial Construction",
              "Tenant Improvements",
              "Commercial Glazing",
              "Commercial Drywall",
              "Commercial Demolition",
              "Commercial Buildouts",
              "Construction Permitting",
              "ADU Construction",
              "Ground-Up Construction",
              "Kitchen Remodeling",
              "Bathroom Remodeling",
            ],
          }),
        }}
      />
    </>
  );
}
