import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
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

export default function NavMenu() {
  return (
    <header className="h-[64px] px-[16px] w-full border-2 border-[#FFFFFF] shadow-[0px_2px_6px_0px_#2D3B430F] flex items-center rounded-[100px]">
      <nav className="w-full h-full flex justify-between items-center">
        <MainstackLogo />
        <NavigationMenu>
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
    </header>
  );
}
