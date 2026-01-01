import Navbar from "@/components/shadcn-studio/blocks/navbar-component-03/navbar-component-03";
import HeroSection from "@/components/shadcn-studio/blocks/hero-section-33/hero-section-33";

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

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <Navbar navigationData={navigationData} hours={businessHours} />

      {/* Main Content */}
      <main className="flex flex-col">
        <HeroSection />
      </main>
    </div>
  );
}
