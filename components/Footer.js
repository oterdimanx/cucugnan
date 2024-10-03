import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className="bg-dark py-4 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto"><div className="small m-0 text-white">Copyright &copy; Les 7 saveurs de Cucugnan 2024</div></div>
                    <div className='col-auto'>
                      <img src="/golden-logo-transparent-200-200.png" alt="Les 7 saveurs de Cucugnan Logo 200" className={styles.logo} />
                    </div>
                    <div className="col-auto">
                        <a className="link-light small" href="./cgu#article-3">Gestion des Données Personnelles</a>
                        <span className="text-white mx-1">&middot;</span>
                        <a className="link-light small" href="./cgu" title="Conditions Générales d'Utilisation">C.G.U.</a>
                        <span className="text-white mx-1">&middot;</span>
                        <a className="link-light small" href="./contact">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}
