import React from 'react';
import DoctorCard from './DoctorCard';

export default function DoctorList({ doctors }) {
  return (
    <div>
      {doctors.map(doc => <DoctorCard key={doc.id} doctor={doc} />)}
    </div>
  );
}