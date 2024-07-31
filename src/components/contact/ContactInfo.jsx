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
    <div className="flex justify-center flex-col items-center gap-4 py-10 px-4 w-full bg-red-700 rounded-2xl">
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <H4
          title="Get in Touch for Expert Advisory"
          h4ExtraClass="text-white font-semibold text-center"
        />
        <Paragraph
          title="I’m here to help you with tailored solutions and strategic advice for your legal, financial, and investment needs. Whether you have questions, need a consultation, or want to discuss how I can assist your business, please reach out."
          text_color="text-white text-center lg:max-w-[800px]"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col justify-center items-center gap-2 py-2">
          <span className="flex justify-center items-center w-9 h-9 bg-purple50 rounded-full">
            <FontAwesomeIcon
              className="text-white text-base"
              icon={faLocation}
            />
          </span>
          <div>
            <span className="text-white block font-medium text-base mb-1 text-center">
              International House, 64 Nile Street, Londres, Royaume-Uni, N1 7SR
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-2 py-2">
          <span className="flex justify-center items-center w-9 h-9 bg-purple50 rounded-full">
            <FontAwesomeIcon className="text-white text-base" icon={faPhone} />
          </span>
          <div>
            <p className="text-white block font-medium text-base mb-1">
              <span className="block">+44 741 834 4386</span>
              <span className="block">+1 252 776 4643</span>
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-2 py-2">
          <span className="flex justify-center items-center w-9 h-9 bg-purple50 rounded-full">
            <FontAwesomeIcon
              className="text-white text-base"
              icon={faEnvelope}
            />
          </span>
          <div>
            <span className="text-white block font-medium text-base mb-1 text-center">
              nauvidbenza@benzagroupe.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactInfo;
