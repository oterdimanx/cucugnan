import saffronImg from '../public/flavors/features-saffron-48-48.png'
import almondImg from '../public/flavors/features-almond-48-48.png'
import sichuanImg from '../public/flavors/features-sichuan-pepper-48-48.png'
import gojiImg from '../public/flavors/features-goji-baie-48-48.png'
import saltImg from '../public/flavors/features-aromatic-salt-48-48.png'
import pistachioImg from '../public/flavors/features-pistachio-48-48.png'
import oliveImg from '../public/flavors/features-olive-48-48.png'

export default function Flavors() {
    return (
        <>
            <section className="py-5" id="features">
                <div className="container px-5 my-5">
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h2 className="fw-bolder mb-0 flavor-text-head">Nos Saveurs</h2>
                            <p>
                                Nos plantations, et les épices produites ici, répondent à trois critères et sont garanties :
                            </p>
                            <ul>
                                    <li>sans aucun traitement</li>
                                    <li>sans produit chimique</li>
                                    <li>uniquement alimentées avec des engrais <b>bio</b></li>
                            </ul>
                            <p>
                                Cette terre rouge argilo-calcaire est remplie de minéraux, l'<u>idéal</u> pour une production saine, et 
                                selon des procédés entièrement naturels.
                            </p>
                            <p>
                                C'est la garantie d'un terroir équilibré et calibré pour toutes ces plantations, ayant la capacité 
                                d'apporter une alimentation enrichie en fer et en nutriments.
                            </p>
                            <p>
                                Cette terre ocrée est le fruit de gisements de sels créés par la disparition de la <b>mer</b>.
                                Ainsi, les cultures résultantes sont enrichies en potassium et en magnésium.
                            </p>
                        </div>

                        <div className="col mb-5 h-100 toggle-saffron">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <div className="flavors-ico">
                                            <img className="img-fluid rounded-3 my-5" src={saffronImg.src} alt="features-saffron-48-48.png image" />
                                        </div>
                                    </div>
                                    <h2 className="h5">
                                        <a href="./nos-produits#saffron">
                                            Safran
                                        </a>
                                    </h2>
                                    <p className="mb-0 feature-card-text">
                                        Réputé pour ses saveurs riches et sa teinte vibrante, le safran est à lui seul un pur concentré de bien-être :
                                    </p>
                                    <ul>
                                        <li>
                                            <div>
                                                riche en antioxydants, il contribue à conserver un système immunitaire sain, grâce à certaines propriétés
                                                anti-inflammatoires.
                                            </div>
                                        </li>
                                    </ul>
                                    <p className="mb-0 feature-card-text">
                                        Le safran élève les plats en nourrissant le corps.
                                    </p>
                                </div>
                        <div className="col-lg-8">
                            <div className="row gx-5 row-cols-1 row-cols-md-2">
                                <div className="col mb-5 h-100 saffron">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <div className="flavors-ico">
                                            <img className="img-fluid rounded-3 my-5" src={saffronImg.src} alt="features-saffron-48-48.png image" />
                                        </div>
                                    </div>
                                    <h2 className="h5">
                                        <a href="./nos-produits#saffron">
                                            Safran
                                        </a>
                                    </h2>
                                    <p className="mb-0 feature-card-text">
                                        Réputé pour ses saveurs riches et sa teinte vibrante, le safran est à lui seul un pur concentré de bien-être :
                                    </p>
                                    <ul>
                                        <li>
                                            <div>
                                                riche en antioxydants, il contribue à conserver un système immunitaire sain, grâce à certaines propriétés
                                                anti-inflammatoires.
                                            </div>
                                        </li>
                                    </ul>
                                    <p className="mb-0 feature-card-text">
                                        Le safran élève les plats en nourrissant le corps.
                                    </p>
                                </div>
                                <div className="col mb-5 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <div className="flavors-ico">
                                            <img className="img-fluid rounded-3 my-5" src={almondImg.src} alt="features-almond-48-48.png image" />
                                        </div>
                                    </div>
                                    <h2 className="h5">
                                        <a href="./nos-produits#almond">
                                            Amande
                                        </a>
                                    </h2>
                                    <p className="mb-0 feature-card-text">
                                        Les amandes sont également synonymes de santé et de vitalité. 
                                    </p>
                                    <p className="mb-0 feature-card-text">
                                        Riches en vitamine E, en magnésium et en bonnes graisses, les amandes favorisent 
                                        la santé cardiaque, et aident à maintenir les fonctions cérébrales en bonne forme. 
                                    </p>
                                    <p className="mb-0 feature-card-text">
                                        Elles sont également bonnes pour la peau et les cheveux, révélant leur bienfaits intemporels.
                                    </p>
                                </div>
                                <div className="col mb-5 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <div className="flavors-ico">
                                            <img className="img-fluid rounded-3 my-5" src={sichuanImg.src} alt="features-sichuan-pepper-48-48.png image" />
                                        </div>
                                    </div>
                                    <h2 className="h5">
                                        <a href="./nos-produits#sichuan">
                                            Poivre du Sichuan
                                        </a>
                                    </h2>
                                    <p className="mb-0 feature-card-text">
                                        Issu du coeur de la tradition culinaire chinoise, le poivre du Sichuan a la réputation d'apporter à celui qui le consomme 
                                        une unique et légère sensation d'engourdissement, et ses touches d'agrumes ajoutent toujours du dynamisme à vos plats.
                                    </p>
                                    <p className="mb-0 feature-card-text">
                                        Cette catégorie particulière de poivre possède également des vertus médicinales, facilitant la digestion, et soulageant certains maux.
                                    </p>
                                    <p className="mb-0 feature-card-text">
                                        Le poivre du Sichuan présente enfin un fort caractère symbolique, présent dans certains rituels et célébrations traditionnelles chinoises.
                                    </p>
                                </div>
                                <div className="col mb-5 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <div className="flavors-ico">
                                            <img className="img-fluid rounded-3 my-5" src={gojiImg.src} alt="features-goji-baie-48-48.png image" />
                                        </div>
                                    </div>
                                    <h2 className="h5">
                                        <a href="./nos-produits#goji">
                                            Baie de Goji
                                        </a>
                                    </h2>
                                    <p className="mb-0 feature-card-text">
                                        Originaires des luxuriantes vallées d'Asie, ces minuscules gemmes rouges sont à la fois une friandise, et un élément essentiel pour certaines traditions culturelles. 
                                    </p>
                                    <p className="mb-0 feature-card-text">
                                        Favorisant le bien-être général avec leurs antioxydants, vitamines, et minéraux, 
                                    </p>
                                    <ul>
                                        <li>
                                            <div>
                                                elles renforcent aussi le système immunitaire, 
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                aident à garder une belle peau, 
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                et contribuent à la santé oculaire.
                                            </div>
                                        </li>
                                    </ul>
                                    <p className="mb-0 feature-card-text">
                                        Dans la culture chinoise, elles améliorent vitalité et 
                                        longévité à celui qui les consomme.
                                    </p>
                                </div>
                                <div className="col mb-5 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <div className="flavors-ico">
                                            <img className="img-fluid rounded-3 my-5" src={saltImg.src} alt="features-aromatic-salt-48-48.png image" />
                                        </div>
                                    </div>
                                    <h2 className="h5">
                                        <a href="./nos-produits#salt">
                                            Sel Aromatisé
                                        </a>
                                    </h2>
                                    <p className="mb-0 feature-card-text">
                                        Infusé d'herbes parfumées, d'épices et d'huiles essentielles, notre sel aromatisé vous fera voyager grâce à son goût relevé et complexe.
                                    </p>
                                    <p className="mb-0 feature-card-text">
                                        Riches en minéraux et en composés thérapeutiques,
                                    </p>
                                    <ul>
                                        <li>
                                            <div>
                                                les sels aromatisés apaisent les muscles,
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                et favorisent la relaxation du corps.
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                et contribuent à la santé oculaire.
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col mb-5 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <div className="flavors-ico">
                                            <img className="img-fluid rounded-3 my-5" src={pistachioImg.src} alt="features-pistachio-48-48.png image" />
                                        </div>
                                    </div>
                                    <h2 className="h5">
                                        <a href="./nos-produits#pistaccio">
                                            Pistache
                                        </a>
                                    </h2>
                                    <p className="mb-0 feature-card-text">
                                        Originaires des anciennes terres du Moyen-Orient, les pistaches sont chéries depuis des millénaires comme symboles de vitalité et d'abondance. 
                                    </p>
                                    <p className="mb-0 feature-card-text">
                                        Regorgeant d'élements nutritifs, ces petits joyaux d'émeraude offrent une pléthore d'avantages pour la santé : 
                                    </p>
                                    <ul>
                                        <li>
                                            <div>
                                                graisses saines,
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                fibres,
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                antioxydants, 
                                            </div>
                                        </li>
                                    </ul>
                                    <p className="mb-0 feature-card-text">
                                        Elles contribuent à la bonne santé cardio vasculaire, et se déclinent en une myriade de possibilités culinaires différentes.
                                    </p>
                                </div>
                                <div className="col mb-5 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <div className="flavors-ico">
                                            <img className="img-fluid rounded-3 my-5" src={oliveImg.src} alt="features-olive-48-48.png image" />
                                        </div>
                                    </div>
                                    <h2 className="h5">
                                        <a href="./nos-produits#olive">
                                            Olive
                                        </a>
                                    </h2>
                                    <p className="mb-0 feature-card-text">
                                        Derrière les bosquets du climat méditerrannéen, les olives représentent richesse culturelle, et saveurs intenses. 
                                    </p>
                                    <p className="mb-0 feature-card-text">
                                        Leurs graisses saines, et leurs antioxydants ne sont pas les seules propriétés qui ont fait des olives de véritables pierres angulaires de la cuisine du sud de la France. 
                                    </p>
                                    <p className="mb-0 feature-card-text">
                                        Idéales pour les plats salés, salades, en huile, elles se dégustent également comme des simples fruits.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}