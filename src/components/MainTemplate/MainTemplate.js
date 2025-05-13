import React from 'react'
import Card from '../Card/Card'
import HeroSection from '../HeroSection/HeroSection'

export default function MainTemplate() {
    return (

        <div className="container px-5">

            
            <div className="flex gap-4">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            <HeroSection />

        </div>
    )
}
