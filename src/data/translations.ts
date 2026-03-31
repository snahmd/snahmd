export const translations = {
  en: {
    greetings: "Hi",
    iam: "I'm",
    phrases: ["Ahmed", "Web & App Developer", "E-Commerce Entrepreneur"],
    slogan:
      "Programming languages and frameworks are the tools we use, but the goal is related to how good the user experience is.",
    code: "Code",
    live: "Live",
    contact: "Get In Touch",
  },
  tr: {
    greetings: "Merhaba",
    iam: "Ben",
    phrases: ["Ahmed", "Web & Uygulama Gelistiricisiyim", "E-Ticaret Girisimcisiyim"],
    slogan:
      "Programlama dilleri ve frameworkler kullandigimiz araclardir, fakat amac kullanici deneyiminin ne kadar iyi olduguyla alakalidir.",
    code: "Kod",
    live: "Demo",
    contact: "İletişime Geçin",
  },
  de: {
    greetings: "Halli Hallo",
    iam: "Ich bin",
    phrases: ["Ahmed", "Web- & App-Entwickler", "E-Commerce Unternehmer"],
    slogan:
      "Programmiersprachen und Frameworks sind die Werkzeuge, die wir verwenden, aber das Ziel hängt damit zusammen, wie gut die Benutzererfahrung ist.",
    code: "Kode",
    live: "Demo",
    contact: "Kontaktaufnahme",
  },
} as const;

export type Lang = keyof typeof translations;
