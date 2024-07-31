import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Paragraph from "../Paragraph";
import H4 from "../H4";
const ContactInfo = () => {
  return (
    <div className="hidden lg:flex lg:justify-center lg:flex-col lg:items-center lg:gap-4 lg:p-10 lg:w-full lg:bg-red-700 lg:rounded-2xl">
      <div className="lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-4">
        <H4
          title="Get in Touch for Expert Advisory"
          h4ExtraClass="lg:text-white lg:font-semibold"
        />
        <Paragraph
          title="I’m here to help you with tailored solutions and strategic advice for your legal, financial, and investment needs. Whether you have questions, need a consultation, or want to discuss how I can assist your business, please reach out."
          text_color="text-white"
        />
      </div>
      <div className="lg:w-full lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-4">
        <div className="lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-2 lg:py-2">
          <span className="lg:flex lg:justify-center lg:items-center lg:w-9 lg:h-9 lg:bg-purple50 lg:rounded-full">
            <FontAwesomeIcon
              className="text-white text-base"
              icon={faLocation}
            />
          </span>
          <div>
            <span className="lg:text-white lg:block lg:font-medium lg:text-base lg:mb-1">
              International House, 64 Nile Street, Londres, Royaume-Uni, N1 7SR
            </span>
          </div>
        </div>
        <div className="lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-2 lg:py-2">
          <span className="lg:flex lg:justify-center lg:items-center lg:w-9 lg:h-9 lg:bg-purple50 lg:rounded-full">
            <FontAwesomeIcon className="text-white text-base" icon={faPhone} />
          </span>
          <div>
            <p className="lg:text-white lg:block lg:font-medium lg:text-base lg:mb-1">
              <span className="block">+44 741 834 4386</span>
              <span className="block">+1 252 776 4643</span>
            </p>
          </div>
        </div>
        <div className="lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-2 lg:py-2">
          <span className="lg:flex lg:justify-center lg:items-center lg:w-9 lg:h-9 lg:bg-purple50 lg:rounded-full">
            <FontAwesomeIcon
              className="text-white text-base"
              icon={faEnvelope}
            />
          </span>
          <div>
            <span className="lg:text-white lg:block lg:font-medium lg:text-base lg:mb-1">
              nauvidbenza@benzagroupe.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactInfo;
