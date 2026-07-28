"use client";

import { FormEvent } from "react";

import {
  contactEmail,
  phoneDisplay,
  phoneHref,
} from "../lib/site-data";

const projectTypes = [
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Whole-Home Remodeling",
  "ADUs & Home Additions",
  "Backyard / outdoor living",
  "Roofing",
  "Windows or doors",
  "Ground-up home",
  "Tenant Improvements",
  "Commercial office / retail / restaurant",
  "Commercial glazing / storefront",
  "Commercial drywall / interiors",
  "Commercial demolition",
  "Commercial Construction",
  "Other",
];

type EstimateFormProps = {
  defaultProject?: string;
  source?: string;
};

export default function EstimateForm({
  defaultProject = "",
  source = "Website",
}: EstimateFormProps) {
  function requestEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      "Hi Supreme Pro Builders, I’d like to discuss a project.",
      "",
      `Name: ${String(data.get("name") || "")}`,
      `Phone: ${String(data.get("phone") || "")}`,
      `Email: ${String(data.get("email") || "")}`,
      `City: ${String(data.get("city") || "")}`,
      `Project: ${String(data.get("project") || "")}`,
      `Budget: ${String(data.get("budget") || "Not provided")}`,
      `Project details: ${String(data.get("description") || "")}`,
      `Source: ${source}`,
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      "New project estimate request",
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      className="estimate-form"
      data-integration="gohighlevel-ready"
      onSubmit={requestEstimate}
    >
      <div className="form-heading">
        <span>Free estimate request</span>
        <strong>Tell us what you’re planning.</strong>
      </div>
      <div className="form-row">
        <label>
          Your name
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder="First and last name"
            required
          />
        </label>
        <label>
          Phone number
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="(555) 555-5555"
            required
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          Email address
          <input
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="you@example.com"
            required
          />
        </label>
        <label>
          Project city
          <input
            name="city"
            type="text"
            autoComplete="address-level2"
            placeholder="City"
            required
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          Project type
          <select name="project" defaultValue={defaultProject} required>
            <option value="" disabled>
              Select one
            </option>
            {projectTypes.map((project) => (
              <option key={project}>{project}</option>
            ))}
          </select>
        </label>
        <label>
          Budget <small>(optional)</small>
          <select name="budget" defaultValue="">
            <option value="">Prefer not to say</option>
            <option>Under $10,000</option>
            <option>$10,000–$25,000</option>
            <option>$25,000–$50,000</option>
            <option>$50,000–$100,000</option>
            <option>$100,000–$250,000</option>
            <option>$250,000+</option>
          </select>
        </label>
      </div>
      <label>
        Brief project description
        <textarea
          name="description"
          rows={4}
          placeholder="What would you like to build or improve?"
          required
        />
      </label>
      <button className="button button-large form-button" type="submit">
        Request my estimate <span aria-hidden="true">→</span>
      </button>
      <p className="form-note">
        Submitting opens a pre-filled email to our project team. Prefer to talk
        now? <a href={phoneHref}>Call {phoneDisplay}</a>.
      </p>
    </form>
  );
}
