import 'bootstrap/dist/css/bootstrap.css'
import '@styles/robotoslab.css?family=Roboto+Slab:400,100,300,700'
import '@styles/globals.css'
import { useEffect } from 'react'

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
