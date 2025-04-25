import { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { parseQuery, stringifyQuery } from '../utils/urlUtils';

const API_URL = 'https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json';

export default function useDoctors() {
  const { search } = useLocation();
  const navigate = useNavigate();
  const q = parseQuery(search);

  const [raw, setRaw] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const flattened = data.map(d => ({
          id: d.id,
          name: d.name,
          photo: d.photo,
          intro: d.doctor_introduction,
          specialities: d.specialities.map(s => s.name),
          fees: parseInt(d.fees.replace(/\D/g, ''), 10),
          experience: parseInt(d.experience, 10),
          languages: d.languages,
          clinicName: d.clinic.name,
          clinicLocality: d.clinic.address.locality,
          video: d.video_consult,
          clinic: d.in_clinic,
          all: d.all,
        }));
        setRaw(flattened);
      })
      .finally(() => setLoading(false));
  }, []);

  const filters = {
    search: q.search || '',
    mode: q.mode || '',
    specialties: q.specialties || [],
    sort: q.sort || ''
  };

  function updateParams(changes) {
    const next = { ...filters, ...changes };
    Object.keys(next).forEach(k => {
      if (!next[k] || (Array.isArray(next[k]) && next[k].length === 0)) {
        delete next[k];
      }
    });
    navigate({ search: stringifyQuery(next) });
  }

  const list = useMemo(() => {
    let out = raw.slice();
    if (filters.search) {
      const term = filters.search.toLowerCase();
      out = out.filter(d => d.name.toLowerCase().includes(term));
    }
    if (filters.mode) {
      out = out.filter(d => (filters.mode === 'video' ? d.video : d.clinic));
    }
    if (filters.specialties.length) {
      out = out.filter(d => filters.specialties.some(s => d.specialities.includes(s)));
    }
    if (filters.sort === 'fees') out.sort((a, b) => a.fees - b.fees);
    if (filters.sort === 'experience') out.sort((a, b) => b.experience - a.experience);
    return out;
  }, [raw, filters]);

  return { loading, list, filters, updateParams };
}