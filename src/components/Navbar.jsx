import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-title">
          Blog Computação Visual
        </Link>
        <nav className="navbar-links">
          <Link to="/">Início</Link>
        </nav>
      </div>
    </header>
  )
}
