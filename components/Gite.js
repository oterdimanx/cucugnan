import LogoImg from '@components/logo/LogoImg'
import GiteConstructionImg from '../public/gite/7saveurs-de-cucugnan-en-construction-600-400.png'
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
                                <p className="lead fw-normal mb-4 text-header-gite">
                                    Vous rêvez de passer un week-end ou une semaine en pleine nature, dans un cadre bucolique ?
                                    <span>
                                    Prenez le temps d'une pause dans la région Occitanie et découvrez notre savoir-faire et notre gite.</span>
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
                                &Agrave; partir du mois de juin jusqu'en octobre, nous vous accueillons dans une ambiance calme et reposante 
                                aux pieds du dernier bastion Cathare, <b>le fameux château de Queribus</b>.
                            </p>
                            <p className="regular text-muted mb-0 text-gite">
                                Il est idéalement situé pour visiter à pieds le château, vous trouverez en effet le début de la randonnée aux pieds du gite.
                                &Agrave; 15 minutes en voiture, vous pourrez découvrir les autres châteaux de la région 
                                (<b>Peyrepetuse, Aguilar</b>...).
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5" id="gite-notre-production">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-first order-lg-last">
                            <img className="img-fluid rounded mb-5 mb-lg-0" src={GiteConstructionImg.src} alt="Les 7 saveurs de Cucugnan - Le Gite - Luxury Safari Lodge - Photo Extérieur png" />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder title-gite">Le gîte des sept saveurs</h2>
                            <p className="regular text-muted mb-0 text-gite">
                                Vous recherchez un gîte dans le sud de la France ?
                                Le gîte est situé <b>au pays cathares</b>, il vous accueille au coeur du parc naturel régional <b>du haut Languedoc Roussillon</b>.
                            </p>
                            <p className="regular text-muted mb-0 text-gite">
                                Pour votre confort, il est doté d'une cuisine équipée, d'une Salle de bain, WC, de deux chambres doubles, et d'un canapé lit 
                                dans le salon.
                            </p>
                            <p className="regular text-muted mb-0 text-gite">
                                La capacité du gîte est de 4 à 6 personnes. Une terrasse privative avec vue sur la vallée vous permettra de prendre vos repas 
                                en toute tranquilité.
                                <br/>
                                Enfin, le gite dispose d'un spa ainsi que d'un parking privé.
                            </p>
                            <p className="regular text-muted mb-0 text-gite">
                                &Agrave; proximité vous trouverez des restaurants, une épicerie, et une célèbre boulangerie.
                                <br/>
                                L'accès au gite se fera par un chemin en terre, accessible en voiture. La région est riche en activités : 
                                randonnées pedestres ou à vélo, à proximité des points de baignade de la rivière du verdouble, et des visites des châteaux Cathares.
                            </p>
                            <p className="regular text-muted mb-0 text-gite">
                                Il se situe à une heure des plages du Languedoc (Canet en Roussillon, Le Barcares et Leucate).
                            </p>
                            <p className="regular text-muted mb-0 text-gite">
                                Nous vous attendons avec impatience.
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