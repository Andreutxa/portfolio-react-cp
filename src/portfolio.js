/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "David Sagrario",
  title: "Hi all, I'm David",
  subTitle: emoji(
    "A passionate Junior Data Scientist 🚀 having an experience of machine learning, data manipulation, cleaning, modelling and visualization with technologies like Python and Spark and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  // github: "https://github.com/Andreutxa",
  linkedin: "https://www.linkedin.com/in/david-sagrario-s%C3%A1nchez/",
  gmail: "david.sagrarios92@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  // medium: "https://medium.com/@davidrakosi",
  // stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  // instagram: 'https://www.instagram.com/cleverqazi/',
  // twitter: 'https://twitter.com/Andrea_AstorgaB',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "JUNIOR DATA SCIENTIST WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Clean, massage and origanize your (big) data"
    ),
    emoji("⚡ Perform descriptive statistics to develop insights, build models and solve your business needs")
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */
  
  softwareSkills: [
    {
      skillName: "Selenium",
      fontAwesomeClassname: "fas fa-check"
    },
    {
      skillName: "Spark",
      fontAwesomeClassname: "fas fa-star"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fab fa-envira"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Keras",
      fontAwesomeClassname: "fab fa-kickstarter-k"
    },
    {
      skillName: "Scikit-learn",
      fontAwesomeClassname: "fas fa-head-side-virus"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "fas fa-paw"
    },
    {
      skillName: "BeautifulSoup",
      fontAwesomeClassname: "fas fa-utensil-spoon"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    }
    // {
      //   skillName: "firebase",
      //   fontAwesomeClassname: "fas fa-fire"
      // }
    ],
    display: true // Set false to hide this section, defaults to true
  };

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Neoland",
      logo: require("./assets/images/Neoland-logo.jpeg"),
      subHeader: "Data Science",
      duration: "September 2020 - January 2021",
      desc: "Full-time Bootcamp (432 hours in 12 weeks).",
      descBullets: [
        "Data: Data Cleaning, Data Manipulation, Data Interpretation, Data Visualization, Descriptive Statistics",
        "Python: Pandas, Numpy, Folium (Maps), NLTK for NLP (Natural Language Processing)",
        "Web Scrapping: Selenium, BeautifulSoup",
        "Machine Learning: Scikit-Learn",
        "Deep Learning: Neural Networks, Keras, Pytorch, Tensorflow",
        "Large Data Processing: Apache Spark",
        "Genetic Algorithms",
        "Data Visualization: Matplotlib (Python), Seaborn (Pyhton), Tableau",
        "APIs: Twitter, Google",
        "Relational Databases: PostGreSQL",
        "Non-Relational Databases: MongoDB"
      ]
    },
    {
      schoolName: "Puerta Bonita",
      logo: require("./assets/images/puerta-bonita-logo.png"),
      subHeader: "Higher Technical certificate in audio-visual production",
      duration: "September 2013 - May 2015",
      // desc:
      //   "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data scientist",
      company: "Traffic accidents",
      companylogo: require("./assets/images/traffic-accidents-logo.jpeg"),
      date: "December 2020",
      descBullets: [
        "Data Cleaning",
        "Data Manipulation",
        "Data Visualization",
        "Machine Learning"
      ]
    },
    {
      role: "Customer Excellence",
      company: "Cinesa LUXE",
      companylogo: require("./assets/images/cinesa-logo.jpg"),
      date: "June 2015 – Present",
      descBullets: [
        "Customer service",
        "Team management",
        "Inventory control",
        "Tickets sales",
        "Auxiliar manager"
      ]
    },
    {
      role: "Operations team member",
      company: "Delaware",
      companylogo: require("./assets/images/delaware-logo.jpg"),
      date: "May 2012 – February 2013",
      descBullets:[
        "Testing software applications",
        "mySQL Server database management at query level"
      ]
    },
    {
      role: "Web developer internship",
      company: "DAESA",
      companylogo: require("./assets/images/daesa-logo.png"),
      date: "September 2011 – September 2012",
      desc:
        "Desarrollo Aplicaciones Especiales S.A. Java developer"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "drakosi99", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/analysis-traffic-bcn-map.jpg"),
      projectName: "Traffic accidents",
      projectDesc: "Analysis and classification of traffic accidents in the city of Barcelona between 2014 and 2019, according to its severity with the intention of identifying dark dots and isolate the variables that affects the most in the target for its study.",
      // footerLink: [
        //   {
          //     name: "Visit Website",
          //     url: "fa"
          //   }
          //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/covid-mexico.jpg"),
      projectName: "Covid-19 in México 2020",
      projectDesc: "Analysis of the Covid-19 incidence in Mexico in order to classify the pacients according to the most significant variables which affects in mortality",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "fa"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/santander-logo.jpg"),
      projectName: "Financial Santander products",
      projectDesc: "Client and product analysis achieved in order to observe which variables affect on the decision-making of which product to achieve and predict those products that may be achieved by a client based on their profile",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: ""
      //   }
      // ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications to deepen my knowledge",

  achievementsCards: [
    {
      title: "Data Science",
      subtitle:
        "Fulltime bootcamp",
      image: require("./assets/images/neoland-certificate.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://www.neoland.es/?utm_source=adword&utm_medium=ppc&utm_content=search&utm_term=neoland&utm_source=adwords&utm_campaign=%2300+Protecci%C3%B3n+Marca&utm_medium=ppc&hsa_kw=neoland&hsa_ad=352007985999&hsa_grp=68020410474&hsa_ver=3&hsa_acc=3503502286&hsa_cam=1677060882&hsa_mt=e&hsa_src=g&hsa_net=adwords&hsa_tgt=kwd-399405244555&gclid=Cj0KCQiA7NKBBhDBARIsAHbXCB575njq9LpIBC10qpsb3zrjG_37QUbv41kKXTdfLM2N-2OS3OcRrbAaAsPNEALw_wcB"
        }
      ]
    },
    {
      title: "SQL Server Master",
      subtitle:
        "From zero to professional level",
      image: require("./assets/images/SQL-server-certificate.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://www.udemy.com/"
        }
      ]
    },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: ""
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 📲"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "david.sagrarios92@gmail.com",
  // email_address: "david.sagrarios92@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
