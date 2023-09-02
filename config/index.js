module.exports = {
  //-- SITE SETTINGS -----
  author: "@nsourov",
  siteTitle: "Naimur Rahman Portfolio",
  siteShortTitle: "nr.", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "Hi there! I'm Naimur Rahman, a full-stack software developer based in Bangladesh.",
  siteUrl: "https://naimur.dev",
  siteLanguage: "en_US",
  seoTitleSuffix: "Naimur Rahman", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"
  useCookieBar: true, // If you use Google Analytics and want to be GDPR-compliant, set it to true
  googleAnalyticsTrackingId: "G-MY5GTPH45C", // e.g. UA-XXXXXX-X

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#CDF3E1",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  mediumRssFeed:
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40naimurdev",
  shownArticles: 0,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance
  socialMedia: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/naimur103/",
    },
    // {
    //   name: "Medium",
    //   url: "https://medium.com/@naimurdev",
    // },
    {
      name: "Github",
      url: "https://github.com/nsourov",
    },
    {
      name: "Mail",
      url: "mailto:naimur.rahman103@gmail.com",
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      // {
      //   name: "Articles",
      //   url: "/#articles",
      // },
    ],
    // button: {
    //   useFileName: true,
    //   name: "Resume",
    //   fileName: "Resume.pdf", // the file has to be placed inside the static folder at the root level
    // },
  },
}
