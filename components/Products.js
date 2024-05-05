import safranImg from '../public/products/cucugnan-nos-produits-safran-600-400.png'
import AmandeImg from '../public/products/cucugnan-nos-produits-amande-600-400.png'
import sichuanImg from '../public/products/cucugnan-nos-produits-sichuan-poivre-600-400.png'
import selImg from '../public/products/cucugnan-nos-produits-sel-aromatise-600-400.png'
import oliveImg from '../public/products/cucugnan-nos-produits-olive-600-400.png'
import gojiImg from '../public/products/cucugnan-nos-produits-baie-goji-600-400.png'
import pistacheImg from '../public/products/cucugnan-nos-produits-pistache-600-400.png'

export default function Products() {
    return (
      <>
        <section className="bg-dark py-5">
                <div className="container px-5 my-5">
                    <div className="text-center mb-5">
                        <h1 className="fw-bolder header-products">Les 7 saveurs de Cucugnan</h1>
                        <p className="lead fw-normal text-muted mb-0">Nos produits</p>
                    </div>
                    <div className="row gx-5">
                        <div className="col-lg-6">
                            <div className="position-relative mb-5">
                                <img className="img-fluid rounded-3 mb-3" src={safranImg.src} alt="Cucugnan Nos Produits Safran Image Jpeg" />
                                <a className="h3 fw-bolder text-decoration-none link-secondary stretched-link" href="#!">Le safran</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative mb-5">
                                <img className="img-fluid rounded-3 mb-3" src={AmandeImg.src} alt="Cucugnan Nos Produits Amande Image" />
                                <a className="h3 fw-bolder text-decoration-none link-secondary stretched-link" href="#!">L'amande</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative mb-5 mb-lg-0">
                                <img className="img-fluid rounded-3 mb-3" src={sichuanImg.src} alt="Cucugnan Nos Produits Poivre du Sichuan Image" />
                                <a className="h3 fw-bolder text-decoration-none link-secondary stretched-link" href="#!">Le poivre du Sichuan</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <img className="img-fluid rounded-3 mb-3" src={gojiImg.src} alt="Cucugnan Nos Produits Baies de Goji Image" />
                                <a className="h3 fw-bolder text-decoration-none link-secondary stretched-link" href="#!">Les baies de Goji</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative mb-5 mb-lg-0">
                                <img className="img-fluid rounded-3 mb-3" src={selImg.src} alt="Cucugnan Nos Produits Sel Aromatisé Image" />
                                <a className="h3 fw-bolder text-decoration-none link-secondary stretched-link" href="#!">Le sel aromatisé</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <img className="img-fluid rounded-3 mb-3" src={pistacheImg.src} alt="Cucugnan Nos Produits Pistaches Image" />
                                <a className="h3 fw-bolder text-decoration-none link-secondary stretched-link" href="#!">Les pistaches</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <img className="img-fluid rounded-3 mb-3" src={oliveImg.src} alt="Cucugnan Nos Produits Olives Image" />
                                <a className="h3 fw-bolder text-decoration-none link-secondary stretched-link" href="#!">Les olives</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      </>
    )
  }