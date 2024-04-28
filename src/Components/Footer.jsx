import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-zinc-50 text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
        <div className="me-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex justify-center text-licorice">
          <a href="#!" className="me-6 hover:text-primary">
            <FontAwesomeIcon icon={faFacebook} className="h-4 w-4" />
          </a>
          <a href="#!" className="me-6 hover:text-primary">
            <FontAwesomeIcon icon={faTwitter} className="h-4 w-4" />
          </a>
          <a href="#!" className="me-6 hover:text-primary">
            <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" />
          </a>
          <a href="#!" className="me-6 hover:text-primary">
            <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4" />
          </a>
          <a href="#!" className="hover:text-primary">
            <FontAwesomeIcon icon={faYoutube} className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <span className="me-3 hover:text-primary">
              <img src="./src/assets/LogoBranherick.png" alt="" className="w-32"/>
                
              </span>
            </h6>
            <p>
            BranHerick is a dynamic and innovative company dedicated to providing comprehensive business solutions, world-class training programs, and transformative team-building experiences.
            </p>
          </div>
          
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-harvestGold">
              Products
            </h6>
            <p className="mb-4">
              <a href="#!">Consultation</a>
            </p>
            <p className="mb-4">
              <a href="#!">Team Building</a>
            </p>
            <p className="mb-4">
              <a href="#!">Event Production</a>
            </p>
            <p>
              <a href="#!">Tours and Travel</a>
            </p>
          </div>
          
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-harvestGold">
            Quick Links
            </h6>
            <p className="mb-4">
              <a href="#!">Company overview</a>
            </p>
            <p className="mb-4">
              <a href="#!">Company history</a>
            </p>
            <p className="mb-4">
              <a href="#!">Partners</a>
            </p>
            <p>
              <a href="#!">Careers</a>
            </p>
          </div>
        
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-harvestGold">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3 hover:text-primary">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5 text-licorice" />
              </span>
              Posta Apartments, Ring Road Westlands, Nairobi - Kenya
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3 hover:text-primary">
                <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 text-licorice" />
              </span>
              info@branherickholdingslimited.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3 hover:text-primary">
                <FontAwesomeIcon icon={faPhoneAlt} className="h-5 w-5 text-licorice" />
              </span>
              +254 733 139 202
            </p>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="bg-black/5 p-6 text-center">
        <span>© 2024 Copyright:</span>
        <a className="font-semibold" href="#">
        BranHerick Holdings Ltd Powered by Chief Hiro Fitzwanga - Vinjari Africa
        </a>
      </div>
    </footer>
  );
};

export default Footer;
