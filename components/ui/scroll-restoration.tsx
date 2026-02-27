"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect } from "react";

const ScrollRestoration = () => {
  const pathname = usePathname();

  const scrollToElementWithOffset = useCallback((element: HTMLElement) => {
    const stickyHeader = document.querySelector("header.sticky") as HTMLElement | null;
    const headerOffset = stickyHeader ? stickyHeader.getBoundingClientRect().height + 16 : 0;
    const targetTop = element.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top: Math.max(targetTop, 0), left: 0, behavior: "auto" });
  }, []);

  const handleLocationScroll = useCallback(() => {
    const hash = decodeURIComponent(window.location.hash.replace("#", ""));

    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    // Keep machine/pricing navigation anchored to the section heading.
    if (hash === "machines" || hash === "pricing" || hash === "machines-pricing-heading") {
      const machinesPricingHeading = document.getElementById("machines-pricing-heading");
      if (machinesPricingHeading) {
        scrollToElementWithOffset(machinesPricingHeading);
        return;
      }
    }

    const target = document.getElementById(hash);
    if (target) {
      scrollToElementWithOffset(target);
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [scrollToElementWithOffset]);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const rafId = window.requestAnimationFrame(handleLocationScroll);
    return () => window.cancelAnimationFrame(rafId);
  }, [handleLocationScroll, pathname]);

  useEffect(() => {
    const onHashChange = () => {
      window.requestAnimationFrame(handleLocationScroll);
    };
    const onPopState = () => {
      window.requestAnimationFrame(handleLocationScroll);
    };

    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("popstate", onPopState);
    };
  }, [handleLocationScroll]);

  return null;
};

export default ScrollRestoration;
