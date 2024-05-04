import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className="bg-dark py-4 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto"><div className="small m-0 text-white">Copyright &copy; Les 7 saveurs de Cucugnan 2024</div></div>
                    <div className='col-auto'>
                      <img src="/golden-logo-transparent-150-150.png" alt="Les 7 saveurs de Cucugnan Logo 150" className={styles.logo} />
                    </div>
                    <div className="col-auto">
                        <a className="link-light small" href="#!">Privacy</a>
                        <span className="text-white mx-1">&middot;</span>
                        <a className="link-light small" href="#!">Terms</a>
                        <span className="text-white mx-1">&middot;</span>
                        <a className="link-light small" href="#!">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}
