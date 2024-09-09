import RaymLogoImage from '/src/assets/RAYM_logo.png';

const RaymLogo = () => {
    return (
        <div className="w-full h-full">
            <img src={RaymLogoImage} alt="Raymote.it" className="w-full h-full object-cover" />
        </div>
    );
};

export default RaymLogo;