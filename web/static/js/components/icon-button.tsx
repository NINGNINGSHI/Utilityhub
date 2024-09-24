import React, {ReactNode} from "react";
import {Link} from "@nextui-org/react";

interface IconBtnProps {
    href: string;
    children: ReactNode;
}

export default function IconButton({href, children}: IconBtnProps) {
    return (
        <Link href={href}>
            {children}
        </Link>
    )
}
