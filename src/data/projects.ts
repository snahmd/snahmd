export interface Project {
  name: string;
  image: string;
  codeUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    name: "MockShop",
    image: "/projects/mockshop-app.jpg",
    codeUrl: "https://github.com/snahmd/mockshop",
    liveUrl: "https://snahmd.github.io/mockshop/",
  },
  {
    name: "The Shop Design",
    image: "/projects/the-shop-design.jpg",
    codeUrl: "https://github.com/snahmd/the-design-shop",
    liveUrl: "https://snahmd.github.io/the-design-shop/",
  },
  {
    name: "Back To Nature",
    image: "/projects/Landingpage.jpg",
    codeUrl: "https://github.com/snahmd/back-to-nature",
    liveUrl: "https://snahmd.github.io/back-to-nature/",
  },
  {
    name: "New Interior",
    image: "/projects/new-interior-landing-page.jpg",
    codeUrl: "https://github.com/snahmd/new-interior",
    liveUrl: "https://snahmd.github.io/new-interior/",
  },
  {
    name: "SansCodex.com",
    image: "/projects/sanscodex-de.jpg",
    codeUrl: "https://github.com/snahmd/sanscode",
    liveUrl: "https://sanscodex.com",
  },
  {
    name: "quick-list.com",
    image: "/projects/quick-list.jpg",
    codeUrl: "https://github.com/snahmd/quicklist",
    liveUrl: "https://quick-list.com",
  },
  {
    name: "cigkofteshop.de",
    image: "/projects/cigkofteshopde.jpg",
    liveUrl: "https://cigkofteshop.de",
  },
  {
    name: "kazangil.com",
    image: "/projects/kazangil.jpg",
    liveUrl: "https://kazangil.com",
  },
  {
    name: "kashkadesign.com",
    image: "/projects/kashkadesign.jpg",
    liveUrl: "https://kashkadesign.com",
  },
  {
    name: "creastr.com",
    image: "/projects/creastr.jpg",
    liveUrl: "https://creastr.com",
  },
  {
    name: "Nobel Pen",
    image: "/projects/nobelpen-netlify-app.jpg",
    codeUrl: "https://github.com/sanscodex/nobel-pen",
    liveUrl: "https://nobelpen.netlify.app/",
  },
  {
    name: "Hotel Bon",
    image: "/projects/bon-hotel.jpg",
  },
];
