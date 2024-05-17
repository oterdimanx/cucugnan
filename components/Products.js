//import safranImg from '../public/products/cucugnan-nos-produits-safran-600-400.png'
import altSafranImg from '../public/products/cucugnan-nos-produits-safran-708-485.png'
import AmandeImg from '../public/products/cucugnan-nos-produits-amande-600-400.png'
import sichuanImg from '../public/products/cucugnan-nos-produits-sichuan-poivre-600-400.png'
import selImg from '../public/products/cucugnan-nos-produits-sel-aromatise-600-400.png'
import oliveImg from '../public/products/cucugnan-nos-produits-olive-600-400.png'
import gojiImg from '../public/products/cucugnan-nos-produits-baie-goji-600-400.png'
import pistacheImg from '../public/products/cucugnan-nos-produits-pistache-600-400.png'
import LogoImg from '@components/logo/LogoImg'

export default function Products() {
    return (
      <>
        <section className="bg-dark py-5">
                <div className="container px-5 my-5">
                    <div className="text-center mb-5">
                        <h1 className="display-6 fw-bolder header-products">Les 7 saveurs de Cucugnan</h1>
                        <p className="lead fw-normal text-muted mb-0">Nos produits</p>
                    </div>
                    <div className="row gx-5">
                        <div className="col-lg-6">
                            <div className="col-lg-12">
                                <div className="position-relative">
                                    <div className="product-main">
                                        <div className="position-relative mb-5 main-img">
                                            <img className="img-fluid rounded-3 mb-3 mx-auto d-block" src={altSafranImg.src} alt="Cucugnan Nos Produits Safran Image Png" />
                                            <h3 className="h3 fw-bolder">Le safran</h3>
                                            <p>
                                                le safran c'est bon
                                                Ici un texte concernant le safran
                                                Ici un texte concernant le safran
                                                Ici un texte concernant le safran
                                                Ici un texte concernant le safran
                                                Ici un texte concernant le safran
                                                Ici un texte concernant le safran
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row gx-5">
                                <div className="col-lg-6 product-first-line">
                                    <div className="position-relative mb-5">
                                        <img className="img-fluid rounded-3 mb-3" src={AmandeImg.src} alt="Cucugnan Nos Produits Amande Image" />
                                        <h4 className="h4">L'amande</h4>
                                        <p className="product-text-first-row rounded-1">Ici un texte concernant les amandes</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 product-white">
                                    <div className="position-relative mb-5">
                                        <img className="img-fluid rounded-3 mb-3" src={sichuanImg.src} alt="Cucugnan Nos Produits Poivre du Sichuan Image" />
                                        <h4 className="h4">Le poivre du Sichuan</h4>
                                        <p className="product-text rounded-1">Ici un texte concernant le poivre du sichuan</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row gx-5">
                                <div className="col-lg-6 product-white">
                                    <div className="position-relative mb-5">
                                        <img className="img-fluid rounded-3 mb-3" src={gojiImg.src} alt="Cucugnan Nos Produits Baies de Goji Image" />
                                        <h4 className="h4">Les baies de Goji</h4>
                                        <p className="product-text rounded-1">Ici un texte concernant les baies de goji</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 product-first-line">
                                    <div className="position-relative mb-5">
                                        <img className="img-fluid rounded-3 mb-3" src={selImg.src} alt="Cucugnan Nos Produits Sel Aromatisé Image" />
                                        <h4 className="h4">Le sel aromatisé</h4>
                                        <p className="product-text rounded-1">Ici un texte concernant le sel aromatisé</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row gx-5">
                                <div className="col-lg-6 product-first-line">
                                    <div className="position-relative mb-5">
                                        <img className="img-fluid rounded-3 mb-3" src={pistacheImg.src} alt="Cucugnan Nos Produits Pistaches Image" />
                                        <h4 className="h4">Les pistaches</h4>
                                        <p className="product-text rounded-1">Ici un texte concernant les pistaches</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 product-white">
                                    <div className="position-relative mb-5">
                                        <img className="img-fluid rounded-3 mb-3" src={oliveImg.src} alt="Cucugnan Nos Produits Olives Image" />
                                        <h4 className="h4">Les olives</h4>
                                        <p className="product-text rounded-1">Ici un texte concernant les olives</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row gx-5 row-cols-2 row-cols-lg-4 py-5 justify-content-center">
                        <div className="col">
                            <LogoImg />
                        </div>
                    </div>
                </div>
            </section>
      </>
    )
  }