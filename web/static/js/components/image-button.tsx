import React from "react";
import {Image, Link} from "@nextui-org/react";

interface IconBtn {
    href: string;
    imgUrl: string;
    imgWidth: number;
    imgHeight: number;
    imgAlt: string;
    imgRadius : "none" | "sm" | "md" | "lg" | "full";
}

export default function ImageButton({href, imgUrl, imgAlt, imgWidth, imgHeight, imgRadius}: IconBtn) {
    return (
        <Link href={href}>
            <Image
                src={imgUrl}
                alt={imgAlt}
                width={imgWidth}
                height={imgHeight}
                radius={imgRadius}
            />
        </Link>
    )
}
