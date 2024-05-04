import safranImg from '../public/products/cucugnan-nos-produits-safran.jpeg'
export default function Products() {
    return (
      <>
        <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="text-center mb-5">
                        <h1 className="fw-bolder">Les 7 saveurs de Cucugnan</h1>
                        <p className="lead fw-normal text-muted mb-0">Nos produits</p>
                    </div>
                    <div className="row gx-5">
                        <div className="col-lg-6">
                            <div className="position-relative mb-5">
                                <img className="img-fluid rounded-3 mb-3" src={safranImg.src} alt="Cucugnan Nos Produits Safran Image Jpeg" />
                                <a className="h3 fw-bolder text-decoration-none link-dark stretched-link" href="#!">Le safran</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative mb-5">
                                <img className="img-fluid rounded-3 mb-3" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." />
                                <a className="h3 fw-bolder text-decoration-none link-dark stretched-link" href="#!">L'amande</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative mb-5 mb-lg-0">
                                <img className="img-fluid rounded-3 mb-3" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." />
                                <a className="h3 fw-bolder text-decoration-none link-dark stretched-link" href="#!">Le poivre du Sichuan</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <img className="img-fluid rounded-3 mb-3" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." />
                                <a className="h3 fw-bolder text-decoration-none link-dark stretched-link" href="#!">Les baies de Goji</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative mb-5 mb-lg-0">
                                <img className="img-fluid rounded-3 mb-3" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." />
                                <a className="h3 fw-bolder text-decoration-none link-dark stretched-link" href="#!">Le poivre du Sichuan</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <img className="img-fluid rounded-3 mb-3" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." />
                                <a className="h3 fw-bolder text-decoration-none link-dark stretched-link" href="#!">Les baies de Goji</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <img className="img-fluid rounded-3 mb-3" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." />
                                <a className="h3 fw-bolder text-decoration-none link-dark stretched-link" href="#!">Les baies de Goji</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-light">
                <div className="container px-5 my-5">
                    <h2 className="display-4 fw-bolder mb-4">Let's build something together</h2>
                    <a className="btn btn-lg btn-primary" href="#!">Contact us</a>
                </div>
            </section>
      </>
    )
  }