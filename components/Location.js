//import cucugnanMapImg from '../public/map-cucugnan.png'
import Map from '@components/map/Map'

export default function Location() {
    return (
        <>
            <section className="py-5 bg-light" id="feedbacks">
                <div className="container px-5 my-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6">
                            <div className="text-center">
                                <h2 className="fw-bolder">Où sommes-nous ?</h2>
                                <p className="lead fw-normal text-muted mb-5">
                                    Dans la région des Corbières, à Cucugnan, nous saurons vous faire profiter 
                                    pleinement des senteurs de la garrigue. Veuillez consulter ci-dessous le plan d'accès.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-md-auto">
                            <div className="card h-100 shadow border-0">
                                <Map class="w-100" height="400" />
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">Routes</div>
                                    <a className="text-decoration-none link-dark stretched-link" href="#!">
                                        <h5 className="card-title mb-3">
                                            Rejoignez nous via l'autoroute xx puis par les départementales Dxx ou Dxx en provenance de xxx.
                                        </h5>
                                    </a>
                                    <p className="card-text mb-0">
                                        Chemin de Granan
                                        11350
                                        Cucugnan
                                    </p>
                                </div>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div className="d-flex align-items-end justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                                            <div className="small">
                                                <div className="fw-bold">Vincent Xxxxxx</div>
                                                <div className="text-muted">0673690470</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}