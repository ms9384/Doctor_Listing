import React from 'react';

export default function DoctorCard({ doctor }) {
  return (
    <div data-testid="doctor-card" style={{ display: 'flex', gap: 12, padding: 12, border: '1px solid #ddd', borderRadius: 6, background: '#fff', marginBottom: 12 }}>
      <img
        src={doctor.photo}
        alt={doctor.name}
        style={{ width: 64, height: 64, objectFit: 'cover', borderRadius: '50%' }}
      />
      <div style={{ flex: 1 }}>
        <h5 data-testid="doctor-name" style={{ margin: '0 0 4px' }}>{doctor.name}</h5>
        <p data-testid="doctor-specialty" style={{ margin: '0 0 4px', color: '#555' }}>{doctor.specialities.join(', ')}</p>
        <p data-testid="doctor-experience" style={{ margin: '0 0 4px' }}>{doctor.experience} yrs exp.</p>
        <p data-testid="doctor-fee" style={{ margin: '0 0 4px' }}>₹{doctor.fees}</p>
        <p style={{ margin: '0 0 4px', fontStyle: 'italic', color: '#666' }}>{doctor.intro}</p>
        <p style={{ margin: '0 0 4px' }}>{doctor.clinicName}, {doctor.clinicLocality}</p>
        <p style={{ margin: 0 }}>{doctor.video && 'Video Consult'}               {doctor.clinic && 'In-Clinic'}</p>
      </div>
    </div>
  );
}