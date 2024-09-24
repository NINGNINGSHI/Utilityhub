import React from "react";
import ToolCard from "../components/tool-card";
import compareCSVLogo from "../../images/compareCSV.png";

const toolCardList = [
    {
        name: "Compare CSV",
        href: "compare-csv",
        imgUrl: compareCSVLogo,
        imgAlt: "Compare CSV logo",
        description: "Description"
    },
    {
        name: "Compare CSV",
        href: "compare-csv",
        imgUrl: compareCSVLogo,
        imgAlt: "Compare CSV logo",
        description: "Description"
    },
    {
        name: "Compare CSV",
        href: "compare-csv",
        imgUrl: compareCSVLogo,
        imgAlt: "Compare CSV logo",
        description: "Description"
    },
    {
        name: "Compare CSV",
        href: "compare-csv",
        imgUrl: compareCSVLogo,
        imgAlt: "Compare CSV logo",
        description: "Description"
    }
]

export default function Hub() {
    return (
        <div className={"page-body flex justify-center items-center"}>
            <div className={"gap-40 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1"}>
                {toolCardList.map((item, index) => (
                    <ToolCard
                        key={index}
                        name={item.name}
                        href={item.href}
                        imgUrl={item.imgUrl.toString()}
                        imgAlt={item.imgAlt}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
}
