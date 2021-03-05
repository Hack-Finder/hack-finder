import React from 'react';
import NavBar from './NavBar';
import FilteredEventsList from './FilteredEventsList';

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto p-6">
        <h1 className="font-bold text-3xl">Find the best startup events to pitch your startup, win great prices & more.</h1>
        <FilteredEventsList />
      </div>
    </div>
  )
}
