import LogoImg from '@components/logo/LogoImg'

export default function Cgu() {
  return (
    <>
    <header className="py-5 bg-dark">
        <div className="container px-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-xxl-6">
                    <div className="text-center my-5">
                        <h1 className="display-6 fw-bolder mb-3 header-gite header-cgu">
                            Conditions générales d'utilisation
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <section className="py-5 bg-dark cgu" id="cgu-intro">
        <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
                <div className="col-lg-12">
                    <h2 className="fw-bolder title-gite">
                        En vigueur au 01/08/2024
                    </h2>
                    <p className="regular text-muted mb-0 text-gite">
                        Les présentes conditions générales d'utilisation <b>(dites « CGU »)</b> ont pour objet l'encadrement juridique des modalités de mise à disposition 
                        du site et des services par le propriétaire des <b>7 saveurs de Cucugnan</b> et de définir les conditions d’accès et d’utilisation des services 
                        par <b>« l'Utilisateur »</b>.
                    </p>
                    <p className="regular text-muted mb-0 text-gite">
                        Les présentes CGU sont accessibles sur le site à la rubrique (en cliquant sur le lien respectif dans le footer) <b>«CGU»</b>.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section className="py-5 bg-dark cgu" id="article-1">
        <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
                <div className="col-lg-12">
                    <h2 className="fw-bolder title-gite">
                        Article 1 : Les mentions légales
                    </h2>
                    <p className="regular text-muted mb-0 text-gite">
                        L'édition du site https://www.7saveursdecucugnan.fr est assurée par la Société Entreprise Individuelle Olivier Terdiman au capital de 1 euro, 
                        immatriculée au RCS de - sous le numéro -, dont le siège social est situé à Paris 19e.
                    </p>
                    <p className="regular text-muted mb-0 text-gite">
                        Adresse e-mail : ot@otbsi.com
                    </p>
                    <p className="regular text-muted mb-0 text-gite">
                        Le Directeur de la publication est : M. Busquet Vincent.
                    </p>
                    <p className="regular text-muted mb-0 text-gite">
                        L'hébergeur du site <b><u>https://www.7saveursdecucugnan.fr</u></b> est la société <b>Netlify</b>, dont le siège social est situé à San Francisco, Californie.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section className="py-5 bg-dark cgu" id="article-2">
        <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
                <div className="col-lg-12">
                    <h2 className="fw-bolder title-gite">
                        Article 2 : Accès au site
                    </h2>
                    <p className="regular text-muted mb-0 text-gite">
                        Le site https://www.7saveursdecucugnan.fr permet à l'Utilisateur un accès gratuit aux services suivants :

                            Présentation de notre activité commerciale.

                            Plan d’accès à notre exploitation.

                            Contact

                        Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les frais supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section className="py-5 bg-dark cgu" id="article-3">
        <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
                <div className="col-lg-12">
                    <h2 className="fw-bolder title-gite">
                        Article 3 : Collecte des données
                    </h2>
                    <p className="regular text-muted mb-0 text-gite">
                    Le site assure à l'utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés.


En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles. L'Utilisateur exerce ce droit :

· via un formulaire de contact.
                    </p>
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