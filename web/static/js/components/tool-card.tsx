import React from "react";
import {Card, CardBody, CardHeader, Divider, Image, Link} from "@nextui-org/react";

interface ToolCardProps {
    name: string;
    subTitle?: string;
    href: string;
    description: string;
    imgUrl: string;
    imgAlt: string;
}

export default function ToolCard({name, subTitle, href, description, imgUrl, imgAlt} : ToolCardProps) {
    return (
        <Card className="max-w-[400px] min-w-[250px] min-h-[200px]">
            <CardHeader className="flex gap-3">
                <Link href={href}>
                    <Image
                        alt={imgAlt}
                        width={40}
                        height={40}
                        radius="sm"
                        src={imgUrl}
                    />
                </Link>

                <div className="flex flex-col">
                    <p className="text-md">{name}</p>
                    <p className="text-small text-default-500">{subTitle}</p>
                </div>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p>{description}</p>
            </CardBody>
        </Card>
    );
}
