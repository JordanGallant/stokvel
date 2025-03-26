"use client"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";



export default function NavMenu() {
  return (
    <Navbar>
      <NavbarBrand>
    
        <p className="font-bold text-white">DigiStok</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem >
          <Link color="foreground" href="" className='text-white'>
            About
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="#" className='text-white'>
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="#" className='text-white'>
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem className="text-white">
          <Link color="foreground" href="#" className='text-white'>
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="text-white">
      </NavbarContent>
    </Navbar>
  );
}
