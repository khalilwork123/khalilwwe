import { ShoppingCart, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useSearch } from "@/contexts/SearchContext";
import { motion } from "framer-motion";
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export const Header = () => {
  const { getItemCount, toggleCart } = useCart();
  const { query, setQuery } = useSearch();
  const navigate = useNavigate();
  const itemCount = getItemCount();
  const isMobile = useIsMobile();

  const [visible, setVisible] = React.useState(true);
  const lastScrollY = React.useRef(0);
  React.useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY.current && current > 10) setVisible(false);
      else setVisible(true);
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el2 = document.getElementById(id);
        if (el2) el2.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-10 left-0 right-0 z-40 bg-white text-black py-4 px-4 md:px-6 border-b border-gray-200"
    >
      <div className="container mx-auto flex items-center justify-between gap-4 md:gap-6 font-space">
        {/* Left - Logo */}
        <a
          href="/"
          aria-label="Home"
          className="flex items-center"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/";
          }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fceda48cacd9a4a349cddd2c8eeadcb80%2F82c0af6178024f2eaa8410500e19f4e2?format=webp&width=800"
            alt="BURNITDOWNYT"
            className="h-9 md:h-10 w-auto object-contain shrink-0"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 ml-auto">
          <Link
            to="/"
            className="hover:text-gray-600 transition-colors text-sm"
          >
            Home
          </Link>
          <button
            onClick={() => scrollTo("shop")}
            className="hover:text-gray-600 transition-colors text-sm"
          >
            Shop
          </button>
          <a
            href="https://www.instagram.com/burnitdownyt?igsh=MTExOGNwOHJhZWYyYQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors text-sm"
          >
            Latest News
          </a>
          <button
            onClick={() => scrollTo("merch")}
            className="hover:text-gray-600 transition-colors text-sm"
          >
            Merch
          </button>
          <Link
            to="/info"
            className="hover:text-gray-600 transition-colors text-sm"
          >
            Info
          </Link>
          <a
            href="https://drive.google.com/file/d/1NYbtlrr0m_L64UMf7SP6k8dqafEjyvhe/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors text-sm"
          >
            Media Kit
          </a>
          <Link
            to="/contact"
            className="hover:text-gray-600 transition-colors text-sm"
          >
            Contact Us
          </Link>

          <div className="flex items-center gap-3 ml-2">
            <div className="flex items-center gap-2 border rounded-full px-3 py-1">
              <Search className="w-4 h-4" />
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  scrollTo("shop");
                }}
                placeholder="Search products"
                className="outline-none text-sm w-32 md:w-48"
              />
            </div>
            <button
              onClick={toggleCart}
              className="relative cursor-pointer hover:text-gray-600 transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {itemCount}
                </motion.span>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className="flex md:hidden items-center gap-4 ml-auto text-sm">
          <button
            onClick={() => scrollTo("shop")}
            className="hover:text-gray-600 text-center"
          >
            Shop
          </button>
          <a
            href="https://www.instagram.com/burnitdownyt?igsh=MTExOGNwOHJhZWYyYQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 text-center"
          >
            Latest News
          </a>
          <button
            onClick={() => scrollTo("merch")}
            className="hover:text-gray-600 text-center"
          >
            Merch
          </button>
          <a
            href="https://drive.google.com/file/d/1NYbtlrr0m_L64UMf7SP6k8dqafEjyvhe/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 text-center"
          >
            Media Kit
          </a>
          <button
            onClick={toggleCart}
            aria-label="Open cart"
            className="relative"
          >
            <ShoppingCart className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </motion.header>
  );
};
