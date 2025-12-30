"use client";

import { useState } from "react";
// import { NavLink, useLocation } from "react-router-dom";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import icon from "../../app/favicon.ico";
import {
  Image as ImageIcon,
  LayoutDashboard,
  ChevronDown,
  Crop,
  Scaling,
  FileOutput,
  Palette,
  RotateCcw,
  Type,
  Minimize2,
  Menu,
  X,
  Wand2,
} from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  icon: React.ElementType;
}

interface NavGroup {
  title: string;
  icon: React.ElementType;
  items: NavItem[];
}

const navigation: NavGroup[] = [
  {
    title: "Images",
    icon: ImageIcon,
    items: [
      { title: "Compress Image", href: "/image-compress", icon: Minimize2 },
      { title: "Resize Image", href: "/image-resize", icon: Scaling },
      { title: "Crop Image", href: "/image-crop", icon: Crop },
      { title: "Convert Format", href: "/image-convert", icon: FileOutput },
      // { title: "Remove Background", href: "/remove-background", icon: Wand2 },
      // { title: "Change Background", href: "/change-background", icon: Palette },
      { title: "Rotate / Flip", href: "/rotate-image", icon: RotateCcw },
      { title: "Add Watermark", href: "/image-watermark", icon: Type },
    ],
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const isDashboardActive = pathname === "/";
  const [expandedGroups, setExpandedGroups] = useState<string[]>(["Images", "Videos", "PDFs"]);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleGroup = (title: string) => {
    setExpandedGroups((prev) =>
      prev.includes(title) ? prev.filter((g) => g !== title) : [...prev, title]
    );
  };

  const isGroupActive = (group: NavGroup) =>
    group.items.some((item) => pathname === item.href);

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-4">
        {/* <img src={icon} /> */}
        <Image
          src={icon}
          alt="Compress Image Pro"
          width={32}
          height={32}
        />
        <div className="flex flex-col">
          <span className="text-lg font-bold text-sidebar-foreground">Compress Image Pro</span>
        </div>
      </div>

      {/* Dashboard Link */}
      <div className="p-3">
        <Link href="/" className="block">
          <div
            className={cn(
              "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
              isDashboardActive
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            )}
          >
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
          </div>
        </Link>
      </div>


      {/* Navigation Groups */}
      <nav className="flex-1 space-y-1 overflow-y-auto px-3 pb-4">
        {navigation.map((group) => {
          const isExpanded = expandedGroups.includes(group.title);
          const isActive = isGroupActive(group);

          return (
            <div key={group.title} className="space-y-1">
              <button
                onClick={() => toggleGroup(group.title)}
                className={cn(
                  "flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-sidebar-foreground hover:bg-sidebar-accent"
                )}
              >
                <div className="flex items-center gap-3">
                  <group.icon className="h-5 w-5" />
                  {group.title}
                </div>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    isExpanded ? "rotate-180" : ""
                  )}
                />
              </button>

              <div className="ml-4 space-y-1 animate-fade-in">
                {group.items.map((item) => {
                  const isItemActive =
                    pathname === item.href ||
                    pathname.startsWith(item.href + "/");

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="block"
                    >
                      <div
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm transition-all duration-200",
                          isItemActive
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"
                        )}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.title}
                      </div>
                    </Link>
                  );
                })}

              </div>
              <div className="extra-links">
                <Link href="/blog">Blog</Link>
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms-condition">Terms & Consition</Link>
              </div>
              {/* {isExpanded && (
              )} */}
            </div>

          );
        })}
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="menu-btn fixed left-4 top-4 z-50 lg:hidden"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "mobile-sidebar fixed left-0 top-0 z-40 h-full w-72 border-r border-sidebar-border bg-sidebar transition-transform duration-300 lg:translate-x-0",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <SidebarContent />
      </aside>
    </>
  );
}
