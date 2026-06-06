import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const currentScroll = window.scrollY;
    window.scrollTo({
        top: 0,
        behavior: currentScroll > 300 ? "smooth" : "instant",
    });
  }, [pathname]);

  return null;
}