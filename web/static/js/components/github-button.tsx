import React from "react";
import GithubLogo from "../../icons/github";
import "../../css/githubButton.css"
import {Link} from "@nextui-org/react";

const githubUrl = "https://github.com/NINGNINGSHI/Utilityhub";

export default function GithubButton() {
    return (
        <Link href={githubUrl} target="_blank">
            <button className="button">
                <GithubLogo/>
                <p className="text">Github</p>
            </button>
        </Link>
    );
}
