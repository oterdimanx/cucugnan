'use client';
import { usePathname } from 'next/navigation';

function toggleNav() {
    const elems = document.querySelectorAll('.collapse:not(.show)');
    const collapselems = document.querySelectorAll('.collapsed');
    for (const elem of elems) {
        const styles = window.getComputedStyle(elem)
        const display = styles.getPropertyValue('display')
        if('none' === display) {
            elem.className = 'collapsed navbar-collapsed';
        }
    }

    for (const elem of collapselems) {
        const styles = window.getComputedStyle(elem)
        const display = styles.getPropertyValue('display')
        if('block' === display) {
            elem.className = 'collapse navbar-collapse';
        }
    }
}

export default function Header({ title }) {

  const currentRoute = usePathname();

  return <nav className="navbar navbar-expand-lg navbar-dark bg-dark-purple" id="mainNav">
  <div className="container px-5">
      <a className="navbar-brand" href="./">{title}</a>
      <button className="navbar-toggler" type="button" onClick={toggleNav} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className={currentRoute === "/" ? "nav-link active" : "nav-link"} href="./">Home</a></li>
              <li className="nav-item"><a className={currentRoute === "/nos-produits" ? "nav-link active" : "nav-link"} href="./nos-produits">Nos Produits</a></li>
              <li className="nav-item"><a className={currentRoute === "/contact" ? "nav-link active" : "nav-link"} href="./contact">Contact</a></li>
              <li className="nav-item"><a className={currentRoute === "/gite" ? "nav-link active" : "nav-link"} href="./gite">Gîte</a></li>
          </ul>
      </div>
  </div>
</nav>
}
