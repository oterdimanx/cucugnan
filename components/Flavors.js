import saffronImg from '../public/features-saffron-48-48.png'
import almondImg from '../public/features-almond-48-48.png'
import sichuanImg from '../public/features-sichuan-pepper-48-48.png'
import gojiImg from '../public/features-goji-baie-48-48.png'
import saltImg from '../public/features-aromatic-salt-48-48.png'
import pistachioImg from '../public/features-pistachio-48-48.png'
import oliveImg from '../public/features-olive-48-48.png'

export default function Flavors() {
    return (
        <>
            <section className="py-5" id="features">
                <div className="container px-5 my-5">
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5 mb-lg-0"><h2 className="fw-bolder mb-0">Nos Saveurs</h2></div>
                        <div className="col-lg-8">
                            <div className="row gx-5 row-cols-1 row-cols-md-2">
                                <div className="col mb-5 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <div className="flavors-ico">
                                            <img className="img-fluid rounded-3 my-5" src={saffronImg.src} alt="features-saffron-48-48.png image" />
                                        </div>
                                    </div>
                                    <h2 className="h5">Safran</h2>
                                    <p className="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                                </div>
                                <div className="col mb-5 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <div className="flavors-ico">
                                            <img className="img-fluid rounded-3 my-5" src={almondImg.src} alt="features-almond-48-48.png image" />
                                        </div>
                                    </div>
                                    <h2 className="h5">Amande</h2>
                                    <p className="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                                </div>
                                <div className="col mb-5 mb-md-0 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <div className="flavors-ico">
                                            <img className="img-fluid rounded-3 my-5" src={sichuanImg.src} alt="features-sichuan-pepper-48-48.png image" />
                                        </div>
                                    </div>
                                    <h2 className="h5">Poivre du Sichuan</h2>
                                    <p className="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                                </div>
                                <div className="col h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <div className="flavors-ico">
                                            <img className="img-fluid rounded-3 my-5" src={gojiImg.src} alt="features-goji-baie-48-48.png image" />
                                        </div>
                                    </div>
                                    <h2 className="h5">Baie de Goji</h2>
                                    <p className="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                                </div>
                                <div className="col mb-5 mb-md-0 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <div className="flavors-ico">
                                            <img className="img-fluid rounded-3 my-5" src={saltImg.src} alt="features-aromatic-salt-48-48.png image" />
                                        </div>
                                    </div>
                                    <h2 className="h5">Sel Aromatisé</h2>
                                    <p className="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                                </div>
                                <div className="col h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <div className="flavors-ico">
                                            <img className="img-fluid rounded-3 my-5" src={pistachioImg.src} alt="features-pistachio-48-48.png image" />
                                        </div>
                                    </div>
                                    <h2 className="h5">Pistache</h2>
                                    <p className="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                                </div>
                                <div className="col mb-5 mb-md-0 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <div className="flavors-ico">
                                            <img className="img-fluid rounded-3 my-5" src={oliveImg.src} alt="features-olive-48-48.png image" />
                                        </div>
                                    </div>
                                    <h2 className="h5">Olive</h2>
                                    <p className="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}