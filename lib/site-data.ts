export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroCopy: string;
  image: string;
  overview: string[];
  included: string[];
  idealFor: { title: string; copy: string }[];
  process: { title: string; copy: string }[];
  faqs: { question: string; answer: string }[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling in Modesto & Northern California",
    shortTitle: "Kitchen Remodeling",
    metaDescription:
      "Plan a kitchen remodel with Supreme Pro Builders, a licensed California general contractor serving Modesto, Stockton, Tracy, Manteca, Sacramento, and nearby communities.",
    eyebrow: "Residential remodeling",
    heroCopy:
      "Create a kitchen that works better every day—from the layout and cabinetry to lighting, finishes, and the construction details that make the room feel complete.",
    image: "/images/kitchen-hero.webp",
    overview: [
      "A successful kitchen remodel is more than a finish upgrade. The layout, storage, lighting, electrical plan, plumbing locations, ventilation, and material transitions all need to work together.",
      "Supreme Pro Builders coordinates the complete construction scope so homeowners have one accountable team from the early site review through punch work and the final walkthrough.",
    ],
    included: [
      "Kitchen layout changes and open-concept conversions",
      "Cabinetry, islands, pantries, and storage planning",
      "Countertops, backsplash, flooring, and finish installation",
      "Lighting, electrical, plumbing, and ventilation coordination",
      "Drywall, paint, trim, and adjacent-room transitions",
      "Permitting and inspection coordination when required",
    ],
    idealFor: [
      {
        title: "Outdated layouts",
        copy: "Improve circulation, storage, work zones, and the connection between the kitchen and nearby living spaces.",
      },
      {
        title: "Complete transformations",
        copy: "Coordinate cabinetry, surfaces, lighting, flooring, and construction under one general contractor.",
      },
      {
        title: "Part of a larger remodel",
        copy: "Integrate the kitchen into a whole-home renovation, addition, or major layout change.",
      },
    ],
    process: [
      {
        title: "Goals & site review",
        copy: "We discuss how the kitchen needs to function, review existing conditions, and identify the decisions that will shape the scope.",
      },
      {
        title: "Scope & planning",
        copy: "We organize the layout, trade work, finishes, sequencing, and permitting path before construction begins.",
      },
      {
        title: "Construction",
        copy: "Demolition, rough work, installation, finishes, and inspections are coordinated as one connected build.",
      },
      {
        title: "Punch & walkthrough",
        copy: "We review the completed kitchen, address final details, and walk through the finished space with you.",
      },
    ],
    faqs: [
      {
        question: "Can you change the kitchen layout?",
        answer:
          "Yes. Layout changes may include moving appliances, plumbing, electrical, walls, doors, or windows. The final scope depends on the home’s existing conditions and any structural or permitting requirements.",
      },
      {
        question: "Do you handle permits and inspections?",
        answer:
          "When permits are required, Supreme Pro Builders can coordinate the permitting and inspection path as part of the construction scope.",
      },
      {
        question: "Can the kitchen be part of a whole-home remodel?",
        answer:
          "Yes. Kitchen work can be coordinated with flooring, lighting, bathrooms, additions, interior layout changes, and other whole-home improvements.",
      },
      {
        question: "Do you offer financing options?",
        answer:
          "Financing options may be available for qualified projects. Contact the team to discuss the project and current options.",
      },
    ],
  },
  {
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling in Modesto & Northern California",
    shortTitle: "Bathroom Remodeling",
    metaDescription:
      "Bathroom remodeling for primary baths, guest baths, showers, tubs, vanities, tile, lighting, and complete renovations across Modesto and Northern California.",
    eyebrow: "Residential remodeling",
    heroCopy:
      "Turn an outdated or inefficient bathroom into a polished, practical space with coordinated construction from demolition through final details.",
    image: "/images/bathroom-modern.webp",
    overview: [
      "Bathrooms pack many building systems into a small space. Waterproofing, ventilation, plumbing, electrical, tile, cabinetry, and finish details all have to be sequenced correctly.",
      "Supreme Pro Builders manages the complete scope for efficient updates, primary-suite transformations, guest bathrooms, and bathroom work included within larger home renovations.",
    ],
    included: [
      "Tub-to-shower conversions and custom shower construction",
      "Tile surrounds, floors, niches, benches, and waterproofing",
      "Vanities, countertops, mirrors, storage, and finish carpentry",
      "Plumbing fixture and electrical coordination",
      "Lighting, ventilation, drywall, paint, and trim",
      "Layout changes and accessibility-minded improvements",
    ],
    idealFor: [
      {
        title: "Primary suites",
        copy: "Create a more comfortable daily routine with improved storage, lighting, shower space, and finish quality.",
      },
      {
        title: "Guest bathrooms",
        copy: "Refresh an aging bath with durable materials, a clean layout, and carefully coordinated installation.",
      },
      {
        title: "Function upgrades",
        copy: "Improve access, ventilation, storage, water management, and the way a compact room is used.",
      },
    ],
    process: [
      {
        title: "Existing-condition review",
        copy: "We review the room, discuss priorities, and identify layout, plumbing, electrical, ventilation, and finish considerations.",
      },
      {
        title: "Defined scope",
        copy: "Materials, trade work, sequencing, and any permitting requirements are organized around the approved direction.",
      },
      {
        title: "Coordinated build",
        copy: "Demolition, rough work, waterproofing, installation, and finish work move through a controlled sequence.",
      },
      {
        title: "Final review",
        copy: "We complete punch work and walk the finished bathroom with you before closeout.",
      },
    ],
    faqs: [
      {
        question: "Can you convert a tub into a shower?",
        answer:
          "Yes. A tub-to-shower conversion can be evaluated as part of the site review, including plumbing, waterproofing, glass, tile, and any accessibility priorities.",
      },
      {
        question: "Do you remodel more than one bathroom at a time?",
        answer:
          "Yes. Multiple bathrooms can be included in one coordinated scope, subject to scheduling and the household’s access needs during construction.",
      },
      {
        question: "Can you help with layout changes?",
        answer:
          "Yes. The feasibility and cost of moving fixtures depend on framing, plumbing, electrical, structural conditions, and permitting requirements.",
      },
      {
        question: "Are financing options available?",
        answer:
          "Financing options may be available for qualified projects. The team can discuss current options after learning about your scope.",
      },
    ],
  },
  {
    slug: "whole-home-remodeling",
    title: "Whole-Home Remodeling in Modesto & Northern California",
    shortTitle: "Whole-Home Remodeling",
    metaDescription:
      "Whole-home remodeling, layout changes, interior renovations, kitchens, bathrooms, flooring, lighting, and coordinated construction across Northern California.",
    eyebrow: "Complete home transformations",
    heroCopy:
      "Bring the full renovation under one coordinated team—from structural and layout changes to kitchens, bathrooms, finishes, and the final walkthrough.",
    image: "/images/kitchen-dark.webp",
    overview: [
      "Whole-home remodeling requires more than managing individual rooms. The project needs one connected plan for design decisions, demolition, structural work, building systems, finishes, inspections, and the sequence in which each area comes back together.",
      "Supreme Pro Builders coordinates major interior renovations for homeowners who want a consistent result and a single point of accountability across the complete construction scope.",
    ],
    included: [
      "Interior layout changes and wall reconfiguration",
      "Kitchen and bathroom remodeling",
      "Flooring, lighting, paint, trim, doors, and finish packages",
      "Electrical, plumbing, HVAC, and trade coordination",
      "Structural work, additions, and indoor-outdoor connections",
      "Permitting, inspections, punch work, and closeout",
    ],
    idealFor: [
      {
        title: "Recently purchased homes",
        copy: "Rework an existing property before move-in or create a phased plan for a complete transformation.",
      },
      {
        title: "Long-term owners",
        copy: "Update the home around changing needs, better function, modern finishes, and future use.",
      },
      {
        title: "Connected renovations",
        copy: "Coordinate kitchens, bathrooms, common areas, lighting, flooring, and layout changes in one scope.",
      },
    ],
    process: [
      {
        title: "Property & priorities",
        copy: "We review the home, project goals, major constraints, desired phases, and how the household needs to use the space.",
      },
      {
        title: "Preconstruction",
        copy: "The scope, sequencing, trade coordination, material decisions, and permitting path are organized before the build.",
      },
      {
        title: "Whole-home execution",
        copy: "Construction moves through demolition, rough work, inspections, installation, and finishes with connected oversight.",
      },
      {
        title: "Closeout",
        copy: "Final details, punch work, systems review, and the owner walkthrough complete the project.",
      },
    ],
    faqs: [
      {
        question: "Can a whole-home remodel be completed in phases?",
        answer:
          "Often, yes. Phasing depends on the scope, permitting path, trade sequence, budget, and whether the home needs to remain occupied.",
      },
      {
        question: "Do you coordinate kitchens and bathrooms within the same project?",
        answer:
          "Yes. Kitchens, bathrooms, flooring, lighting, interior layout changes, and finish work can be combined into one coordinated renovation.",
      },
      {
        question: "Can you manage structural changes?",
        answer:
          "Structural changes can be included when supported by the necessary plans, engineering, permits, and site conditions.",
      },
      {
        question: "Where do you provide whole-home remodeling?",
        answer:
          "Supreme Pro Builders serves Modesto and communities throughout the Central Valley, Sacramento region, and Bay Area depending on project fit.",
      },
    ],
  },
  {
    slug: "adus-home-additions",
    title: "ADU & Home Addition Contractor in Northern California",
    shortTitle: "ADUs & Home Additions",
    metaDescription:
      "Plan an ADU, room addition, in-law suite, or home expansion with a licensed general contractor serving Modesto and Northern California.",
    eyebrow: "More room. More possibilities.",
    heroCopy:
      "Expand the way your property works with an ADU, room addition, primary-suite expansion, or connected home improvement.",
    image: "/images/kitchen-1.webp",
    overview: [
      "Adding square footage affects the existing property, building systems, site access, structure, utilities, and permit path. Those pieces need to be evaluated together before construction begins.",
      "Supreme Pro Builders coordinates additions and ADU projects from preconstruction and permitting through the build, inspections, finish work, and final walkthrough.",
    ],
    included: [
      "Detached and attached ADU construction",
      "Garage conversions and in-law suites",
      "Bedroom, bathroom, living-room, and primary-suite additions",
      "Kitchenettes, full kitchens, and utility coordination",
      "Foundation, framing, roofing, windows, doors, and interiors",
      "Permitting, inspections, site coordination, and closeout",
    ],
    idealFor: [
      {
        title: "Multigenerational living",
        copy: "Create a more independent space for family while keeping loved ones close to the main home.",
      },
      {
        title: "More functional space",
        copy: "Add bedrooms, bathrooms, offices, living areas, or a larger primary suite.",
      },
      {
        title: "Property potential",
        copy: "Evaluate whether an ADU or conversion can make better use of the existing lot and structures.",
      },
    ],
    process: [
      {
        title: "Feasibility review",
        copy: "We discuss the intended use and review the property, access, utilities, existing conditions, and likely approval path.",
      },
      {
        title: "Plans & preconstruction",
        copy: "The project team coordinates scope, plans, engineering, permitting, trade requirements, and construction sequencing.",
      },
      {
        title: "Build & inspections",
        copy: "Site work, structure, building systems, envelope, interiors, and required inspections are coordinated through completion.",
      },
      {
        title: "Finish & walkthrough",
        copy: "Punch work, final details, closeout, and the owner walkthrough prepare the new space for use.",
      },
    ],
    faqs: [
      {
        question: "Do you build both attached and detached ADUs?",
        answer:
          "Yes. Project feasibility depends on the property, zoning and building requirements, utilities, access, plans, and the intended use.",
      },
      {
        question: "Can you convert an existing garage?",
        answer:
          "Garage conversions may be possible. The structure, foundation, ceiling height, utilities, parking requirements, and local approval path must be reviewed.",
      },
      {
        question: "Do you handle permitting?",
        answer:
          "Supreme Pro Builders can coordinate permitting and inspections as part of the approved construction scope.",
      },
      {
        question: "Can an addition include a kitchen and bathroom?",
        answer:
          "Yes. Plumbing, electrical, ventilation, structure, utilities, and permitting would be evaluated as part of the complete scope.",
      },
    ],
  },
  {
    slug: "tenant-improvements",
    title: "Commercial Tenant Improvement Contractor in Northern California",
    shortTitle: "Tenant Improvements",
    metaDescription:
      "Commercial tenant improvements, office renovations, retail build-outs, restaurant construction, medical office improvements, drywall, glazing, and demolition.",
    eyebrow: "Commercial construction",
    heroCopy:
      "Move a commercial space from existing conditions to business-ready with one general contractor coordinating demolition, interiors, glazing, building systems, inspections, and closeout.",
    image: "/images/kitchen-12.webp",
    overview: [
      "A tenant improvement project has to connect the needs of the business with the realities of the existing building, lease requirements, property management, permitting, trades, schedule, and turnover.",
      "Supreme Pro Builders supports owners, tenants, developers, and property teams with focused build-outs and complete interior transformations across Northern California.",
    ],
    included: [
      "Office, retail, restaurant, medical, and service-space build-outs",
      "Selective demolition and existing-condition preparation",
      "Framing, drywall, ceilings, insulation, doors, and finishes",
      "Storefront, interior glazing, glass doors, and openings",
      "MEP and specialty-trade coordination",
      "Permitting, inspections, punch work, turnover, and closeout",
    ],
    idealFor: [
      {
        title: "New tenants",
        copy: "Transform a vacant or second-generation space around operations, customers, staff, and brand requirements.",
      },
      {
        title: "Occupied businesses",
        copy: "Plan improvements around access, safety, phasing, and the realities of ongoing operations when feasible.",
      },
      {
        title: "Owners & developers",
        copy: "Prepare suites for leasing, reconfigure interiors, or coordinate multiple construction trades under one contractor.",
      },
    ],
    process: [
      {
        title: "Existing conditions",
        copy: "We review the space, available documents, operational needs, landlord requirements, access, and the intended turnover condition.",
      },
      {
        title: "Preconstruction",
        copy: "Scope, permitting, long-lead decisions, trade coordination, sequencing, and schedule priorities are organized.",
      },
      {
        title: "Construction",
        copy: "Demolition, rough work, inspections, interiors, glazing, finishes, and specialty scopes are coordinated through the build.",
      },
      {
        title: "Turnover & closeout",
        copy: "Punch work, final inspections, owner or tenant walkthroughs, and closeout complete the space.",
      },
    ],
    faqs: [
      {
        question: "What types of tenant improvements do you handle?",
        answer:
          "Projects may include offices, retail, restaurants, medical offices, service businesses, warehouses, industrial spaces, and other commercial interiors.",
      },
      {
        question: "Can you work with a landlord or property manager?",
        answer:
          "Yes. The project can be coordinated with owners, developers, tenants, property management teams, and the applicable approval and inspection authorities.",
      },
      {
        question: "Do you handle demolition, drywall, and glazing?",
        answer:
          "Yes. Selective demolition, framing, drywall, ceilings, storefronts, glass, doors, finishes, and related scopes can be included in a coordinated build.",
      },
      {
        question: "Can you help from permitting through final walkthrough?",
        answer:
          "Yes. Supreme Pro Builders can coordinate preconstruction, permitting, construction, inspections, punch work, turnover, and closeout.",
      },
    ],
  },
  {
    slug: "commercial-construction",
    title: "Commercial General Contractor in Northern California",
    shortTitle: "Commercial Construction",
    metaDescription:
      "Commercial general contractor for ground-up construction, tenant improvements, offices, retail, restaurants, warehouses, drywall, glazing, and demolition.",
    eyebrow: "For developers, owners & businesses",
    heroCopy:
      "One accountable commercial construction partner for preconstruction, permitting, tenant improvements, ground-up builds, interior trades, and final closeout.",
    image: "/images/kitchen-14.webp",
    overview: [
      "Commercial construction succeeds when information, decisions, trades, schedule, access, safety, inspections, and closeout stay connected from the beginning.",
      "Supreme Pro Builders works with developers, property owners, tenants, and business operators on commercial projects ranging from focused interior scopes to complete ground-up delivery.",
    ],
    included: [
      "Ground-up commercial construction and additions",
      "Tenant improvements and occupied-space renovations",
      "Retail, restaurant, office, medical, warehouse, and industrial work",
      "Demolition, framing, drywall, ceilings, glazing, and finishes",
      "Trade coordination, inspections, punch work, and closeout",
      "Preconstruction and permitting coordination",
    ],
    idealFor: [
      {
        title: "Developers & owners",
        copy: "Coordinate commercial construction with one general contractor accountable for the connected build.",
      },
      {
        title: "Business operators",
        copy: "Translate operational requirements into a practical scope for a new or existing commercial space.",
      },
      {
        title: "Property teams",
        copy: "Complete suite improvements, reconfigurations, repairs, upgrades, and turnover scopes.",
      },
    ],
    process: [
      {
        title: "Project alignment",
        copy: "We review the property, documents, stakeholders, intended use, schedule priorities, access, and desired delivery outcome.",
      },
      {
        title: "Preconstruction",
        copy: "Scope, permitting, sequencing, trade coordination, long-lead decisions, and closeout requirements are organized.",
      },
      {
        title: "Construction management",
        copy: "Field work, trades, inspections, documentation, owner communication, and schedule are coordinated through completion.",
      },
      {
        title: "Closeout",
        copy: "Punch work, final inspections, walkthroughs, and turnover complete the contracted scope.",
      },
    ],
    faqs: [
      {
        question: "What commercial project types do you build?",
        answer:
          "Supreme Pro Builders works on tenant improvements, offices, retail, restaurants, medical spaces, warehouses, industrial improvements, additions, and ground-up commercial construction.",
      },
      {
        question: "Can you provide individual trade scopes?",
        answer:
          "Depending on project fit, commercial scopes may include demolition, framing, drywall, ceilings, glazing, storefronts, doors, interiors, and finish work.",
      },
      {
        question: "Where do you provide commercial construction?",
        answer:
          "Commercial opportunities are considered across the Central Valley, Sacramento region, Bay Area, and other Northern California markets depending on scope and project fit.",
      },
      {
        question: "Do you coordinate permitting and inspections?",
        answer:
          "Yes. Permitting and inspection coordination can be included as part of the approved commercial construction scope.",
      },
    ],
  },
];

export const servicePageBySlug = Object.fromEntries(
  servicePages.map((service) => [service.slug, service]),
);

export const phoneDisplay = "510-725-5120";
export const phoneHref = "tel:+15107255120";
export const contactEmail = "motuma@spbinc.co";

