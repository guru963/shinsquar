export const SITE_NAME = "Shin Square";
export const SITE_URL = "https://shinsquare.com";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;

export const ROUTE_META = {
  "/": {
    title: "Your neighborhood, but smarter",
    description:
      "Discover local stores, verify household workers, and get the best local deals at Shankar Nagar, Durg, Chhattisgarh with ShinSquare.",
  },
  "/regular-shops": {
    title: "Local Business & Shops Directory",
    description:
      "Browse the list of verified local stores, shops, and services in Shankar Nagar, Durg, Chhattisgarh. Get the best rates and verify deals.",
  },
  "/experience-based": {
    title: "Experience Services & Salons",
    description:
      "Book appointments and discover trusted salons, fitness gyms, spas, and wellness centers in Shankar Nagar, Durg, Chhattisgarh.",
  },
  "/household-works": {
    title: "Household Workers & Technicians",
    description:
      "Hire verified local plumbers, electricians, carpenters, and creative professionals in Shankar Nagar, Durg, Chhattisgarh. Trusted local expertise.",
  },
  "/coming-soon": {
    title: "Hyperlocal Power Coming Soon",
    description:
      "ShinSquare is launching more hyperlocal tools soon. Join our community and get notified as new neighborhood services go live.",
  },
} as const;

export const SHOP_DETAIL_ROUTES = [
  "/regular-shops/motabhai",
  "/regular-shops/classic",
  "/regular-shops/electronics",
];

export const WORKER_DETAIL_ROUTES = [
  "/household-workers/rakesh-kumar",
  "/household-workers/suresh-singh",
  "/household-workers/amit-sharma",
];

export const ALL_ROUTES = [
  ...Object.keys(ROUTE_META),
  ...SHOP_DETAIL_ROUTES,
  ...WORKER_DETAIL_ROUTES,
];
