import "../styles/Footer.css";
import { FooterLinks } from "./FooterLinks";
const Footer = () => {
  const footerlistarray = [
    {
      head: "company",
      items: ["About us", "Why Choose us", "Pricing", "Testimonials"],
    },
    {
      head: "Resources",
      items: ["Privacy Policy", "Terms and Condition", "Blog", "Contact Us"],
    },
    {
      head: "Product",
      items: [
        "Project managment",
        "Time tracker",
        "Time schedule",
        "Remote Collaboration",
      ],
    },
  ];

  return (
    <div className="Footer">
      <div className="FooterItems">
        <div className="footerlinksitems">
          <FooterLinks
            head={footerlistarray[0].head}
            footerlinks={footerlistarray[0].items}
          />
          <FooterLinks
            head={footerlistarray[1].head}
            footerlinks={footerlistarray[1].items}
          />
          <FooterLinks
            head={footerlistarray[2].head}
            footerlinks={footerlistarray[2].items}
          />
        </div>
        <div className="subscribe">
          <h2>HORIZON</h2>
          <h5>Subscribe to our Newsletter</h5>
          <div className="inputbtnemail">
            <input type="email" placeholder="Enter Email" />
            <input type="submit" />
          </div>
        </div>
      </div>
      <div className="Socials">
        <div className="line1"></div>
        <div className="textandicons">
          <p className="Copyright">© Copyright Finsweet 2022</p>
          <div className="socialicons">
            <div className="iconsocial1"></div>
            <div className="iconsocial2"></div>
            <div className="iconsocial3"></div>
            <div className="iconsocial4"></div>
          </div>
        </div>
        <div className="line2"></div>
      </div>
    </div>
  );
};

export default Footer;
