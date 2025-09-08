import React, { useState } from 'react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('stays');
  const [searchParams, setSearchParams] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    travelers: 1
  });

  const handleSearchChange = (e) => {
    setSearchParams(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching with:', searchParams);
  };

  const featuredProperties = [
    { id: 1, name: 'The grand resort', location: 'Karinside', price: 548, rating: 4.9, image: 'https://placehold.co/300x200/FF6B6B/FFFFFF?text=Snowy+Resort' },
    { id: 2, name: 'The grand resort', location: 'East Barrett', price: 288, rating: 4.8, image: 'https://placehold.co/300x200/4ECDC4/FFFFFF?text=Beach+Resort' },
    { id: 3, name: 'The grand resort', location: 'Steuberbury', price: 267, rating: 4.8, image: 'https://placehold.co/300x200/45B7D1/FFFFFF?text=Desert+Resort' },
    { id: 4, name: 'The grand resort', location: 'Idaview', price: 288, rating: 4.9, image: 'https://placehold.co/300x200/96CEB4/FFFFFF?text=Mountain+Resort' },
    { id: 5, name: 'The grand resort', location: 'Yasminlurt', price: 267, rating: 4.8, image: 'https://placehold.co/300x200/F7DC6F/000000?text=Desert+Landscape' },
    { id: 6, name: 'The grand resort', location: 'North Edenshire', price: 288, rating: 4.8, image: 'https://placehold.co/300x200/8E44AD/FFFFFF?text=Island+View' },
    { id: 7, name: 'The grand resort', location: 'Archibaldtown', price: 548, rating: 4.9, image: 'https://placehold.co/300x200/E74C3C/FFFFFF?text=Winter+Scene' },
    { id: 8, name: 'The grand resort', location: 'West Gregoria', price: 267, rating: 4.8, image: 'https://placehold.co/300x200/27AE60/FFFFFF?text=Mountain+Hut' }
  ];

  const propertyTypes = [
    { name: 'Nature house', count: 650596, discount: '20% OFF', image: 'https://placehold.co/300x200/FF6B6B/FFFFFF?text=Nature+House' },
    { name: 'Nature house', count: 650596, discount: '20% OFF', image: 'https://placehold.co/300x200/4ECDC4/FFFFFF?text=Nature+House' },
    { name: 'Nature house', count: 650596, discount: 'FROM $230', image: 'https://placehold.co/300x200/45B7D1/FFFFFF?text=Nature+House' },
    { name: 'Nature house', count: 650596, discount: '20% OFF', image: 'https://placehold.co/300x200/96CEB4/FFFFFF?text=Nature+House' }
  ];

  const nearbyPlaces = [
    { name: 'Thompsonbury', distance: '15 minutes drive', image: 'https://placehold.co/60x60/FF6B6B/FFFFFF?text=T' },
    { name: 'Hudstown', distance: '2 hours drive', image: 'https://placehold.co/60x60/4ECDC4/FFFFFF?text=H' },
    { name: 'Lake Marcelle', distance: '15 minutes drive', image: 'https://placehold.co/60x60/45B7D1/FFFFFF?text=L' },
    { name: 'New Keagan', distance: '15 minutes drive', image: 'https://placehold.co/60x60/96CEB4/FFFFFF?text=N' },
    { name: 'MacGyverton', distance: '2 hours drive', image: 'https://placehold.co/60x60/E74C3C/FFFFFF?text=M' },
    { name: 'North Justen', distance: '2 hours drive', image: 'https://placehold.co/60x60/27AE60/FFFFFF?text=N' },
    { name: 'Port Elyseberg', distance: '15 minutes drive', image: 'https://placehold.co/60x60/F7DC6F/000000?text=P' },
    { name: 'Danielmouth', distance: '2 hours drive', image: 'https://placehold.co/60x60/8E44AD/FFFFFF?text=D' },
    { name: 'Russelville', distance: '15 minutes drive', image: 'https://placehold.co/60x60/3498DB/FFFFFF?text=R' }
  ];

  const bestHosts = [
    { name: 'Antone Heller', location: 'Gaylordslide', rating: 4.9, image: 'https://placehold.co/60x60/FF6B6B/FFFFFF?text=A' },
    { name: 'Antone Heller', location: 'Gaylordslide', rating: 4.9, image: 'https://placehold.co/60x60/4ECDC4/FFFFFF?text=A' },
    { name: 'Antone Heller', location: 'Gaylordslide', rating: 4.9, image: 'https://placehold.co/60x60/45B7D1/FFFFFF?text=A' },
    { name: 'Antone Heller', location: 'Gaylordslide', rating: 4.9, image: 'https://placehold.co/60x60/96CEB4/FFFFFF?text=A' }
  ];

  const categories = [
    { name: 'City house', count: 256356, image: 'https://placehold.co/60x60/FF6B6B/FFFFFF?text=C' },
    { name: 'City house', count: 256356, image: 'https://placehold.co/60x60/4ECDC4/FFFFFF?text=C' },
    { name: 'City house', count: 256356, image: 'https://placehold.co/60x60/45B7D1/FFFFFF?text=C' },
    { name: 'City house', count: 256356, image: 'https://placehold.co/60x60/96CEB4/FFFFFF?text=C' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="text-2xl font-bold text-green-600">tripazgo</div>
              </div>
              <nav className="hidden md:ml-6 md:flex space-x-8">
                <a href="#" className="border-b-2 border-transparent hover:border-green-500 text-gray-700 px-1 pt-1 text-sm font-medium transition-colors duration-200">
                  Travelers
                </a>
                <a href="#" className="border-b-2 border-transparent hover:border-green-500 text-gray-700 px-1 pt-1 text-sm font-medium transition-colors duration-200">
                  Support
                </a>
                <a href="#" className="border-b-2 border-transparent hover:border-green-500 text-gray-700 px-1 pt-1 text-sm font-medium transition-colors duration-200">
                  Language
                </a>
                <a href="#" className="border-b-2 border-transparent hover:border-green-500 text-gray-700 px-1 pt-1 text-sm font-medium transition-colors duration-200">
                  List your property
                </a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors duration-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h4l-4 4v-4zM10 12l2 2m-2-2l2-2m-2 2h10m-10 0V7m0 0a3 3 0 013-3h4a3 3 0 013 3v4m-4 0V7m0 0a3 3 0 013-3h4a3 3 0 013 3v4m-4 0V7m0 0a3 3 0 013-3h4a3 3 0 013 3v4" />
                </svg>
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors duration-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <img src="https://placehold.co/32x32/FF6B6B/FFFFFF?text=U" alt="User" className="w-8 h-8 rounded-full" />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none"
              >
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="pt-2 pb-3 space-y-1">
                <a href="#" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-800 hover:bg-gray-100 rounded-md">
                  Travelers
                </a>
                <a href="#" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-800 hover:bg-gray-100 rounded-md">
                  Support
                </a>
                <a href="#" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-800 hover:bg-gray-100 rounded-md">
                  Language
                </a>
                <a href="#" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-800 hover:bg-gray-100 rounded-md">
                  List your property
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Air, sleep, dream
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Find and book a great experience.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 flex items-center">
                <span>Start your search</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
            <div className="relative">
              <img
                src="https://placehold.co/600x400/FF6B6B/FFFFFF?text=Wooden+Cabin"
                alt="Wooden cabin by the water"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex space-x-1 mb-6">
              <button
                onClick={() => setSelectedTab('stays')}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  selectedTab === 'stays' 
                    ? 'text-green-600 border-b-2 border-green-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Stays
              </button>
              <button
                onClick={() => setSelectedTab('flights')}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  selectedTab === 'flights' 
                    ? 'text-green-600 border-b-2 border-green-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Flights
              </button>
              <button
                onClick={() => setSelectedTab('cars')}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  selectedTab === 'cars' 
                    ? 'text-green-600 border-b-2 border-green-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Cars
              </button>
              <button
                onClick={() => setSelectedTab('things')}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  selectedTab === 'things' 
                    ? 'text-green-600 border-b-2 border-green-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Things to do
              </button>
            </div>

            <form onSubmit={handleSearchSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <input
                    type="text"
                    name="location"
                    value={searchParams.location}
                    onChange={handleSearchChange}
                    placeholder="Where are you going?"
                    className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <input
                    type="date"
                    name="checkIn"
                    value={searchParams.checkIn}
                    onChange={handleSearchChange}
                    placeholder="Add date"
                    className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <input
                    type="date"
                    name="checkOut"
                    value={searchParams.checkOut}
                    onChange={handleSearchChange}
                    placeholder="Add date"
                    className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                  <input
                    type="number"
                    name="travelers"
                    value={searchParams.travelers}
                    onChange={handleSearchChange}
                    placeholder="Add guests"
                    className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Adventure Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let's go on an adventure
            </h2>
            <p className="text-lg text-gray-600">
              Find and book a great experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Luxury resort at the sea</h3>
              <p className="text-sm text-gray-600">9,326 PLACES</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-green-500 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Camping amidst the wild</h3>
              <p className="text-sm text-gray-600">9,326 PLACES</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Luxury resort at the sea</h3>
              <p className="text-sm text-gray-600">9,326 PLACES</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Travel to make memories all around the world
            </h2>
            <p className="text-lg text-gray-600">
              Find trips that fit a flexible lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                    01
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Find trips that fit a flexible lifestyle</h3>
                    <p className="text-gray-600 mt-2">Stacks is a production-ready library of stackable content blocks built in React Native</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">
                    02
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Travel with more confidence</h3>
                    <p className="text-gray-600 mt-2">Stacks is a production-ready library of stackable content blocks built in React Native</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">
                    03
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">See what's really included</h3>
                    <p className="text-gray-600 mt-2">Stacks is a production-ready library of stackable content blocks built in React Native</p>
                  </div>
                </div>
                <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200">
                  Start your search
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://placehold.co/500x600/FF6B6B/FFFFFF?text=Flamingo"
                alt="Flamingo"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <img src="https://placehold.co/32x32/FF6B6B/FFFFFF?text=A" alt="Profile" className="w-8 h-8 rounded-full" />
                  <div>
                    <p className="font-medium text-gray-900">Antone Heller</p>
                    <p className="text-yellow-500 text-sm">★ 4.8</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <img src="https://placehold.co/32x32/FF6B6B/FFFFFF?text=A" alt="Profile" className="w-8 h-8 rounded-full" />
                  <div>
                    <p className="font-medium text-gray-900">Antone Heller</p>
                    <p className="text-yellow-500 text-sm">★ 4.8</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How it works
            </h2>
            <p className="text-lg text-gray-600">
              Keep calm & travel on
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Book & relax</h3>
              <p className="text-gray-600">We realize ideas from simple to complex, everything becomes easy to use.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart checklist</h3>
              <p className="text-gray-600">We realize ideas from simple to complex, everything becomes easy to use.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-indigo-100 rounded-full flex items-center justify-center">
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Save more</h3>
              <p className="text-gray-600">We realize ideas from simple to complex, everything becomes easy to use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Anywhere Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Live anywhere
            </h2>
            <p className="text-lg text-gray-600">
              Keep calm & travel on
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105">
                <img
                  src="https://placehold.co/400x300/FF6B6B/FFFFFF?text=Snowy+Cabin"
                  alt="Snowy cabin"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="font-semibold text-gray-900">Enjoy the great cold</h3>
                <p className="text-gray-600 text-sm">6,879 properties</p>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105">
                <img
                  src="https://placehold.co/400x300/4ECDC4/FFFFFF?text=Suburban+Home"
                  alt="Suburban home"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="font-semibold text-gray-900">Pick up the earliest sunrise</h3>
                <p className="text-gray-600 text-sm">6,879 properties</p>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105">
                <img
                  src="https://placehold.co/400x300/45B7D1/FFFFFF?text=Waterfront+House"
                  alt="Waterfront house"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="font-semibold text-gray-900">Unique stay</h3>
                <p className="text-gray-600 text-sm">6,879 properties</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-white hover:bg-gray-100 text-gray-700 px-6 py-2 rounded-full font-medium border border-gray-300 transition-colors duration-200">
              Load more
            </button>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Go somewhere
            </h2>
            <p className="text-lg text-gray-600">
              Let's go on an adventure
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between mb-8">
            <div className="flex space-x-2 mb-4 md:mb-0">
              <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                Featured
              </button>
              <button className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-300 hover:bg-gray-100 transition-colors duration-200">
                Family-friendly
              </button>
              <button className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-300 hover:bg-gray-100 transition-colors duration-200">
                On sale
              </button>
              <button className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-300 hover:bg-gray-100 transition-colors duration-200">
                Sub nav
              </button>
            </div>
            <select className="bg-white border border-gray-300 rounded-full px-4 py-2 text-sm font-medium">
              <option>Recently added</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                    ${property.price}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{property.name}</h3>
                  <p className="text-gray-600 text-sm">{property.location}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-gray-600 text-sm">Tue, Jul 20 - Fri, Jul 23</p>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm text-gray-700 ml-1">{property.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-white hover:bg-gray-100 text-gray-700 px-6 py-2 rounded-full font-medium border border-gray-300 transition-colors duration-200">
              View all
            </button>
          </div>
        </div>
      </section>

      {/* Travel Memories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Travel to make memories all around the world
              </h2>
              <p className="text-gray-600 mb-6">
                Stacks is a production-ready library of stackable content blocks built in React Native.
              </p>
              <div className="flex items-center space-x-4">
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl"></div>
              <div className="relative">
                <img
                  src="https://placehold.co/400x500/FF6B6B/FFFFFF?text=Mobile+App"
                  alt="Mobile app"
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <img src="https://placehold.co/32x32/FF6B6B/FFFFFF?text=A" alt="Profile" className="w-8 h-8 rounded-full" />
                    <div>
                      <p className="font-medium text-gray-900">Antone Heller</p>
                      <p className="text-yellow-500 text-sm">★ 4.8</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Property Type */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by property type
            </h2>
            <p className="text-lg text-gray-600">
              Let's go on an adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {propertyTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={type.image}
                    alt={type.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">
                    {type.discount}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{type.name}</h3>
                  <p className="text-gray-600 text-sm">{type.count.toLocaleString()} properties</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Nearby */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore nearby
            </h2>
            <p className="text-lg text-gray-600">
              10,789 beautiful places to go
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {nearbyPlaces.map((place, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-center">{place.name}</h3>
                  <p className="text-gray-600 text-sm text-center">{place.distance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Hosts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Best hosts of the month
            </h2>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestHosts.map((host, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src="https://placehold.co/400x300/FF6B6B/FFFFFF?text=Host+Property"
                    alt={host.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-white text-yellow-500 text-xs font-bold px-2 py-1 rounded">
                    ★ {host.rating}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <img
                      src={host.image}
                      alt={host.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{host.name}</h3>
                      <p className="text-gray-600 text-sm">{host.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book a Ticket */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Book a ticket and just leave
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://placehold.co/1200x600/4ECDC4/FFFFFF?text=Beach+Scene"
              alt="Beach scene"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <button className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full font-medium transition-colors duration-200 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Play video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by category
            </h2>
            <p className="text-lg text-gray-600">
              Let's go on an adventure
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 mb-4">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-center">{category.name}</h3>
                  <p className="text-gray-600 text-sm text-center">Small description</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            <button className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-green-400 mb-6">tripazgo</div>
              <p className="text-gray-400 text-sm">
                Copyright © 2021 UI8 LLC. All rights reserved
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">What We Do</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Projects</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Join Our Community</h3>
              <div className="flex items-center space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 rounded-full text-gray-900 bg-white border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Download</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">iOS App</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Android App</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Web Version</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;