'use client';
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

function hideMenuItems() {
    const collapselems = document.querySelectorAll('.collapsed')
        for (const elem of collapselems) {
        const styles = window.getComputedStyle(elem)
        const display = styles.getPropertyValue('display')
        if('block' === display) {
            elem.className = 'collapse navbar-collapse'
        }
    }
}

function useWindowSize() {
    const [size, setSize] = useState([0, 0])
    useEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight])
        hideMenuItems()
      }
      window.addEventListener('resize', updateSize)
      updateSize()

      return () => window.removeEventListener('resize', updateSize)
    }, []);
    return size
}

function DoWindowMenuEffect() {
    const [width, height] = useWindowSize()
    return <span className="d-sm-none">Window size: {width} x {height}</span>
}

export default function Menu() {

    const [toggle, setToggle] = useState(0)

    useEffect(() => {
        const storedToggle = localStorage.getItem('menu')
        if (storedToggle) {
            setToggle(parseInt(storedToggle,10))
        }
    }, []) 

    const changeToggle = () => {
        const newToggle = 1 === toggle ? 0 : 1;
        setToggle(newToggle)
        localStorage.setItem('menu',newToggle)
    }

    const currentRoute = usePathname()
    const toggleNav = () => {
        const elems = document.querySelectorAll('.collapse:not(.show)')
        const collapselems = document.querySelectorAll('.collapsed')
        const brandElem = document.querySelectorAll('.navbar-brand')
    
        for (const elem of elems) {
            const styles = window.getComputedStyle(elem)
            const display = styles.getPropertyValue('display')
            if('none' === display) {
                elem.className = 'collapsed navbar-collapsed'
                brandElem[0].className = 'navbar-brand sticked'
            }
        }
    
        for (const elem of collapselems) {
            const styles = window.getComputedStyle(elem)
            const display = styles.getPropertyValue('display')
            if('block' === display) {
                elem.className = 'collapse navbar-collapse'
                brandElem[0].className = 'navbar-brand'
            }
        }
        changeToggle();
    }

    DoWindowMenuEffect();
    return <div className="menu-wrapper">
    <button className="navbar-toggler" type="button" onClick={toggleNav} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className={1 === toggle ? 'collapsed navbar-collapsed' : 'collapse navbar-collapse'} id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mbtoggleNav-lg-0 nav-list">
            <li className="nav-item"><a className={currentRoute === "/" ? "nav-link active" : "nav-link"} href="./">Home</a></li>
            <li className="nav-item"><a className={currentRoute === "/nos-produits" ? "nav-link active" : "nav-link"} href="./nos-produits">Nos Produits</a></li>
            <li className="nav-item"><a className={currentRoute === "/contact" ? "nav-link active" : "nav-link"} href="./contact">Contact</a></li>
            <li className="nav-item"><a className={currentRoute === "/gite" ? "nav-link active" : "nav-link"} href="./gite">Gîte</a></li>
        </ul>
    </div>
  </div>
}