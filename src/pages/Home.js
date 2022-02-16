import React from 'react';
import HeroSection from "../components/HeroSection";
import ImproveSkils from "../components/ImproveSkils";
import QuoteSection from "../components/QuoteSection";
import ChiefsSection from "../components/ChiefsSection";

export default function Home() {
    return (
        <div>
            <HeroSection />
            <ImproveSkils />
            <QuoteSection />
            <ChiefsSection />
        </div>
    )
}
