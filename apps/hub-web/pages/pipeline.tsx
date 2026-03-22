import Link from 'next/link';

export default function PipelinePage() {
  return (
    <div className="container">
      <div className="header">
        <h1>Pipeline</h1>
        <Link href="/">Back</Link>
      </div>
      <div className="card">
        <p>This view is a starting point for pipeline management from the candidate funnel.</p>
      </div>
    </div>
  );
}
