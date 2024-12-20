import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "./ui/button";

interface RouteProps {
  href: string;
  label: string;
  isRouterLink?: boolean;
}

const routeList: RouteProps[] = [
  { href: "#about", label: "About" },
  { href: "#howItWorks", label: "How it Works" },
  { href: "#services", label: "Services" },
  { href: "#faq", label: "FAQ" },
  { href: "/quiz", label: "Get Started", isRouterLink: true },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (href: string) => {
    if (href.startsWith("#")) {
      // Ensure navigation to the homepage with the hash
      navigate(`/${href}`);
    }
  };

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background relative">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
          {/* Logo */}
          <NavigationMenuItem className="font-bold flex">
            <Link to="/" className="ml-2 font-bold text-xl flex items-center space-x-2">
              <picture className="block h-6 w-6 flex-shrink-0">
                <source
                  srcSet="/high-plains-favicon-light.svg"
                  media="(prefers-color-scheme: dark)"
                />
                <img
                  className="h-full w-full object-contain"
                  src="/high-plains-favicon-dark.svg"
                  alt="High Plains Media Logo"
                />
              </picture>
            </Link>
          </NavigationMenuItem>

          {/* Mobile Menu */}
          <span className="flex md:hidden">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="flex md:hidden h-5 w-5">
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>
              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">High Plains Media</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label, isRouterLink }) =>
                    isRouterLink ? (
                      <Link
                        key={label}
                        to={href}
                        onClick={() => setIsOpen(false)}
                        className={buttonVariants({ variant: "ghost" })}
                      >
                        {label}
                      </Link>
                    ) : (
                      <button
                        key={label}
                        onClick={() => {
                          setIsOpen(false);
                          handleAnchorClick(href);
                        }}
                        className={buttonVariants({ variant: "ghost" })}
                      >
                        {label}
                      </button>
                    )
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-2">
            {routeList.map(({ href, label, isRouterLink }) =>
              isRouterLink ? (
                <Link
                  key={label}
                  to={href}
                  className={`text-[17px] ${buttonVariants({ variant: "ghost" })}`}
                >
                  {label}
                </Link>
              ) : (
                <button
                  key={label}
                  onClick={() => handleAnchorClick(href)}
                  className={`text-[17px] ${buttonVariants({ variant: "ghost" })}`}
                >
                  {label}
                </button>
              )
            )}
          </nav>

          <div className="hidden md:flex gap-2">
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
