import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function HeroCarousel() {
  return (
    <div className="relative bg-gradient-to-br from-orange-500 to-orange-600">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
          <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <div className="hidden sm:mb-10 sm:flex">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-orange-100 ring-1 ring-orange-400/20 hover:ring-orange-400/40">
                  <Sparkles className="inline-block w-4 h-4 mr-2" />
                  New Spring Events Available. 
                  <a href="#" className="font-semibold text-white">
                    <span className="absolute inset-0" aria-hidden="true"></span>
                    Check them out <ArrowRight className="inline-block w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
                Your Vibe,<br />Your Tribe
              </h1>
              <p className="mt-6 text-lg leading-8 text-orange-100">
                Join the coolest college community. Find your squad, hit up epic events, 
                and make memories that actually matter. No cap!
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a href="/events" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-orange-600 
                                        shadow-sm hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600">
                  Find Your Vibe
                </a>
                <a href="/clubs" className="text-sm font-semibold leading-6 text-white group">
                  Join a Squad 
                  <ArrowRight className="inline-block w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 opacity-90" />
      </div>
    </div>
  );
}