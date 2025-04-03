import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Analytics,
  Apps,
  Bell,
  Crm,
  HamburgerMenu,
  Home,
  MainstackLogo,
  Note,
  Revenue,
} from "@/icons";
import { Button } from "../ui/button";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function NavMenu() {
  const [hideMenu, setHideMenu] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() as number;
    if (latest > prev && latest > 200) {
      setHideMenu(true);
    } else {
      setHideMenu(false);
    }
  });
  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-150%" },
      }}
      animate={hideMenu ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="h-[64px] px-[16px] border-2 border-[#FFFFFF] fixed z-30 left-[16px] right-[16px] shadow-[0px_2px_6px_0px_#2D3B430F] flex items-center rounded-[100px] bg-white"
    >
      <nav className="w-full h-full flex justify-between items-center">
        <MainstackLogo />
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <span>
                  <Home />
                </span>
                Home
              </NavigationMenuTrigger>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <span>
                  <Analytics />
                </span>
                Analytics
              </NavigationMenuTrigger>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-primary hover:!bg-primary hover:!text-white text-white">
                <span>
                  <Revenue />
                </span>
                Revenue
              </NavigationMenuTrigger>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <span>
                  <Crm />
                </span>
                CRM
              </NavigationMenuTrigger>
            </NavigationMenuItem>

            <NavigationMenuItem className="!relative">
              <NavigationMenuTrigger className="cursor-pointer">
                <span>
                  <Apps />
                </span>
                Apps
              </NavigationMenuTrigger>
              {/* <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent> */}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="h-[40px] flex items-center">
          <Bell />
          <Note />
          <Button
            className="ml-2 w-[81px] justify-normal gap-3 p-[4px_12px_4px_5px] text-left h-full"
            variant="disabled"
            size={"default"}
          >
            <span className="w-[32px] tracking-[-0.4px] h-[32px] text-white text-sm font-semibold text-center leading-[32px]  bg-primary rounded-full">
              OJ
            </span>
            <HamburgerMenu />
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}
