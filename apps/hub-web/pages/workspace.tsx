import Link from 'next/link';

export default function WorkspacePage() {
  return (
    <div className="container">
      <div className="header">
        <h1>Workspace</h1>
        <Link href="/">Back</Link>
      </div>
      <div className="card">
        <p>Use this area to build role-based dashboards and hiring insights.</p>
      </div>
    </div>
  );
}
