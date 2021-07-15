import React from "react";
import Brands from "../../components/Landing/Home/Brands";
import Feature from "../../components/Landing/Home/Feature";
import Hero from "../../components/Landing/Home/Hero";
import Manage from "../../components/Landing/Home/Manage";
import Plans from "../../components/Landing/Home/Plans";
import Service from "../../components/Landing/Home/Service";

const Home = () => {
    return (
        <>
            <Hero />

            <Brands />

            <Feature />

            <Manage />

            <Plans />

            <Service />
        </>
    );
};

export default Home;
