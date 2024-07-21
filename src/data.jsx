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

//Portfolios image
import port1 from "./assets/images/benzaBiz.jpeg";
import port2 from "./assets/images/benzaBiz2.jpeg";
import port3 from "./assets/images/benzaBiz3.jpeg";
import port4 from "./assets/images/benzaGermany.jpeg";
import port5 from "./assets/images/benzaLome.jpeg";
import port6 from "./assets/images/benzaLome2.jpeg";
import port7 from "./assets/images/benzaPrague.jpeg";

//ENd Import Images for services
const $faChartSimple = <FontAwesomeIcon icon={faChartSimple} />;
const $faBook = <FontAwesomeIcon icon={faBook} />;
const $faBullseye = <FontAwesomeIcon icon={faBullseye} />;
//our approches
export const approaches = [
  {
    id: 1,
    icon: $faChartSimple,
    title: "Strategic Investment Solutions",
    paragraph:
      "Our Strategic Investment Solutions focus on creating customized investment plans that align with your financial goals and risk tolerance. By leveraging advanced market analytics and industry insights, we identify high-potential opportunities and develop strategies that drive sustainable growth. Our approach ensures your investments are not only profitable but also resilient in the face of market fluctuations.",
  },
  {
    id: 2,
    icon: $faBook,
    title: "Expert Financial Management",
    paragraph:
      "Expert Financial Management offers a comprehensive suite of services designed to enhance your business’s financial health. We start with in-depth financial planning, tailored to your specific needs and goals. Our risk management strategies protect your assets, while our performance optimization techniques ensure ongoing profitability and growth. We provide you with the insights and tools needed to make informed financial decisions.",
  },
  {
    id: 3,
    icon: $faBullseye,
    title: "Comprehensive Legal Advisory",
    paragraph:
      "Comprehensive Legal Advisory provides you with expert legal guidance to navigate complex regulatory environments. Our services include detailed regulatory compliance checks, robust contract management solutions, and proactive risk mitigation strategies. We aim to safeguard your business against potential legal issues, ensuring smooth and secure operations. Our team of legal experts is dedicated to protecting your interests and supporting your business objectives.",
  },
];

export const howWeWorkSections = [
  {
    id: 1,
    title: "In-Depth Consultation",
    para: "We begin with a thorough consultation to understand your business’s specific needs, goals, and challenges. This discovery phase involves in-depth discussions and assessments to gather essential information, enabling us to tailor our strategies to your unique situation.",
  },
  {
    id: 2,
    title: "Customized Solution Development",
    para: "Based on our initial analysis, we develop customized strategies that align with your objectives. Our team designs a comprehensive plan that integrates investment, financial, and legal considerations to address your needs effectively and ensure sustainable growth.",
  },
  {
    id: 3,
    title: "Focused and Efficient Execution",
    para: "Once strategies are in place, we move to the implementation phase, where we execute the agreed-upon solutions with precision. Our team works diligently to ensure all aspects of the plan are carried out efficiently, maintaining transparency and open communication throughout the process.",
  },
  {
    id: 4,
    title: "Ongoing Evaluation and Adjustments",
    para: "We continuously monitor the outcomes of our strategies to ensure they are achieving the desired results. Regular evaluations and performance assessments allow us to make informed adjustments and optimizations, ensuring that your business remains agile and responsive to any changes in the environment.",
  },
  {
    id: 5,
    title: "Dedicated Client Service",
    para: "Our commitment to your success extends beyond implementation. We provide ongoing support and expert advice to address any emerging issues or opportunities. Our team is always available to offer guidance and ensure that your business continues to thrive in a dynamic landscape.",
  },
];
//services
export const services = [
  {
    id: 1,
    smallTitle: "Investment Advisory",
    title: "Strategic Investment Solutions",
    paragraph:
      "Our Strategic Investment Solutions service offers tailored investment strategies and comprehensive advisory to maximize your returns and align with your long-term financial goals. We leverage market insights and advanced analytics to provide personalized investment plans that drive sustainable growth.",
    points: [
      "acquisition of investment funds",
      "Advanced Market Analytics",
      "Sustainable Growth Focus",
    ],
    link: "#",
    img: benzaAccount,
    row: "sm:flex-row",
  },
  {
    id: 2,
    smallTitle: "Financial Consulting",
    title: "Expert Financial Management",
    paragraph:
      "Our Expert Financial Management service delivers customized financial strategies designed to enhance your business’s financial performance and stability. From financial planning and analysis to risk management and capital optimization, our consultants provide actionable insights and solutions.",
    points: [
      "Customized Financial Planning",
      "Comprehensive Risk Management",
      "Performance Optimization",
    ],
    img: benzaAccount2,
    row: "sm:flex-row-reverse",
  },
  {
    id: 3,
    smallTitle: "Legal Consulting",
    title: "Comprehensive Legal Advisory",
    paragraph:
      "Our Comprehensive Legal Advisory service provides in-depth legal expertise to navigate complex regulatory environments and ensure compliance. We offer a wide range of legal services, including contract management, regulatory compliance, and risk mitigation, to safeguard your business interests.",
    points: [
      "Regulatory Compliance Expertise",
      "Contract Management Solutions",
      "Risk Mitigation Strategies",
    ],
    img: benzaAccount3,
    row: "sm:flex-row",
  },
];

// bugdet
export const budgets = [
  {
    id: 1,
    description: "Please choose",
    selected: true,
  },
  {
    id: 2,
    description: "$500 - $1000",
    selected: false,
  },
  {
    id: 3,
    description: "$1000 - $2000",
    selected: false,
  },
  {
    id: 4,
    description: "$2000 - $3000",
    selected: false,
  },
  {
    id: 5,
    description: "$3000 - $4000",
    selected: false,
  },
  {
    id: 6,
    description: "$4000 - $5000",
    selected: false,
  },
];
// Type of business are you
export const businessType = [
  {
    id: 1,
    title: "Please choose",
    selected: true,
  },
  {
    id: 2,
    title: "Individual",
    selected: false,
  },
  {
    id: 3,
    title: "Company",
    selected: false,
  },
  {
    id: 4,
    title: "Agency",
    selected: false,
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

//Portfolio
export const portfolios = [
  {
    id: 1,
    img: port1,
    title: "Permon Visit",
  },
  {
    id: 2,
    img: port3,
    title: "Permon Visit",
  },
  {
    id: 3,
    img: port3,
    title: "Permon Visit",
  },
  {
    id: 4,
    img: port4,
    title:
      "Signing of agreements with the Minister of Tourism of Côte d'Ivoire",
  },
  {
    id: 5,
    img: port5,
    title: "Partnership with the City Hall of Ouagadougou",
  },
  {
    id: 6,
    img: port6,
    title: "Partnership with the City Hall of Ouagadougou",
  },
];
