"use client"

import type { ComponentProps } from "react"
import {
  Root as NavigationMenuPrimitiveRoot,
  List as NavigationMenuPrimitiveList,
  Item as NavigationMenuPrimitiveItem,
  Content as NavigationMenuPrimitiveContent,
  Trigger as NavigationMenuPrimitiveTrigger,
  Link as NavigationMenuPrimitiveLink,
  Viewport as NavigationMenuPrimitiveViewport,
} from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDownIcon } from "lucide-react"

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: ComponentProps<typeof NavigationMenuPrimitiveRoot> & {
  viewport?: boolean
}) {
  return (
    <NavigationMenuPrimitiveRoot
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={`group/navigation-menu relative flex max-w-max flex-1 items-center justify-center ${
        className || ""
      }`}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitiveRoot>
  )
}

function NavigationMenuList({
  className,
  ...props
}: ComponentProps<typeof NavigationMenuPrimitiveList>) {
  return (
    <NavigationMenuPrimitiveList
      data-slot="navigation-menu-list"
      className={`group flex flex-1 list-none items-center justify-center gap-1 ${
        className || ""
      }`}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: ComponentProps<typeof NavigationMenuPrimitiveItem>) {
  return (
    <NavigationMenuPrimitiveItem
      data-slot="navigation-menu-item"
      className={`relative ${className || ""}`}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-primary hover:text-background focus:bg-primary focus:text-background disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-primary data-[state=open]:text-background data-[state=open]:focus:bg-primary data-[state=open]:bg-primary/50 focus-visible:ring-primary/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof NavigationMenuPrimitiveTrigger>) {
  return (
    <NavigationMenuPrimitiveTrigger
      data-slot="navigation-menu-trigger"
      className={`${navigationMenuTriggerStyle()} group ${className || ""}`}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon
        className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitiveTrigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: ComponentProps<typeof NavigationMenuPrimitiveContent>) {
  return (
    <NavigationMenuPrimitiveContent
      data-slot="navigation-menu-content"
      className={`data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto group-data-[viewport=false]/navigation-menu:bg-background group-data-[viewport=false]/navigation-menu:text-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:border-foreground/20 group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 *:data-[slot=navigation-menu-link]:focus:ring-0 *:data-[slot=navigation-menu-link]:focus:outline-none ${
        className || ""
      }`}
      {...props}
    />
  )
}

function NavigationMenuViewport({
  className,
  ...props
}: ComponentProps<typeof NavigationMenuPrimitiveViewport>) {
  return (
    <div
      className={
        "absolute top-full left-0 isolate z-50 flex justify-center"
      }
    >
      <NavigationMenuPrimitiveViewport
        data-slot="navigation-menu-viewport"
        className={`origin-top-center bg-background text-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-foreground/20 shadow md:w-[var(--radix-navigation-menu-viewport-width)] ${
          className || ""
        }`}
        {...props}
      />
    </div>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: ComponentProps<typeof NavigationMenuPrimitiveLink>) {
  return (
    <NavigationMenuPrimitiveLink
      data-slot="navigation-menu-link"
      className={`data-[active=true]:focus:bg-primary data-[active=true]:hover:bg-primary data-[active=true]:bg-primary/50 data-[active=true]:text-background hover:bg-primary hover:text-background focus:bg-primary focus:text-background focus-visible:ring-primary/50 [&_svg:not([class*='text-'])]:text-foreground [&_svg:not([class*='text-'])]:opacity-70 flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4 ${
        className || ""
      }`}
      {...props}
    />
  )
}

export default function NavMenu() {
  return(
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}