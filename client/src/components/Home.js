import React from 'react';
import NavBar from './NavBar';
import FilteredEventsList from './FilteredEventsList';

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Welcome to Startup Calendar!</h1>
      <FilteredEventsList />
    </div>
  )
}
