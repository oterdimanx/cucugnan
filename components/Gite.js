import safranImg from '../public/products/cucugnan-nos-produits-safran.jpeg'
export default function Gite() {
    return (
      <>
            <header className="py-5 bg-dark">
                <div className="container px-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xxl-6">
                            <div className="text-center my-5">
                                <h1 className="fw-bolder mb-3 header-gite">
                                    Notre gite vous accueille dès le mois d'octobre 2024.
                                </h1>
                                <p className="lead fw-normal text-muted mb-4">
                                    Start Bootstrap was built on the idea that quality, 
                                    functional website templates and themes should be available to everyone. Use our open source, free products, 
                                    or support us by purchasing one of our premium products or services.
                                </p>
                                <a className="btn btn-primary btn-lg" href="#scroll-target">
                                    Voir les détails
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-5 bg-light" id="scroll-target">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6">
                            <img className="img-fluid rounded mb-5 mb-lg-0" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">
                                Un intérieur chaleureux
                            </h2>
                            <p className="lead fw-normal text-muted mb-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. 
                                Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-first order-lg-last"><img className="img-fluid rounded mb-5 mb-lg-0" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Growth &amp; beyond</h2>
                            <p className="lead fw-normal text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                        </div>
                    </div>
                </div>
            </section>
      </>
    )
  }