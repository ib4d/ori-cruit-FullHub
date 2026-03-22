import { FormEvent, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@oricruit.local');
  const [password, setPassword] = useState('Admin@123');
  const [error, setError] = useState('');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
      localStorage.setItem('hub_token', res.data.access_token);
      router.push('/');
    } catch (err) {
      setError('Login failed. Use email: admin@oricruit.local / password: Admin@123');
    }
  };

  return (
    <div className="container">
      <h1>Sign in</h1>
      <div className="card">
        <form onSubmit={onSubmit}>
          <label>
            Email
            <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
          </label>
          <label>
            Password
            <input className="input" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
          </label>
          <button className="button" type="submit">Login</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
}
