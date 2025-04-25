import React, { useState, useEffect } from 'react';

export default function SearchBar({ search, onSearch }) {
  const [input, setInput] = useState(search);
  useEffect(() => setInput(search), [search]);

  return (
    <div style={{ position: 'relative', marginBottom: 16 }}>
      <input
        data-testid="autocomplete-input"
        type="text"
        placeholder="Search Symptoms, Doctors, Specialists, Clinics "
        value={input}
        onChange={e => { setInput(e.target.value); onSearch(e.target.value); }}
        onKeyDown={e => { if (e.key === 'Enter') onSearch(input); }}
        style={{ width: '100%', padding: 8, fontSize: 16 }}
      />
    </div>
  );
}