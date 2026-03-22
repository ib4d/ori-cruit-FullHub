import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-base flex flex-col items-center justify-center font-ui px-8 text-center">
      <h1 className="font-display text-display-hero uppercase text-ink-primary mb-4">404</h1>
      <p className="text-ui-lg text-ink-secondary mb-8 max-w-[400px]">
        This route does not exist. You may have followed an outdated link or typed the URL incorrectly.
      </p>
      <div className="flex gap-4">
        <Link to="/">
          <Button variant="primary">BACK TO HOME</Button>
        </Link>
        <Link to="/hub">
          <Button variant="outline">OPEN HUB</Button>
        </Link>
      </div>
    </div>
  )
}
