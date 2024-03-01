import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

import "./Navbar.css";
import Settings from "../Settings";
import About from "@/components/About";

export default function NavBar() {
  const menuItems = ["About"];

  return (
    <Navbar disableAnimation isBordered className="important:m-0">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand className="font-bold text-inherit logo">
          Letter&apos;s Lab
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand className="font-bold text-inherit logo">
          Letter&apos;s Lab
        </NavbarBrand>
        <NavbarItem isActive>
          <About />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <Settings />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={`${item}`}>
            <About />
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
