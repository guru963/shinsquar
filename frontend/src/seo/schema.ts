import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "./routes";

export const buildAbsoluteUrl = (path?: string) => {
  if (!path) return SITE_URL;
  if (path.startsWith("http")) return path;
  if (path.startsWith("/")) return `${SITE_URL}${path}`;
  return `${SITE_URL}/${path}`;
};

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ShinSquare",
  image: DEFAULT_OG_IMAGE,
  "@id": `${SITE_URL}/#organization`,
  url: SITE_URL,
  telephone: "+917587315025",
  email: "contact@shinsquare.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shankar Nagar",
    addressLocality: "Durg",
    addressRegion: "Chhattisgarh",
    postalCode: "491001",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61589310645378",
    "https://www.instagram.com/shin_square_/",
    "http://www.linkedin.com/in/shin-square-48a93a40a",
  ],
};

export const buildItemListSchema = (
  listName: string,
  items: Array<{ name: string; url?: string; itemType?: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    itemListElement: items.map((item, index) => {
      const listItem: Record<string, unknown> = {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": item.itemType ?? "Thing",
          name: item.name,
        },
      };

      if (item.url) {
        (listItem.item as Record<string, unknown>).url = item.url;
      }

      return listItem;
    }),
  };
};

export const buildShopSchema = (shop: {
  id: string;
  name: string;
  phone?: string;
  fullAddress?: string;
  location?: string;
  image?: string;
}) => {
  const url = buildAbsoluteUrl(`/regular-shops/${shop.id}`);
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: shop.name,
    url,
    image: buildAbsoluteUrl(shop.image ?? DEFAULT_OG_IMAGE),
    telephone: shop.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: shop.fullAddress ?? shop.location ?? "Durg",
      addressLocality: "Durg",
      addressRegion: "Chhattisgarh",
      addressCountry: "IN",
    },
    areaServed: "Durg, Chhattisgarh",
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
  };
};

export const buildServiceSchema = (worker: {
  id: string;
  name: string;
  role: string;
  phone?: string;
  image?: string;
}) => {
  const url = buildAbsoluteUrl(`/household-workers/${worker.id}`);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${worker.role} services by ${worker.name}`,
    serviceType: worker.role,
    url,
    image: buildAbsoluteUrl(worker.image ?? DEFAULT_OG_IMAGE),
    provider: {
      "@type": "Person",
      name: worker.name,
      telephone: worker.phone,
    },
    areaServed: "Durg, Chhattisgarh",
  };
};
