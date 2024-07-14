//faChartSimple, faBook, faBullseye
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faBook,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";

//Import Images for services
import benzaAccount from "./assets/images/benzaAccount.jpg";
import benzaAccount2 from "./assets/images/benzaAccount2.jpg";
import benzaAccount3 from "./assets/images/benzaAccount3.jpg";

//Blog Images
import blog1 from "./assets/images/blog1.png";
import blog2 from "./assets/images/blog2.png";
import blog3 from "./assets/images/blog3.png";

//ENd Import Images for services
const $faChartSimple = <FontAwesomeIcon icon={faChartSimple} />;
const $faBook = <FontAwesomeIcon icon={faBook} />;
const $faBullseye = <FontAwesomeIcon icon={faBullseye} />;
export const approaches = [
  {
    id: 1,
    icon: $faChartSimple,
    title: "Proven expertise in strategic financial guidance",
    paragraph:
      "Our professionals offer tailored advice to optimize financial strategies for your business's sustainable growth.",
  },
  {
    id: 2,
    icon: $faBook,
    title: "Innovative technology for streamlined operations",
    paragraph:
      "Utilizing cutting-edge tech, we ensure seamless processes and accurate data management.",
  },
  {
    id: 3,
    icon: $faBullseye,
    title: "Dependable accuracy in reporting and analysis",
    paragraph:
      "Count on us for precise reporting and analysis, providing a solid foundation for your business.",
  },
];

export const howWeWorkSections = [
  {
    id: 1,
    img: "bg-howWeWork_1",
    title: "We capitalize on our biggest strengths",
    para: "Delivering high-quality products or services consistently builds trust and establishes a reputation.",
    link: "#",
  },
  {
    id: 2,
    img: "bg-howWeWork_2",
    title: "We take a proactive approach to tech",
    para: "A great business plan serves as a roadmap for the company's growth, helping to secure funding.",
    link: "#",
  },
  {
    id: 3,
    img: "bg-howWeWork_3",
    title: "We capitalize on our biggest strengths",
    para: "Delivering high-quality products or services consistently builds trust and establishes a reputation.",
    link: "#",
  },
];

export const services = [
  {
    id: 1,
    smallTitle: "BookKeeping",
    title: "Efficient bookkeeping solutions for organized financial management",
    paragraph:
      "Efficient bookkeeping, tracking expenses, and managing cash flow.",
    points: ["expert method", "expert method 2", "expert method 3"],
    link: "#",
    img: benzaAccount,
    row: "sm:flex-row",
  },
  {
    id: 2,
    smallTitle: "BookKeeping2",
    title:
      "Efficient bookkeeping solutions for organized financial management 2",
    paragraph:
      "Efficient bookkeeping, tracking expenses, and managing cash flow.2",
    points: ["expert method 4", "expert method 5", "expert method 6"],
    link: "#",
    img: benzaAccount2,
    row: "sm:flex-row-reverse",
  },
  {
    id: 3,
    smallTitle: "BookKeeping3",
    title:
      "Efficient bookkeeping solutions for organized financial management 3",
    paragraph:
      "Efficient bookkeeping, tracking expenses, and managing cash flow.3",
    points: ["expert method 7", "expert method 8", "expert method 9"],
    link: "#",
    img: benzaAccount3,
    row: "sm:flex-row",
  },
];

//Blog post
export const blogs = [
  {
    id: 1,
    img: blog1,
    author: "kamba",
    published_date: "16 August 2024",
    title: "10 Essential SEO Tips to Boost Your Website's Ranking",
    description:
      "Are you looking to improve your website's visibility and attract more organic traffic?",
    link: "#",
  },
  {
    id: 2,
    img: blog2,
    author: "tuke",
    published_date: "06 October 2024",
    title: "The Power of PPC Advertising: How to Maximize Your ROI",
    description:
      "Unlock the full potential of your digital marketing strategy with the power of PPC.",
    link: "#",
  },
  {
    id: 3,
    img: blog3,
    author: "charles",
    published_date: "26 October 2024",
    title: "The Importance of Responsive Web Design in the Mobile Age",
    description:
      "Where mobile devices dominate internet usage, responsive web design more crucial.",
    link: "#",
  },
];
