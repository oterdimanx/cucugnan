import logoImg from '../../public/golden-logo-text-transparent-556-654.png'
export default function LogoImg() {

    return (
        <div className="text-white rounded-3 mb-3">
            <img className="img-fluid rounded-3 my-5" src={logoImg.src} alt="Logo 556 image" />
        </div>
    );

};