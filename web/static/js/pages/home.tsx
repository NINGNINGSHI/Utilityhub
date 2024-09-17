import {Button, Link} from "@nextui-org/react";
import React from "react";

export default function Home() {
    return (
        <div className={"flex flex-col justify-center items-center page-body"}>
            <div>
                <h1 className="text-6xl font-bold">
                    Welcome to UtilityHub
                </h1>
            </div>
            <div className={"mt-10"}>
                <Button
                    href="hub"
                    as={Link}
                    disableRipple
                    color="primary"
                    variant="bordered"
                    className={"relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0\""}
                >
                    Start !
                </Button>
            </div>
        </div>
    );
}
