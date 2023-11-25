import "../styles/WhatWeOffer.css";
import OfferGridCard from "./OfferGridCard";
import Icons from "./importsvgs";

const WhatWeOffer = () => {
  const ourOffers = [
    { head: "Planning", icon: Icons.Planning ,descr:"Our meticulous planning process sets your project on the right track. We analyze your needs, strategize workflows, and create a seamless execution roadmap."},
    { head: "UI/UX Design", icon: Icons.UIUX, descr:"Immerse your audience in visually appealing, user-friendly interfaces. Our skilled designers blend creativity and functionality for enhanced user experiences." },
    { head: "Web Developer", icon: Icons.WebDev, descr:"We specialize in turning concepts into fully functional websites. Our developers use cutting-edge tech to build robust, secure sites tailored to your needs." },
    { head: "PHP Develop", icon: Icons.PHP, descr:"Harness PHP's power with our expert developers. We create dynamic, interactive websites, delivering tailored solutions and robust databases." },
    { head: "React", icon: Icons.DataScience, descr:"Elevate web apps with React.js. Our developers use this library to craft dynamic, responsive interfaces for engaging user experiences." },
    { head: "Creativity", icon: Icons.Creativity, descr:"We infuse creativity into every project, crafting unique, innovative solutions. From striking designs to inventive problem-solving." },
    { head: "Responsiveness", icon: Icons.Business, descr:"Ensure your site looks and works flawlessly on all devices. We prioritize responsiveness for optimal user experiences on desktops, tablets, and smartphones." },
    { head: "Data Science", icon: Icons.UI, descr:"Unlock data-driven insights with our expertise. We use advanced analytics, ML, and AI to extract valuable information." },
  ];

  return (
    <div className="WhatWeOffer">
      <h3 className="Weoffer">We Offer</h3>
      <h2 className="Howcanwehelp">How can we help you?</h2>

      <div className="OfferGrid">
        {ourOffers.map((item) => (
          <OfferGridCard key={item.head} head={item.head} icon={item.icon} descr={item.descr} />
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;
