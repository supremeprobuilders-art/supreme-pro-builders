import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import EstimateForm from "../../../components/EstimateForm";
import LandingHeader from "../../../components/LandingHeader";
import {
  phoneDisplay,
  phoneHref,
  servicePageBySlug,
  servicePages,
} from "../../../lib/site-data";

type ServiceRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePageBySlug[slug];

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url: `https://supremeprobuilders.com/services/${service.slug}`,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServiceRoute({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const service = servicePageBySlug[slug];

  if (!service) {
    notFound();
  }

  const related = servicePages
    .filter((candidate) => candidate.slug !== service.slug)
    .slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.shortTitle,
        description: service.metaDescription,
        provider: {
          "@type": "GeneralContractor",
          name: "Supreme Pro Builders Inc.",
          telephone: "+1-510-725-5120",
          url: "https://supremeprobuilders.com",
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Northern California",
        },
        url: `https://supremeprobuilders.com/services/${service.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://supremeprobuilders.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: service.shortTitle,
            item: `https://supremeprobuilders.com/services/${service.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
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
        <section className="service-hero">
          <img src={service.image} alt="" />
          <div className="service-hero-shade" />
          <div className="page-shell service-hero-content">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>{service.shortTitle}</span>
            </nav>
            <p className="eyebrow light">{service.eyebrow}</p>
            <h1>{service.title}</h1>
            <p>{service.heroCopy}</p>
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
            <p className="eyebrow">Complete project coordination</p>
            <h2>A connected plan from first review through closeout.</h2>
          </div>
          <div className="service-overview-copy">
            {service.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="service-included section">
          <div className="page-shell">
            <div className="section-heading">
              <p className="eyebrow light">What the scope can include</p>
              <h2>Construction details coordinated under one contractor.</h2>
            </div>
            <div className="included-grid">
              {service.included.map((item, index) => (
                <article key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section page-shell">
          <div className="section-heading">
            <p className="eyebrow">A practical fit</p>
            <h2>Built around the outcome you need.</h2>
          </div>
          <div className="fit-grid">
            {service.idealFor.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="service-process section">
          <div className="page-shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">How the project moves</p>
                <h2>Clear phases. Connected decisions.</h2>
              </div>
              <p>
                The exact path depends on scope and site conditions, but the
                fundamentals stay consistent from preconstruction through the
                final walkthrough.
              </p>
            </div>
            <ol className="process-list">
              {service.process.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="faq section page-shell">
          <div className="faq-heading">
            <p className="eyebrow">Project questions</p>
            <h2>{service.shortTitle} FAQs</h2>
          </div>
          <div className="faq-list">
            {service.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="related section">
          <div className="page-shell">
            <div className="section-heading">
              <p className="eyebrow light">Explore related services</p>
              <h2>One builder for the work around it.</h2>
            </div>
            <div className="related-grid">
              {related.map((item) => (
                <Link key={item.slug} href={`/services/${item.slug}`}>
                  <span>{item.eyebrow}</span>
                  <strong>{item.shortTitle}</strong>
                  <small>Explore service →</small>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="estimate section" id="estimate">
          <div className="page-shell estimate-grid">
            <div className="estimate-copy">
              <p className="eyebrow">Start the conversation</p>
              <h2>Tell us what you want to build.</h2>
              <p>
                Share the property location, project type, and a few details.
                We’ll follow up to learn more and discuss the next step.
              </p>
              <a className="direct-call" href={phoneHref}>
                <div>
                  <small>Prefer to call?</small>
                  <strong>{phoneDisplay}</strong>
                </div>
              </a>
            </div>
            <EstimateForm
              defaultProject={service.shortTitle}
              source={`/services/${service.slug}`}
            />
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="page-shell">
          <strong>Supreme Pro Builders Inc.</strong>
          <span>California General Contractor · License #1138049</span>
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

