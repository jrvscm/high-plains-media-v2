import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { Button, buttonVariants } from "./ui/button";

const CALENDLY_URL = "https://calendly.com/jarvis-highplainsmedia";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "#startup", label: "Startup package" },
  { href: "#solutions", label: "Solutions" },
  { href: "#clients", label: "Clients" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleAnchorClick = (href: string) => {
    if (href.startsWith("#")) {
      navigate(`/${href}`);
    }
  };

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background relative">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between items-center gap-2">
          <NavigationMenuItem className="font-bold flex shrink-0">
            <Link
              to="/"
              className="ml-2 font-bold text-xl flex items-center space-x-2"
            >
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

          <span className="flex md:hidden items-center gap-1">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="flex md:hidden h-5 w-5">
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>
              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    High Plains Media
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-stretch gap-2 mt-4">
                  {routeList.map(({ href, label }) => (
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
                  ))}
                  <Button
                    asChild
                    className="w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <a href={CALENDLY_URL} target="_blank" rel="noreferrer noopener">
                      Discovery call
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          <nav className="hidden md:flex flex-wrap items-center justify-end gap-1 lg:gap-2 flex-1 min-w-0">
            {routeList.map(({ href, label }) => (
              <button
                key={label}
                onClick={() => handleAnchorClick(href)}
                className={`text-[15px] lg:text-[17px] ${buttonVariants({
                  variant: "ghost",
                })} px-2 lg:px-3`}
              >
                {label}
              </button>
            ))}
            <Button asChild size="sm" className="ml-1 shrink-0">
              <a href={CALENDLY_URL} target="_blank" rel="noreferrer noopener">
                Discovery call
              </a>
            </Button>
            <ModeToggle />
          </nav>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
