// pages/index.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Stripe from 'stripe';

export default function Home() {
  const [photos, setPhotos] = useState([]);
  const [filterColor, setFilterColor] = useState('');
  const [filterEvent, setFilterEvent] = useState('');
  const [filterDriver, setFilterDriver] = useState('');

  // Example placeholder gallery data
  useEffect(() => {
    setPhotos([
      {
        id: 1,
        url: '/images/photo1-watermarked.jpg',
        fullUrl: '/images/photo1-full.jpg',
        color: 'red',
        event: 'Daytona',
        driver: 'Smith',
      },
      {
        id: 2,
        url: '/images/photo2-watermarked.jpg',
        fullUrl: '/images/photo2-full.jpg',
        color: 'blue',
        event: 'Daytona',
        driver: 'Jones',
      },
      // Add more photos here
    ]);
  }, []);

  const filteredPhotos = photos.filter(
    (p) =>
      (!filterColor || p.color === filterColor) &&
      (!filterEvent || p.event === filterEvent) &&
      (!filterDriver || p.driver === filterDriver)
  );

  const handleBuy = async (photo) => {
    // Placeholder for Stripe checkout session creation
    alert(`Redirecting to Stripe checkout for Photo ${photo.id}`);
  };

  const handleTagCar = (photo) => {
    const driverName = prompt('Enter your driver name to tag this car:');
    if (driverName) {
      alert(`Photo ${photo.id} tagged to ${driverName}`);
      // TODO: send to backend to store driver tag
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Fractured.Aperture</title>
      </Head>

      <header className="p-4 text-3xl font-bold text-center">
        Fractured.Aperture
      </header>

      <section className="p-4 flex flex-wrap justify-center gap-4">
        {/* Filters */}
        <div className="flex gap-2 flex-wrap justify-center mb-4">
          <input
            type="text"
            placeholder="Filter by color"
            value={filterColor}
            onChange={(e) => setFilterColor(e.target.value)}
            className="px-2 py-1 rounded bg-gray-800 text-white"
          />
          <input
            type="text"
            placeholder="Filter by event"
            value={filterEvent}
            onChange={(e) => setFilterEvent(e.target.value)}
            className="px-2 py-1 rounded bg-gray-800 text-white"
          />
          <input
            type="text"
            placeholder="Filter by driver"
            value={filterDriver}
            onChange={(e) => setFilterDriver(e.target.value)}
            className="px-2 py-1 rounded