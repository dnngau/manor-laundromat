import type { Metadata } from "next";
import "./globals.css";
import ScrollRestoration from "@/components/ui/scroll-restoration";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: {
    default: "Manor Laundromat | Laundromat in Lancaster, PA",
    template: "%s | Manor Laundromat Lancaster, PA",
  },
  description:
    "Self-service laundromat in Lancaster, PA. Open daily 6AM–10PM. Large-capacity Dexter washers (30–80 lb), dryers, free Wi-Fi, card & cash payment. 876 Manor Street.",
  alternates: { canonical: "https://www.manor-laundromat.com" },
  openGraph: {
    siteName: "Manor Laundromat",
    locale: "en_US",
    type: "website",
    url: "https://www.manor-laundromat.com",
    title: "Manor Laundromat | Laundromat in Lancaster, PA",
    description:
      "Self-service laundromat in Lancaster, PA. Open daily 6AM–10PM. Large-capacity Dexter washers (30–80 lb), dryers, free Wi-Fi, card & cash payment. 876 Manor Street.",
    images: [
      {
        url: "https://www.manor-laundromat.com/ManorLaundromat_Logo.png",
        alt: "Manor Laundromat logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Manor Laundromat | Laundromat in Lancaster, PA",
    description:
      "Self-service laundromat in Lancaster, PA. Open daily 6AM–10PM. Large-capacity Dexter washers (30–80 lb), dryers, free Wi-Fi, card & cash payment.",
    images: ["https://www.manor-laundromat.com/ManorLaundromat_Logo.png"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Laundry",
  name: "Manor Laundromat",
  image: "https://www.manor-laundromat.com/ManorLaundromat_Logo.png",
  url: "https://www.manor-laundromat.com",
  telephone: "+17179257480",
  address: {
    "@type": "PostalAddress",
    streetAddress: "876 Manor Street",
    addressLocality: "Lancaster",
    addressRegion: "PA",
    postalCode: "17603",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.0301253,
    longitude: -76.3215306,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "06:00",
      closes: "22:00",
    },
  ],
  priceRange: "$$",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "Card Payment", value: true },
    { "@type": "LocationFeatureSpecification", name: "Climate Control", value: true },
  ],
  sameAs: ["https://www.instagram.com/manor_laundromat/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <ScrollRestoration />
        {children}
        <Footer />
      </body>
    </html>
  );
}
