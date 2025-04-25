import React from 'react';
const SPECIALITIES = [
  'General Physician','Dentist','Dermatologist','Paediatrician',
  'Gynaecologist','ENT','Diabetologist','Cardiologist','Physiotherapist',
  'Endocrinologist','Orthopaedic','Ophthalmologist','Gastroenterologist',
  'Pulmonologist','Psychiatrist','Urologist','Dietitian/Nutritionist',
  'Psychologist','Sexologist','Nephrologist','Neurologist','Oncologist','Ayurveda','Homeopath'
];

export default function FilterPanel({ current, onChange }) {
  return (
    <div>
      <h4 data-testid="filter-header-moc">Consultation Mode</h4>
      <label>
        <input type="radio" name="mode" data-testid="filter-video-consult"
          checked={current.mode === 'video'} onChange={() => onChange({ mode: 'video' })} /> Video Consult
      </label>
      <label>
        <input type="radio" name="mode" data-testid="filter-in-clinic"
          checked={current.mode === 'clinic'} onChange={() => onChange({ mode: 'clinic' })} /> In Clinic
      </label>
      <label>
        <input type="radio" name="mode" data-testid="filter-all"
          checked={current.mode === 'all'} onChange={() => onChange({ mode: 'all' })} /> All
      </label>
      <h4 data-testid="filter-header-speciality">Speciality</h4>
      <div style={{ maxHeight: 200, overflowY: 'auto' }}>
        {SPECIALITIES.map(spec => (
          <label key={spec}>
            <input type="checkbox"
              data-testid={`filter-specialty-${spec.replace(/\//g, '-')}`}
              checked={current.specialties.includes(spec)}
              onChange={() => {
                const set = new Set(current.specialties);
                set.has(spec) ? set.delete(spec) : set.add(spec);
                onChange({ specialties: Array.from(set) });
              }} /> {spec}
          </label>
        ))}
      </div>

      <h4 data-testid="filter-header-sort">Sort</h4>
      <button data-testid="sort-fees" onClick={() => onChange({ sort: 'fees' })}>
        Fees: Low → High
      </button>
      <button data-testid="sort-experience" onClick={() => onChange({ sort: 'experience' })} style={{ marginTop: 8 }}>
        Experience: High → Low
      </button>
    </div>
  );
}