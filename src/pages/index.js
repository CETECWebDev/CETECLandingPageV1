// Import the cart component
import React from 'react';
import Cart from '../components/cart';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <div className="container px-5">
      <div className="flex gap-4">
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </div>

      <HeroSection>
        
      </HeroSection>
    </div>
  );
}
