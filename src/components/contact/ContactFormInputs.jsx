import Button from "../Button";
import Label from "../Label";
import ContactFormBusinessBuget from "./ContactFormBusinessBuget";
import ContactFormNameEmail from "./ContactFormNameEmail";
const ContactFormInputs = () => {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-4">
      <ContactFormNameEmail />
      {/* <ContactFormBusinessBuget /> */}
      <div className="w-full flex flex-col justify-center items-start gap-1 ">
        <Label
          labelHtmlFor="message"
          labelTitle="Describe your project or request"
        />
        <div className="border border-purple50 rounded-2xl w-full">
          <textarea name="message" className="w-full" rows="7"></textarea>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="bg-red-700 text-white text-base w-20 py-2 rounded-lg hover:bg-red-800 shadow-2xl shadow-red-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};
export default ContactFormInputs;
