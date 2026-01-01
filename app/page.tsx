import Navbar from "@/components/shadcn-studio/blocks/navbar-component-03/navbar-component-03";
import HeroSection from "@/components/shadcn-studio/blocks/hero-section-33/hero-section-33";
import Gallery from "@/components/shadcn-studio/blocks/gallery-component-05/gallery-component-05";

const businessHours = {
  label: "Open Daily",
  startTime: "08:00",
  endTime: "22:00",
  startLabel: "8:00 AM",
  endLabel: "10:00 PM",
};

const navigationData = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Photos",
    href: "#",
  },
  {
    title: "Services",
    href: "#",
  },
  {
    title: "Machines & Pricing",
    href: "#",
  },
  {
    title: "About Us",
    href: "#",
  },
  {
    title: "Contact",
    href: "#",
  },
];

const galleryImages = [
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-27.png",
    alt: "Laundry interior",
    className: "col-span-2 max-h-60",
  },
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-24.png",
    alt: "Washer row",
    className: "row-span-2 col-span-2",
  },
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-23.png",
    alt: "Dryers",
    className: "col-span-2 max-h-60",
  },
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-26.png",
    alt: "Folding area",
    className: "max-h-60",
  },
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-25.png",
    alt: "Machines detail",
    className: "max-h-60",
  },
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-22.png",
    alt: "Storefront",
    className: "col-span-2 max-h-60",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <Navbar navigationData={navigationData} hours={businessHours} />

      {/* Main Content */}
      <main className="flex flex-col">
        <HeroSection />
        <Gallery galleryImage={galleryImages} />
      </main>
    </div>
  );
}
