import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

type Candidate = {
  id: number;
  name: string;
  email: string;
  phone?: string;
  currentTitle?: string;
  status: string;
  notes?: string;
  ownerId?: number;
  createdAt: string;
  updatedAt: string;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';

const STATUS_COLOR: Record<string, string> = {
  APPLIED: '#7c3aed',
  SCREENING: '#2563eb',
  INTERVIEW: '#f59e0b',
  OFFER: '#16a34a',
  HIRED: '#059669',
  REJECTED: '#dc2626',
};

export default function HomePage() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  const fetchCandidates = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE_URL}/candidates`, {
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      });
      setCandidates(res.data);
    } catch (e) {
      console.error('Unable to fetch candidates', e);
      setError('Cannot load candidates: check API status and token');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem('hub_token');
    if (saved) {
      setToken(saved);
    }
    fetchCandidates();
  }, []);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/login`, {
        email,
        password,
      });
      localStorage.setItem('hub_token', res.data.access_token);
      setToken(res.data.access_token);
      setError('');
      fetchCandidates();
    } catch (err) {
      setError('Login failed: use admin@oricruit.local / Admin@123');
    }
  };

  const createCandidate = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!name || !email) return;
    try {
      await axios.post(
        `${API_BASE_URL}/candidates`,
        { name, email, status: 'APPLIED', currentTitle: 'Unknown' },
        { headers: token ? { Authorization: `Bearer ${token}` } : undefined },
      );
      setName('');
      setEmail('');
      fetchCandidates();
    } catch (error) {
      console.error('Create failed', error);
      setError('Create candidate failed - check auth token');
    }
  };

  const candidatesCount = candidates.length;
  const staged = useMemo(() => {
    const groups = candidates.reduce((acc, c) => {
      const key = c.status || 'APPLIED';
      acc[key] = acc[key] ? acc[key] + 1 : 1;
      return acc;
    }, {} as Record<string, number>);
    return groups;
  }, [candidates]);

  return (
    <div className="container">
      <header className="header" style={{ marginBottom: '1rem' }}>
        <h1>ori_cruit Hub</h1>
        <nav style={{ display: 'flex', gap: '0.5rem' }}>
          <Link href="/">Dashboard</Link>
          <Link href="/pipeline">Pipeline</Link>
          <Link href="/workspace">Workspace</Link>
        </nav>
      </header>

      <section className="card" style={{ marginBottom: '1rem' }}>
        <h2>Admin Login</h2>
        <form onSubmit={login} style={{ display: 'grid', gap: '0.6rem' }}>
          <label>
            Email
            <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@oricruit.local" type="email" />
          </label>
          <label>
            Password
            <input className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Admin@123" type="password" />
          </label>
          <button className="button">Sign in</button>
        </form>
        {error && <p style={{ color: 'crimson', fontWeight: 600 }}>{error}</p>}
        {token ? <p style={{ color: '#0b78a6' }}>Authenticated</p> : <p>Guest mode: read-only candidate list until login.</p>}
      </section>

      <section className="card" style={{ marginBottom: '1rem' }}>
        <h2>Candidates Overview</h2>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <div className="badge">Total {candidatesCount}</div>
          {Object.entries(staged).map(([status, count]) => (
            <div key={status} className="badge" style={{ background: STATUS_COLOR[status] || '#64748b', color: 'white' }}>
              {status}: {count}
            </div>
          ))}
        </div>
      </section>

      <section className="card" style={{ marginBottom: '1rem' }}>
        <h2>New Candidate</h2>
        <form onSubmit={createCandidate} style={{ display: 'grid', gap: '0.6rem' }}>
          <label>
            Name
            <input className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Candidate name" />
          </label>
          <label>
            Email
            <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Candidate email" type="email" />
          </label>
          <button className="button" type="submit">Add candidate</button>
        </form>
      </section>

      <section className="card">
        <h2>Candidates List</h2>
        {loading && <p>Loading candidates...</p>}
        {!loading && candidates.length === 0 && <p>No candidates yet.</p>}
        <div style={{ display: 'grid', gap: '0.6rem' }}>
          {candidates.map((item) => (
            <article key={item.id} style={{ padding: '0.75rem', border: '1px solid rgba(148,163,184,.25)', borderRadius: '8px' }}>
              <h3>{item.name}</h3>
              <p>{item.currentTitle || 'Candidate'}</p>
              <p style={{ fontSize: '0.85rem' }}>{item.email} • {item.phone || '—'}</p>
              <span className="badge" style={{ background: STATUS_COLOR[item.status] || '#94a3b8', color: 'white' }}>{item.status}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
