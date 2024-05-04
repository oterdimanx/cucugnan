import homepageBagsImg from '../public/homepage-bags3-600-400.png'
export default function Intro() {
    return (
      <>
        <header className="bg-dark py-5">
            <div className="container px-5">
                <div className="row gx-5 align-items-center justify-content-center">
                    <div className="col-lg-8 col-xl-7 col-xxl-6">
                        <div className="my-5 text-center text-xl-start">
                            <h1 className="display-5 fw-bolder text-white mb-2">Les 7 saveurs de Cucugnan</h1>
                            <p className="lead fw-normal text-white-50 mb-4">Découvrez notre univers avec des produits du terroir de Perpignan: nous cultivons des plantes aromatiques et nous pouvons également vous accueillir dans un gîte bucolique, véritable petit coin de paradis.</p>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#features">Nos saveurs</a>
                                <a className="btn btn-outline-light btn-lg px-4" href="#feedbacks">Où Sommes-nous ?</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                        <img className="img-fluid rounded-3 my-5" src={homepageBagsImg.src} alt="homepage-bags1-600-400.png image" />
                    </div>
                </div>
            </div>
        </header>
      </>
    )
  }