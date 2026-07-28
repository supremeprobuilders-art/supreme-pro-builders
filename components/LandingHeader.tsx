import Link from "next/link";

import { phoneDisplay, phoneHref } from "../lib/site-data";

export default function LandingHeader() {
  return (
    <header className="landing-header">
      <Link className="landing-brand" href="/" aria-label="Supreme Pro Builders home">
        <img src="/images/logo.webp" alt="Supreme Pro Builders Inc." />
      </Link>
      <nav aria-label="Service page">
        <Link href="/#services">Services</Link>
        <Link href="/services/commercial-construction">Commercial</Link>
        <Link href="/locations/modesto">Modesto</Link>
      </nav>
      <div className="landing-actions">
        <a className="header-phone" href={phoneHref}>
          {phoneDisplay}
        </a>
        <a className="button button-small" href="#estimate">
          Get an estimate
        </a>
      </div>
    </header>
  );
}

