import { studentServices, businessServices, recentProjects, statistics } from '../data/mockData';

const BASE_URL = import.meta.env.VITE_API_URL || '/api';

export async function fetchServices(audience = null) {
  try {
    const url = audience ? `${BASE_URL}/services?audience=${audience}` : `${BASE_URL}/services`;
    const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.warn("Backend API unavailable, using local data:", err.message);
    if (audience === 'STUDENT') return studentServices;
    if (audience === 'BUSINESS') return businessServices;
    return [...studentServices, ...businessServices];
  }
}

export async function fetchProjects() {
  try {
    const res = await fetch(`${BASE_URL}/projects`, { headers: { 'Accept': 'application/json' } });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn("Backend API unavailable, using local projects:", err.message);
    return recentProjects;
  }
}

export async function fetchStats() {
  try {
    const res = await fetch(`${BASE_URL}/stats`, { headers: { 'Accept': 'application/json' } });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn("Backend API unavailable, using local stats:", err.message);
    return statistics;
  }
}

export async function submitInquiry(inquiryData) {
  const res = await fetch(`${BASE_URL}/inquiries`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(inquiryData)
  });

  if (!res.ok) {
    const errBody = await res.json().catch(() => ({}));
    throw new Error(errBody.message || `Submission failed with status ${res.status}`);
  }

  return await res.json();
}

export async function checkBackendHealth() {
  try {
    const res = await fetch(`${BASE_URL}/health`);
    if (!res.ok) return { status: "DOWN" };
    return await res.json();
  } catch (e) {
    return { status: "OFFLINE", error: e.message };
  }
}
