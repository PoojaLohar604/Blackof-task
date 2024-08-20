import footerBackground from '../assets/Footer.png';
import logo from '../assets/smart lights_logo.svg';


const Footer = () => {
  return (
    <footer
      className=" text-white py-20 "
      style={{
        backgroundImage: `url(${footerBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <img src={logo} alt='logo'/>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 ">
          <a href="#product" className="mx-2">Product</a>
          <a href="#services" className="mx-2">Software Services</a>
          <a href="#follow" className="mx-2">Follow Us</a>
        </div>
      </div>
      
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-40">
     
        <div className="flex flex-col md:flex-row items-center">
        
          <a href="#privacy" className="mx-2">Privacy Policy | </a>
          <a href="#terms" className="mx-2">Terms & Conditions | </a>
          <a href="#cookie" className="mx-2"> Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
