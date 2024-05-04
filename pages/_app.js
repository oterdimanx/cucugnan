import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@styles/globals.css'
import {useEffect} from 'react'

function Application({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList.add(
      'd-flex',
      'flex-column',
      'h-100',
    )
    require('bootstrap/dist/css/bootstrap.css') 
  }, [])
  return <Component {...pageProps} />
}

export default Application
