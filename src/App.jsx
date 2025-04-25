import React from 'react';
import SearchBar from './components/SearchBar';
import FilterPanel from './components/FilterPanel';
import DoctorList from './components/DoctorList';
import useDoctors from './hooks/useDoctors';

export default function App() {
  const { loading, list, filters, updateParams } = useDoctors();

  if (loading) return <div>Loading doctors...</div>;

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <aside style={{ width: 280, padding: 16 }}>
        <FilterPanel current={filters} onChange={updateParams} />
      </aside>
      <main style={{ flex: 1, padding: 16, overflowY: 'auto' }}>
        <SearchBar search={filters.search} onSearch={term => updateParams({ search: term })} />
        <DoctorList doctors={list} />
      </main>
    </div>
  );
}