import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/style.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/home";
import {NextUIProvider} from "@nextui-org/react";
import NavbarHeader from "./components/navbar";
import Hub from "./pages/hub";
import AboutMe from "./pages/about-me";
import CompareCsv from "./pages/compare-csv";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/hub",
        element: <Hub/>
    },
    {
        path: "/compare-csv",
        element: <CompareCsv/>
    },
    {
        path: "/about-me",
        element: <AboutMe/>
    },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <NextUIProvider>
            <NavbarHeader/>
            <RouterProvider router={router} />
        </NextUIProvider>
    );
}
