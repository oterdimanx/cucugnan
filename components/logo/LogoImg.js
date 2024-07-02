import logoImg from '../../public/golden-logo-text-transparent-400-496.png'
export default function LogoImg() {

    return (
        <div className="text-white rounded-3 mb-3">
            <img className="img-fluid rounded-3 my-1" src={logoImg.src} alt="Logo 400 image" />
        </div>
    );

};