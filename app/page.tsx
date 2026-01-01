import Navbar from "@/components/shadcn-studio/blocks/navbar-component-03/navbar-component-03";

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
      <Navbar navigationData={navigationData} hours={businessHours} />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-3xl font-semibold text-foreground">
          Home Page Content
        </h1>
        <p className="mt-4 text-muted-foreground">
          Replace this section with your homepage content.
        </p>
      </main>
    </div>
  );
}
