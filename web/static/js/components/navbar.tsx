import * as React from "react";
import {Link, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import Logo from "../../icons/logo";
import IconButton from "./icon-button";

export default function NavbarHeader() {
    return (
        <Navbar isBordered>
            <NavbarBrand>
                <IconButton children={<Logo width="50px" height="50px"/>}  href={"/"}/>
                <p className="font-bold text-inherit">UtilityHub</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link isBlock color="foreground" href="hub">
                        Hub
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link isBlock color="foreground" href="about-me">
                        About me
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
