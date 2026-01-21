"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navbar() {
    const isMobile = useIsMobile()
  return (
    <NavigationMenu viewport={isMobile} className="text-white">
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Accueil</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/apropos">À propos</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="relative">
          <NavigationMenuTrigger className="text-white">
            Programmes
          </NavigationMenuTrigger>

          {/* ⚠️ Ici, la largeur visible est souvent contrôlée par le Viewport interne shadcn,
              donc on met surtout du style, et on force z-index valid */}
          <NavigationMenuContent
            className="
              bg-[#08233E] 
              shadow-2xl rounded-xl
              p-3
              z-[999]
            "
          >
            <ul className="grid gap-2 w-[20rem]">
              <ListItem
                href="/programmes/tech-club"
                title="ABM Tech Club"
                desc="Coding & robotique dans les écoles secondaires."
              />
              <ListItem
                href="/programmes/elite-internationale"
                title="ABM Élite Internationale"
                desc="Admissions, dossier & intégration à l’international."
              />
              <ListItem
                href="/programmes/un-eleve-un-ordinateur"
                title="Un Élève, Un Ordinateur"
                desc="Accès à des laptops abordables et paiement flexible."
              />
              <ListItem
                href="/programmes/education-award"
                title="ABM Education Award"
                desc="Reconnaissance et valorisation de l’excellence."
              />
              <ListItem
                href="/programmes/bourse-mukwege"
                title="Bourse Denis Mukwege"
                desc="Bourse de persévérance & d’engagement."
              />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Apprendre</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  href,
  desc,
}: {
  title: string;
  href: string;
  desc: string;
}) {
  return (
    <li className="rounded-lg">
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="
            block rounded-lg p-3
            hover:bg-white/10 transition-colors
          "
        >
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none text-white font-semibold">{title}</div>
            <div className="text-white/70 text-xs leading-snug line-clamp-2">
              {desc}
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
