//import safranImg from '../public/products/cucugnan-nos-produits-safran-600-400.png'
import altSafranImg from '../public/products/cucugnan-nos-produits-safran-708-485.png'
import AmandeImg from '../public/products/cucugnan-nos-produits-amande-600-400.png'
import sichuanImg from '../public/products/cucugnan-nos-produits-sichuan-poivre-600-400.png'
import selImg from '../public/products/cucugnan-nos-produits-sel-aromatise-600-400.png'
import oliveImg from '../public/products/cucugnan-nos-produits-olive-600-400.png'
import gojiImg from '../public/products/cucugnan-nos-produits-baie-goji-600-400.png'
import pistacheImg from '../public/products/cucugnan-nos-produits-pistache-600-400.png'
import LogoImg from '@components/logo/LogoImg'

export default function Products() {
    return (
      <>
        <section className="bg-dark py-5">
            <div className="container px-5 my-5">
                <div className="text-center mb-5">
                    <h1 className="display-6 fw-bolder header-products">Nos produits</h1>
                    <p className="lead fw-normal text-muted mb-0">Les 7 saveurs de Cucugnan vous présente ses différentes épices, 
                    dont la vente se fait sur place. En attendant que les commandes puissent être passées via notre site, il vous faudra 
                    venir sur place pour les découvrir. Sinon, contactez-nous.</p>
                </div>
                <article className="postcard dark blue">
                    <div className="postcard__img_link">
                        <img className="postcard__img" src={altSafranImg.src} alt="Cucugnan Nos Produits Safran Image Png" id="saffron"  />
                    </div>
                    <div className="postcard__text">
                        <h1 className="postcard__title blue"><a href="./nos-produits#saffron">Le Safran</a></h1>
                        <div className="postcard__subtitle small">
                            <p>
                                L'or rouge de Crète
                            </p>
                        </div>
                        <div className="postcard__bar"></div>
                        <div className="postcard__preview-txt">
                            <p>
                                Il est originaire de Crète puis s'est répandu au Moyen-Orient, et fut cultivé pour les premières fois 
                                dans les provinces grecques par la civilisation Minoene il y a plus de 35 siècles.
                            </p>
                            <p>
                                Utilisé depuis l'Antiquité comme colorant, pour les orientaux, le safran est le symbole de la sagesse, ce 
                                qui explique pourquoi les moines bouddhistes ont adopté cette couleur pour leur tunique.
                            </p>
                            <p>
                                Le mot safran a une origine latine, "safranum" est tiré de l'arabo-persan "safranan", dérivant du mot "asfar", 
                                qui signifie "jaune".
                            </p>
                            <p>
                                Ramassé à la main sur les fleurs de crocus, il constitue une épice précieuse qui concurrence le prix de l'or, ce qui lui vaut le surnom d'or rouge.
                                Le safran est également connu pour ses bienfaits pour la flore intestinale et sa capacité stimulante pour l'estomac, 
                                il aide à trouver un meilleur sommeil et possède un effet relaxant. Par conséquent, beaucoup de sportifs l'utilisent pour son léger effet d'antidepresseur.
                            </p>
                            <p>
                                Il améliore la vision et aide à prévenir certaines maladies occulaires. Enfin, il constitue un puissant antioxydant, un anti-inflammatoire, 
                                réduit les symptômes liés à la dépression, tel que le stress, et certains lui confèrent des propriétés anti-cancéreuses.
                            </p>
                        </div>
                        <ul className="postcard__tagbox">
                            <li className="tag__item">
                                <a href="./gite">
                                    <i className="fas fa-tag mr-2"></i>
                                    Découvrez le gite
                                </a>
                            </li>
                            <li className="tag__item play blue">
                                <a href="./contact"><i className="fas fa-play mr-2"></i>Contactez-nous</a>
                            </li>
                        </ul>
                    </div>
                </article>
                <article className="postcard dark yellow">
                    <a className="postcard__img_link" href="./nos-produits#almond">
                        <img className="postcard__img" src={AmandeImg.src} alt="Cucugnan Nos Produits Amande Image" id="almond" />
                    </a>
                    <div className="postcard__text">
                        <h1 className="postcard__title yellow"><a href="./nos-produits#almond">L'amande</a></h1>
                        <div className="postcard__subtitle small">
                            <p>
                                Symbole de fertilité
                            </p>
                        </div>
                        <div className="postcard__bar"></div>
                        <div className="postcard__preview-txt">
                            <p>
                                Selon de nombreux écrits, l'amande serait originaire d'Asie occidentale et centrale, en particulier d'Afghanistan, et du Turkistan. 
                                Au fil des siècles, elle fut progressivement introduite dans d'autres régions du monde : l'amande s'est répandue en terre d'Egypte 
                                grâce aux hébreux, puis en Europe grâce aux grecs.
                                Les romains eux, voyaient l'amande comme le fruit symbolisant la fertilité. Lors des mariages, des amandes étaient ainsi lancées 
                                sur les mariés, et cette tradition a persisté, mais de nos jours les amandes sont remplacées par des dragées.
                            </p>
                            <p>
                                Riches en minéraux et en oligo-éléments, les amandes permettent de maintenir nos neurones en pleine santé. La vitamine E 
                                y est présente en grande quantité. Elle est riche en lipides, en Omega 6, et est remarquablement riche en protéines et minéraux 
                                tels que le fer, le magnésium et le calcium.
                                Elle représente donc un excellent complément dans le cadre d'une alimentation variée.
                                Depuis l'antiquité, l'amande occupe une place importante dans la patisserie orientale.
                            </p>
                            <p>
                                L'amandier au Prunus Dulcis fait partie de la famille des rosacées. De nombreuses études ont 
                                montré les effets positifs de la consommation d'amandes : réduction du cholestérol, stabilisation 
                                du taux de glycémie chez les diabétiques, elle constitue également une alliée contre les problèmes de constipation.
                            </p>
                        </div>
                        <ul className="postcard__tagbox">
                            <li className="tag__item">
                                <a href="./gite">
                                    <i className="fas fa-tag mr-2"></i>
                                    Découvrez le gite
                                </a>
                            </li>
                            <li className="tag__item play yellow">
                                <a href="./contact"><i className="fas fa-play mr-2"></i>Contactez-nous</a>
                            </li>
                        </ul>
                    </div>
                </article>
                <article className="postcard dark blue">
                    <a className="postcard__img_link" href="./nos-produits#sichuan">
                        <img className="postcard__img" src={sichuanImg.src} alt="Cucugnan Nos Produits Poivre du Sichuan Image" id="sichuan" />
                    </a>
                    <div className="postcard__text">
                        <h1 className="postcard__title blue"><a href="./nos-produits#sichuan">Le poivre du Sichuan</a></h1>
                        <div className="postcard__subtitle small">
                            <p>
                               Le poivre des hauteurs
                            </p>
                        </div>
                        <div className="postcard__bar"></div>
                        <div className="postcard__preview-txt">
                        <p>
                            Les européens ont découvert le poivre du Sichuan au XIIIe siècle lorsque Marco Polo en ramena de Venise. Il disparait des Tulles au XIXe siècle.
                            Il est vraisemblablement originaire de la région de Vinexia en Chine, ainsi que du Tibet.
                            Cultivé en altitude, cette baie rouge est légèrement sucrée, et possède une saveur aromatique très puissante.
                        </p>
                        <p>
                            Ce fruit sec appelé poivre chinois ou poivre fluus, est une épice asiatique tirée de la coque du fruit, qui 
                            fait partie de la famille des rutacées : zanthoxylum piperitum.
                            Il y a également le poivre du Timut originaire du Népal, le poivre sānshiāo du Japon, légèrement citronné. Ce poivre possède une saveur unique 
                            qui produit dans la bouche une sensation de picotement, à l'instar du piment, et il est légèrement anesthésiant.
                        </p>
                        <p>
                            Une fois séché et débarassé de ses graines (non comestibles), il possède un pouvoir anti-inflammatoire, 
                            antalgique, et anti-oxydant.
                            Il constitue un excellent nettoyeur de toxines, et d'acide lactique. Enfin, il réchauffe et décontracte en cas de courbatures, et de fatigues musculaires.
                        </p>
                        </div>
                        <ul className="postcard__tagbox">
                            <li className="tag__item">
                                <a href="./gite">
                                    <i className="fas fa-tag mr-2"></i>
                                    Découvrez le gite
                                </a>
                            </li>
                            <li className="tag__item play blue">
                                <a href="./contact"><i className="fas fa-play mr-2"></i>Contactez-nous</a>
                            </li>
                        </ul>
                    </div>
                </article>
                <article className="postcard dark yellow">
                    <a className="postcard__img_link" href="./nos-produits#goji">
                        <img className="postcard__img" src={gojiImg.src} alt="Cucugnan Nos Produits Baies de Goji Image" id="goji" />
                    </a>
                    <div className="postcard__text">
                        <h1 className="postcard__title yellow"><a href="./nos-produits#goji">Les baies de Goji</a></h1>
                        <div className="postcard__subtitle small">
                            <p>
                               18 acides aminés et 21 minéraux
                            </p>
                        </div>
                        <div className="postcard__bar"></div>
                        <div className="postcard__preview-txt">
                            <p>
                                La baie du lyciet est originaire de la région de Vinexia en Chine et a Tibet. &Eacute;galement cultivée en altitude, 
                                son nom lui a été donné en 1973 par un ethnobotaniste américain répondant au nom chinois de Gouqi. On accorde 
                                à cette baie rouge légèrement sucrée, des vertus médicinales exceptionnelles liées à la quête d'immortalité 
                                Taoiste.
                            </p>
                            <p>
                                Riches en vitamines, en minéraux et en oligo-éléments, elles constituent également un anti-oxydant grâce à ses quelques 
                                18 sortes d'acides aminés, un taux 8 fois supérieur au pollen.
                                Elles contiennent 21 minéraux, tels que le zinc, fer, cuivre, sélénium, manganèse, potassium et phosphore. Elles contiennent en 
                                proportion quasiment autant de calcium que le lait, et davantage de protéines que dans le blé, sans oublier ses 
                                vitamines B1, B2, B6, C et E.
                            </p>
                            <p>
                                Ainsi, les gojis permettent de renforcer les défenses immunitaires et de soulager le foie.
                            </p>
                        </div>
                        <ul className="postcard__tagbox">
                            <li className="tag__item">
                                <a href="./gite">
                                    <i className="fas fa-tag mr-2"></i>
                                    Découvrez le gite
                                </a>
                            </li>
                            <li className="tag__item play yellow">
                                <a href="./contact"><i className="fas fa-play mr-2"></i>Contactez-nous</a>
                            </li>
                        </ul>
                    </div>
                </article>
                <article className="postcard dark blue">
                    <a className="postcard__img_link" href="./nos-produits#salt">
                        <img className="postcard__img" src={selImg.src} alt="Cucugnan Nos Produits Sel Aromatisé Image" id="salt" />
                    </a>
                    <div className="postcard__text">
                        <h1 className="postcard__title blue"><a href="./nos-produits#salt">Le sel aromatisé</a></h1>
                        <div className="postcard__subtitle small">
                            <p>
                               L'or blanc des celtes
                            </p>
                        </div>
                        <div className="postcard__bar"></div>
                        <div className="postcard__preview-txt">
                            <p>
                                Le mot tire son origine de "salo" ou "sala" en gaulois. Les celtes furent en effet les premiers peuples à avoir porté 
                                l'exploitation du sel à un niveau international en Europe. Le sel était tout d'abord destiné à l'alimentation et à la consommation.
                            </p>
                            <p>
                                On distingue le gros sel, le sel fin et la fleur de sel. La fleur de sel est la partie supérieure la plus fine et la plus cristallisée 
                                du sel, se formant à la surface. Ce terme s'explique par le fait qu'elle soit récoltée à fleur d'eau. Elle améliore les fonctions 
                                respiratoires, et aide à stabiliser la pression sanguine.
                            </p>
                            <p>
                                Elle permet de prévenir les crampes musculaires car elle contient du magnésium, bénéfique pour les fonctionnement général de l'organisme.
                            </p>
                        </div>
                        <ul className="postcard__tagbox">
                            <li className="tag__item">
                                <a href="./gite">
                                    <i className="fas fa-tag mr-2"></i>
                                    Découvrez le gite
                                </a>
                            </li>
                            <li className="tag__item play blue">
                                <a href="./contact"><i className="fas fa-play mr-2"></i>Contactez-nous</a>
                            </li>
                        </ul>
                    </div>
                </article>
                <article className="postcard dark yellow">
                    <a className="postcard__img_link" href="./nos-produits#pistaccio">
                        <img className="postcard__img" src={pistacheImg.src} alt="Cucugnan Nos Produits Pistaches Image" id="pistaccio" />
                    </a>
                    <div className="postcard__text">
                        <h1 className="postcard__title yellow"><a href="./nos-produits#pistaccio">Les pistaches</a></h1>
                        <div className="postcard__subtitle small">
                            <p>
                               Un arôme unique venu de Perse
                            </p>
                        </div>
                        <div className="postcard__bar"></div>
                        <div className="postcard__preview-txt">
                            <p>
                                La pistache est originaire des hauts plateaux du Moyen Orient. Une région et une ville d'Iran, Kerman, ont donné 
                                leur nom à la variété la plus répandue. Elle est introduite sur le pourtour méditerrannéen et en Provence à l'époque romaine.
                            </p>
                            <p>
                                La pistache est un fruit sec Arlustra de la famille des Anacadiacées. Petite graine de couleur verte, elle peut être consommée 
                                grillée, comme les amandes. Les cellules qui la composent sont bénéfiques pour le système immunitaire, grâce aux vitamines B1, 
                                B6, B9 et au zinc, au manganèse et au magnésium.
                                Elle renferme 50% de matières grasses, dont plus de 82% d'acides gras non saturés, et 19% de protéines.
                            </p>
                            <p>
                                Cultivée dans l'ancien empire Perse, celui-ci s'étendit progressivement vers l'ouest, puis fut introduite en Méditerrannée sous le règne de l'empereur Tibère. 
                                La pistache serait apparue en France au XVIIe siècle, sous Louis XIV, via le port de Marseille. Sa composition en nutriments est très proche de celle des noix de cajou. 
                                Au niveau cardio-vasculaire, la pistache contribue à diminuer le taux de cholestérol. 
                                Une petite poignée de pistaches (environ 30 grammes) équivaut à 170 kcal, et constitue un bon apport en fibres.
                            </p>
                        </div>
                        <ul className="postcard__tagbox">
                            <li className="tag__item">
                                <a href="./gite">
                                    <i className="fas fa-tag mr-2"></i>
                                    Découvrez le gite
                                </a>
                            </li>
                            <li className="tag__item play yellow">
                                <a href="./contact"><i className="fas fa-play mr-2"></i>Contactez-nous</a>
                            </li>
                        </ul>
                    </div>
                </article>
                <article className="postcard dark blue">
                    <a className="postcard__img_link" href="./nos-produits#olive">
                        <img className="postcard__img" src={oliveImg.src} alt="Cucugnan Nos Produits Olives Image" id="olive" />
                    </a>
                    <div className="postcard__text">
                        <h1 className="postcard__title blue"><a href="./nos-produits#olive">Les olives</a></h1>
                        <div className="postcard__subtitle small">
                            <p>
                               Parmi les plus vieux fruits de notre Monde
                            </p>
                        </div>
                        <div className="postcard__bar"></div>
                        <div className="postcard__preview-txt">
                            <p>
                                Les olives font partie des plus anciens fruits cultivés dans le monde. Elles seraient apparues d'abord en Crète, 
                                avant de se propager vers l'Egypte, la Palestine, et l'Asie Mineure.
                                Les premières traces de domestication de l'olivier sont datées de 5500 avant Jesus Christ, dans les Pyrénées orientales et l'Espagne.
                                L'huile d'olive était utilisée pour les sarcophages des pharaons.
                            </p>
                            <p>
                                Elle protège notre système digestif grâce à son pouvoir émulsifiant, et permet de réduire le taux de <b>mauvais</b> cholestérol et des triglycidides dans le sang. Ses propriétés anti-inflammatoires et anti-bactériennes améliorent la santé digestive.
                            </p>
                            <p>
                                Les olives sont riches en vitamine E, constituent un puissant anti-oxydant, et protège notre corps grâce à la vitamine K1.
                                Riches en fer et en sélénium, elles stimulent notre système immunitaire.
                            </p>
                        </div>
                        <ul className="postcard__tagbox">
                            <li className="tag__item">
                                <a href="./gite">
                                    <i className="fas fa-tag mr-2"></i>
                                    Découvrez le gite
                                </a>
                            </li>
                            <li className="tag__item play blue">
                                <a href="./contact"><i className="fas fa-play mr-2"></i>Contactez-nous</a>
                            </li>
                        </ul>
                    </div>
                </article>
                <div className="row gx-5 row-cols-1 row-cols-lg-4 py-5 justify-content-center">
                    <div className="col">
                        <LogoImg />
                    </div>
                </div>
	        </div>
        </section>
      </>
    )
  }