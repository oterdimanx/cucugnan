import LogoImg from '@components/logo/LogoImg'
import GiteInsideImg from '../public/gite/7saveursdecucugnan-gite-interieur-600.png'
import GiteSafariLodgeImg from '../public/gite/7saveurs-de-cucugnan-luxury-safari-lodge-1-600-400.png'
import GiteQueribusImg from '../public/gite/7saveurs-de-cucugnan-chateau-queribus-1-600-400.png'

export default function Gite() {
    return (
      <>
            <header className="py-5 bg-dark">
                <div className="container px-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xxl-6">
                            <div className="text-center my-5">
                                <h1 className="display-6 fw-bolder mb-3 header-gite">
                                    Ouverture en avril 2025
                                </h1>
                                <p className="lead fw-normal text-muted mb-4 text-header-gite">
                                    Dès le mois d'avril 2025, notre gite vous accueille toute l'année.
                                    Vous rêvez de passer un week-end ou une semaine en pleine nature, dans un cadre bucolique... ?
                                    
                                    Prenez le temps d'une pause dans la région et découvrez notre savoir-faire et notre gite.
                                </p>
                                <a className="btn btn-outline-light btn-lg px-4" href="#gite-interieur">
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
                            <img className="img-fluid rounded mb-5 mb-lg-0" src={GiteQueribusImg.src} alt="Les 7 saveurs de Cucugnan - Le Gite - Chateau de Queribus png" />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder title-gite">
                                Le cadre et la région
                            </h2>
                            <p className="regular text-muted mb-0 text-gite">
                                Quelle que soit la période de l'année, nous vous accueillons dans notre gite, dans une ambiance relaxante et chaleureuse. 
                                Aux pieds du dernier bastion Cathare, <b>le château de Queribus</b>.
                            </p>
                            <p className="regular text-muted mb-0 text-gite">
                                Il est idéalement situé pour partir à pieds visiter le château, 
                                à une heure de balade et environ à 15 minutes des autres châteaux de la région : 
                                <b>Peyrepetuse, Aguilar</b>, etc.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5" id="gite-notre-production">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-first order-lg-last">
                            <img className="img-fluid rounded mb-5 mb-lg-0" src={GiteSafariLodgeImg.src} alt="Les 7 saveurs de Cucugnan - Le Gite - Luxury Safari Lodge - Photo Extérieur png" />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder title-gite">Un intérieur chaleureux</h2>
                            <p className="regular text-muted mb-0 text-gite">
                                A <b>40 minutes de Perpignan</b>, et <b>1h15 de Carcassonne</b>, notre gite en pleine nature vous séduira.
                            </p>
                            <p className="regular text-muted mb-0 text-gite">
                                Que ce soit pour apprécier la tranquilité, le doux ronronnement des criquets dans l'après-midi, ou pour découvrir notre activité et la région, 
                                vous trouverez mille façons de profiter pleinement de cet environnement exceptionnel. 
                            </p>
                            <p className="regular text-muted mb-0 text-gite">
                                <b>Pour connaître nos tarifs et pour plus de détails,</b>
                            </p>
                            <a className="btn btn-primary btn-lg btn-gite" href="./contact">
                                Contactez-nous
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-dark py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 row-cols-2 row-cols-lg-4 justify-content-center">
                        <div className="col">
                            <LogoImg />
                        </div>
                    </div>
                </div>
            </section>
      </>
    )
  }