
import page404BagsImg from '../public/7saveursdecucugnan-bg-404-600.png'
export default function NotFound() {
    return (
      <>
        <header className="bg-dark py-5">
            <div className="container px-5">
                <div className="row gx-5 align-items-center justify-content-center">
                    <div className="col-lg-8 col-xl-7 col-xxl-6">
                        <div className="my-5 text-center text-xl-start">
                            <h1 className="display-6 fw-bolder text-white mb-2">ERREUR 404</h1>
                            <p className="text-warning text-404">La page que vous tentez d'afficher n'existe pas</p>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                <a className="btn btn-primary btn-lg px-4 me-sm-3" href="./">Retour</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                        <img className="img-fluid rounded-3 my-5" src={page404BagsImg.src} alt="homepage-bags1-600-400.png image" />
                    </div>
                </div>
                <div className="row gx-5 row-cols-2 row-cols-lg-4 py-5 justify-content-center">
                </div>
                <div className="row gx-5 row-cols-2 row-cols-lg-4 py-5 justify-content-center">
                </div>
            </div>
        </header>
      </>
    )
  }