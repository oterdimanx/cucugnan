import LogoImg from '@components/logo/LogoImg'
import GiteInsideImg from '../public/7saveursdecucugnan-gite-interieur-600.png'
export default function Gite() {
    return (
      <>
            <header className="py-5 bg-dark">
                <div className="container px-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xxl-6">
                            <div className="text-center my-5">
                                <h1 className="display-6 fw-bolder mb-3 header-gite">
                                    Notre gite vous accueille dès le mois d'xxxxxx 2024.
                                </h1>
                                <p className="lead fw-normal text-muted mb-4">
                                    Dès le mois d'xxxxx 2024, notre gite vous accueille toute l'année.
                                    Prenez le temps d'une pause dans la région et découvrez notre savoir-faire.
                                    Ici plus de texte de présentation (...)
                                </p>
                                <a className="btn btn-primary btn-lg" href="#gite-interieur">
                                    Voir les détails
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="py-5 bg-light" id="gite-interieur">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6">
                            <img className="img-fluid rounded mb-5 mb-lg-0" src={GiteInsideImg.src} alt="Les 7 saveurs de Cucugnan - Le Gite - Photo Interieur png" />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">
                                Un intérieur chaleureux
                            </h2>
                            <p className="regular text-muted mb-0">
                                Quelle que soit la période de l'année, nous vous accueillons dans notre gite, dans une ambiance relaxante et chaleureuse. 
                                Une salle de bain, un petit séjour, et deux chambres, avec toutes les commodités associées, vous attendent à proximité de notre principal site de culture.
                            </p>
                            <p className="regular text-muted mb-0">
                                Que ce soit pour apprécier la tranquilité, le doux ronronnement des criquets dans l'après-midi, ou pour découvrir notre activité et la région, 
                                vous trouverez mille façons de profiter pleinement de cet environnement exceptionnel. Pour connaître nos tarifs et pour plus de détails,
                            </p>
                            <a className="btn btn-secondary btn-lg" href="./contact">
                                Contactez-nous
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5" id="gite-notre-production">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-first order-lg-last"><img className="img-fluid rounded mb-5 mb-lg-0" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Découvrez notre production</h2>
                            <p className="lead fw-normal text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-dark py-5">
                <div className="container px-5 my-5">
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