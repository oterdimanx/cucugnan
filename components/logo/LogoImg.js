import logoImg from '../../public/golden-logo-text-transparent-800-800.png'
export default function LogoImg() {

    return (
        <div className="text-white rounded-3 mb-3">
            <img className="img-fluid rounded-3 my-5" src={logoImg.src} alt="Logo 800 image" />
        </div>
    );

};