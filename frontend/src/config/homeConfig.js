// IMAGES Path
const imgPath = process.env.PUBLIC_URL;

// Typewriter
const TypewriterData = {
  tw1: "egyedi őrületes weboldalak",
  tw2: "frontend fejlesztés...",
  tw3: "backend fejlesztés...",
  tw4: "a legújabb technológiákkal!",
};

// ContentData
const ContentData = {
  personalData: {
    img: `${imgPath}/img/profil.png`,
    name: "Höller Gergő",
    profession: "junior full stack fejlesztő vagyok",
    logo: `${imgPath}/img/logo.svg`,
  },
  about: {
    title: (
      <h1 className="heading">
        <span>{"${"}ez lennék </span> én{"}"}
      </h1>
    ),
    text1: `
    Webfejlesztő karrierem 2020 elején kezdődött, mikor ugyanis
    eldöntöttem, hogy eljött az ideje annak, hogy a hobbimmal
    kereshessem meg a kenyeremet, így először autodidakta módon, majd
    egy fél év múlva, felnőttképzésen szereztem meg a jelen lévő
    tudást, amit napról napra csiszolok, hogy a legjobbat hozhassam ki
    belőle!
    `,
    text2: `
    Személyemet a kitartóság, precizitás, pontosság, figyelmesség
    jellemzi!
    `,
  },
  services: {
    title: (
      <h1 className="heading">
        <span>{"${"}...amibe már </span> belekóstóltam{"}"}
      </h1>
    ),
  },
  portfolio: {
    title: (
      <h1 className="heading">
        <span>{"${"}elkészített </span>projektek{"}"}
      </h1>
    ),
    content: [
      {
        img: `${imgPath}/img/ref3.png`,
        name: "Dr. Sánta Antal",
        desc: "html/css/js",
        url: "https://santadental.hu/",
      },
      {
        img: `${imgPath}/img/ref4.png`,
        name: "Dentro bútor webáruház",
        desc: "html/css/js/YII",
        url: "https://dentro.hu/",
      },
      {
        img: `${imgPath}/img/ref1.png`,
        name: "Beach Resort",
        desc: "html/css/js/react/node.js",
        url: "http://beach-resort.hollergergo.hu/",
      },
    ],
  },
  contact: {
    title: (
      <h1 className="heading">
        <span>{"${"}írj</span> nekem{"}"}
      </h1>
    ),
  },
};

// Skills
const Skills = {
  col1: [
    {
      title: "HTML 5",
      progress: "78%",
    },
    {
      title: "CSS",
      progress: "72%",
    },
    {
      title: "JavaScript",
      progress: "26%",
    },
  ],

  col2: [
    {
      title: "Java",
      progress: "4%",
    },
    {
      title: "Spring Boot",
      progress: "4%",
    },
    {
      title: "JQuery",
      progress: "26%",
    },
  ],
};

export { imgPath, TypewriterData, ContentData, Skills };
