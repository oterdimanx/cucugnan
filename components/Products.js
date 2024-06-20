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
                        <h1 className="display-6 fw-bolder header-products">Les 7 saveurs de Cucugnan</h1>
                        <p className="lead fw-normal text-muted mb-0">Nos produits</p>
                    </div>
                    <div className="row gx-5">
                        <div className="col-lg-6">
                            <div className="col-lg-12">
                                <div className="position-relative">
                                    <div className="product-main">
                                        <div className="position-relative mb-5 main-img">
                                            <img className="img-fluid rounded-3 mb-3 mx-auto d-block" src={altSafranImg.src} alt="Cucugnan Nos Produits Safran Image Png" id="saffron" />
                                            <h3 className="h3 fw-bolder">Le safran</h3>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row gx-5">
                                <div className="col-lg-6 product-first-line">
                                    <div className="position-relative mb-5">
                                        <img className="img-fluid rounded-3 mb-3" src={AmandeImg.src} alt="Cucugnan Nos Produits Amande Image" id="almond" />
                                        <h4 className="h4">L'amande</h4>
                                        <p className="product-text-first-row rounded-1">
                                            Selon de nombreux écrits, l'amande serait originaire d'Asie occidentale et centrale, en particulier d'Afghanistan, et du Turkistan. 
                                            Au fil des siècles, elle fut progressivement introduite dans d'autres régions du monde : l'amande s'est répandue en terre d'Egypte 
                                            grâce aux hébreux, puis en Europe grâce aux grecs.
                                            Les romains eux, voyaient l'amande comme le fruit symbolisant la fertilité. Lors des mariages, des amandes étaient ainsi lancées 
                                            sur les mariés, et cette tradition a persisté, mais de nos jours les amandes sont remplacées par des dragées.
                                        </p>
                                        <p className="product-text-first-row rounded-1">
                                            Riches en minéraux et en oligo-éléments, les amandes permettent de maintenir nos neurones en pleine santé. La vitamine E 
                                            y est présente en grande quantité. Elle est riche en lipides, en Omega 6, et est remarquablement riche en protéines et minéraux 
                                            tels que le fer, le magnésium et le calcium.
                                            Elle représente donc un excellent complément dans le cadre d'une alimentation variée.
                                            Depuis l'antiquité, l'amande occupe une place importante dans la patisserie orientale.
                                        </p>
                                        <p className="product-text-first-row rounded-1">
                                            L'amandier au Prunus Dulcis fait partie de la famille des rosacées. De nombreuses études ont 
                                            montré les effets positifs de la consommation d'amandes : réduction du cholestérol, stabilisation 
                                            du taux de glycémie chez les diabétiques, elle constitue également une alliée contre les problèmes de constipation.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 product-white">
                                    <div className="position-relative mb-5">
                                        <img className="img-fluid rounded-3 mb-3" src={sichuanImg.src} alt="Cucugnan Nos Produits Poivre du Sichuan Image" id="sichuan" />
                                        <h4 className="h4">Le poivre du Sichuan</h4>
                                        <p className="product-text rounded-1">
                                            Les européens ont découvert le poivre du Sichuan au XIIIe siècle lorsque Marco Polo en ramena de Venise. Il disparait des Tulles au XIXe siècle.
                                            Il est vraisemblablement originaire de la région de Vinexia en Chine, ainsi que du Tibet.
                                            Cultivé en altitude, cette baie rouge est légèrement sucrée, et possède une saveur aromatique très puissante.
                                        </p>
                                        <p className="product-text rounded-1">
                                            Ce fruit sec appelé poivre chinois ou poivre fluus, est une épice asiatique tirée de la coque du fruit, qui 
                                            fait partie de la famille des rutacées : zanthoxylum piperitum.
                                            Il y a également le poivre du Timut originaire du Népal, le poivre sānshiāo du Japon, légèrement citronné. Ce poivre possède une saveur unique 
                                            qui produit dans la bouche une sensation de picotement, à l'instar du piment, et il est légèrement anesthésiant.
                                        </p>
                                        <p className="product-text rounded-1">
                                            Une fois séché et débarassé de ses graines (non comestibles), il possède un pouvoir anti-inflammatoire, 
                                            antalgique, et anti-oxydant.
                                            Il constitue un excellent nettoyeur de toxines, et d'acide lactique. Enfin, il réchauffe et décontracte en cas de courbatures, et de fatigues musculaires.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row gx-5">
                                <div className="col-lg-6 product-white">
                                    <div className="position-relative mb-5">
                                        <img className="img-fluid rounded-3 mb-3" src={gojiImg.src} alt="Cucugnan Nos Produits Baies de Goji Image" id="goji" />
                                        <h4 className="h4">Les baies de Goji</h4>
                                        <p className="product-text rounded-1">
                                            La baie du lyciet est originaire de la région de Vinexia en Chine et a Tibet. Cultivé en altitude, 
                                            son nom lui a été donné en 1973 par un ethnobotaniste américain répondant au nom chinois de Gouqi. On accorde 
                                            à cette baie rouge légèrement sucrée, des vertus médicinales exceptionnelles liées à la quête d'immortalité 
                                            Taoiste.
                                        </p>
                                        <p className="product-text rounded-1">
                                            Riche en vitamines, en minéraux et en oligo-éléments, il constitue également un anti-oxydant grâce à ses quelques 
                                            18 sortes d'acides aminés, un taux 8 fois supérieur au pollen.
                                            Il contient 21 minéraux, tels que le zinc, fer, cuivre, sélénium, manganèse, potassium et phosphore. Il contient en 
                                            proportion quasiment autant de calcium que le lait, et davantage de protéines que dans le blé, sans oublier ses 
                                            vitamines B1, B2, B6, C et E.
                                        </p>
                                        <p className="product-text rounded-1">
                                            Ainsi, les gojis permettent de renforcer les défenses immunitaires et de soulager le foie.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 product-first-line">
                                    <div className="position-relative mb-5">
                                        <img className="img-fluid rounded-3 mb-3" src={selImg.src} alt="Cucugnan Nos Produits Sel Aromatisé Image" id="salt" />
                                        <h4 className="h4">Le sel aromatisé</h4>
                                        <p className="product-text rounded-1">
                                            Le mot tire son origine de "salo" ou "sala" en gaulois. Les celtes furent en effet les premiers peuples à avoir porté 
                                            l'exploitation du sel à un niveau international en Europe. Le sel était tout d'abord destiné à l'alimentation et à la consommation.
                                        </p>
                                        <p className="product-text rounded-1">
                                            On distingue le gros sel, le sel fin et la fleur de sel. La fleur de sel est la partie supérieure la plus fine et la plus cristallisée 
                                            du sel, se formant à la surface. Ce terme s'explique par le fait qu'elle soit récoltée à fleur d'eau. Elle améliore les fonctions 
                                            respiratoires, et aide à stabiliser la pression sanguine.
                                        </p>
                                        <p className="product-text rounded-1">
                                            Elle permet de prévenir les crampes musculaires car elle contient du magnésium, bénéfique pour les fonctionnement général de l'organisme.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row gx-5">
                                <div className="col-lg-6 product-first-line">
                                    <div className="position-relative mb-5">
                                        <img className="img-fluid rounded-3 mb-3" src={pistacheImg.src} alt="Cucugnan Nos Produits Pistaches Image" id="pistaccio" />
                                        <h4 className="h4">Les pistaches</h4>
                                        <p className="product-text rounded-1">
                                            La pistache est originaire des hauts plateaux du Moyen Orient. Une région et d'une ville d'Iran, Kerman, ont donné 
                                            leur nom à la variété la plus répandue. Elle est introduite sur le pourtour méditerrannéen et en Provence à l'époque romaine.
                                        </p>
                                        <p className="product-text rounded-1">
                                            La pistache est un fruit sec Arlustra de la famille des Anacadiacées. Petite graine de couleur verte, elle peut être consommée 
                                            grillée, comme les amandes. Les cellules qui la composent sont bénéfiques pour le système immunitaire, grâce aux vitamines B1, 
                                            B6, B9 et au zinc, au manganèse et au magnésium.
                                            Elle renferme 50% de matières grasses, dont plus de 82% d'acides gras non saturés, et 19% de protéines.
                                        </p>
                                        <p className="product-text rounded-1">
                                            Cultivée dans l'ancien empire Perse, celui-ci s'étendit progressivement vers l'ouest, puis fut introduite en Méditerrannée sous le règne de l'empereur Tibère. 
                                            La pistache serait apparue en France au XVIIe siècle, sous Louis XIV, via le port de Marseille. Sa composition en nutriments est très proche de celle des noix de cajou. 
                                            Au niveau cardio-vasculaire, la pistache contribue à diminuer le taux de cholestérol. 
                                            Une petite poignée de pistaches (environ 30 grammes) équivaut à 170 kcal, et constitue un bon apport en fibres.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 product-white">
                                    <div className="position-relative mb-5">
                                        <img className="img-fluid rounded-3 mb-3" src={oliveImg.src} alt="Cucugnan Nos Produits Olives Image" id="olive" />
                                        <h4 className="h4">Les olives</h4>
                                        <p className="product-text rounded-1">
                                            Les olives font partie des plus anciens fruits cultivés dans le monde. Elles seraient apparues d'abord en Crète, 
                                            avant de se propager vers l'Egypte, la Palestine, et l'Asie Mineure.
                                            Les premières traces de domestication de l'olivier sont datées de 5500 avant Jesus Christ, dans les Pyrénées orientales et l'Espagne.
                                            L'huile d'olive était utilisée pour les sarcophages des pharaons.
                                        </p>
                                        <p className="product-text rounded-1">
                                            Elle protège notre système digestif grâce à son pouvoir émulsifiant, et permet de réduire le taux de <b>mauvais</b> 
                                            cholestérol et des triglycidides dans le sang. Ses propriétés anti-inflammatoires et anti-bactériennes améliorent la santé digestive.
                                        </p>
                                        <p className="product-text rounded-1">
                                            Les olives sont riches en vitamine E, constituent un puissant anti-oxydant, et protège notre corps grâce à la vitamine K1.
                                            Riches en fer et en sélénium, elles stimulent notre système immunitaire.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
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