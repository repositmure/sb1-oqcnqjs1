import React from 'react';
import { Cloud, Sun, CloudRain } from 'lucide-react';

interface WeatherMoodProps {
  weather: string;
  temperature: number;
  mood: string;
}

export default function WeatherMood({ weather, temperature, mood }: WeatherMoodProps) {
  const getWeatherIcon = () => {
    switch (weather.toLowerCase()) {
      case 'cloudy': return Cloud;
      case 'rainy': return CloudRain;
      default: return Sun;
    }
  };
  
  const WeatherIcon = getWeatherIcon();

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <WeatherIcon className="h-8 w-8 text-orange-500 mr-3" />
          <div>
            <div className="text-2xl font-bold text-gray-900">{temperature}°</div>
            <div className="text-sm text-gray-600">{weather}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl">😊</div>
          <div className="text-sm text-gray-600">{mood}</div>
        </div>
      </div>
    </div>
  );
}