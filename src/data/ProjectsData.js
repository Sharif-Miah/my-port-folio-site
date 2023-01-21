import PizzaTime from "../assets/images/portfolio/PizzaTime.jpeg";
import TravelWithCatherine from "../assets/images/portfolio/TravelWithCatherine.png";
import GuessMyNumber from "../assets/images/portfolio/GuessMyNumber.jpeg";
import Forkify from "../assets/images/portfolio/Forkify.jpeg";
import Edgy from "../assets/images/portfolio/Edgy.jpeg";
import RestCountries from "../assets/images/portfolio/RestCountries.jpeg";
import Bankist from "../assets/images/portfolio/Bankist.jpeg";
import FrontendMentorSolutions from "../assets/images/portfolio/FrontendMentorSolutions.jpeg";

const ProjectsPreviewData = [
  {
    id: "pizza-time",
    img: PizzaTime,
    name: "Pizza Time",
    stack: ["< React.js />", "< CSS3 />", "< Leaflet API />"],
    src: "https://pizza-time-with-react.vercel.app/",
    source: "https://github.com/Sharif-Miah/pizza-time-with-react-main",
    description:
      "Pizza Time is a pizza restaurant that offers an online menu with various options like pizza, sushi, or pasta. The idea of this project is to make it as close as possible to an actual food e-commerce website which has features like an online menu, order options, and so on.",
  },
  {
    id: "rest-countries",
    img: RestCountries,
    name: "Rest Countires",
    stack: ["< RESTful API />", "< CSS3 />", "< React.js />"],
    src: "https://catherineisonline.github.io/rest-countries/",
    source: "https://github.com/Sharif-Miah/rest-countries-api",
    description:
      "REST Countries is a project made with API which also has a color theme switcher feature. You can view the list of all countries and find a specific one via search or by filtering regions. By navigating to the individual country page, you are able to see more details about the country like native name and even border countries.",
  },
  {
    id: "forkify",
    img: Forkify,
    name: "Forkify Recipes",
    stack: ["< HTML5 />", "< SCSS />", "< Vanilla JS />", "< RESTful API />"],
    src: "https://forkify-recipe-api.vercel.app/",
    source: "https://github.com/Sharif-Miah/forkify-main",
    description:
      "Forkify is a vanilla JavaScript application that interacts with the Forkify API to fetch and display recipe food data. The user can search for a specific recipe, and save to a favorites list via local storage. The user can easily increase or decrease servings as per his need and can view detailed directions.",
  },
];

const ProjectsData = [
  {
    id: "pizza-time",
    img: PizzaTime,
    name: "Pizza Time",
    stack: ["< React.js />", "< CSS3 />", "< Leaflet API />"],
    src: "https://pizza-time-with-react.vercel.app/",
    source: "https://github.com/Sharif-Miah/pizza-time-with-react-main",
    description:
      "Pizza Time is a pizza restaurant that offers an online menu with various options like pizza, sushi, or pasta. The idea of this project is to make it as close as possible to an actual food e-commerce website which has features like an online menu, order options, and so on.",
  },
  {
    id: "rest-countries",
    img: RestCountries,
    name: "Rest Countires",
    stack: ["< RESTful API />", "< CSS3 />", "< React.js />"],
    src: "https://catherineisonline.github.io/rest-countries/",
    source: "https://github.com/Sharif-Miah/rest-countries-api",
    description:
      "REST Countries is a project made with API which also has a color theme switcher feature. You can view the list of all countries and find a specific one via search or by filtering regions. By navigating to the individual country page, you are able to see more details about the country like native name and even border countries.",
  },
  {
    id: "forkify",
    img: Forkify,
    name: "Forkify Recipes",
    stack: ["< HTML5 />", "< SCSS />", "< Vanilla JS />", "< RESTful API />"],
    src: "https://forkify-recipe-api.vercel.app/",
    source: "https://github.com/Sharif-Miah/forkify-main",
    description:
      "Forkify is a vanilla JavaScript application that interacts with the Forkify API to fetch and display recipe food data. The user can search for a specific recipe, and save to a favorites list via local storage. The user can easily increase or decrease servings as per his need and can view detailed directions.",
  },
];

export { ProjectsData, ProjectsPreviewData };
