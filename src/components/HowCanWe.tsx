import HCWCard from "./HCWCard";
import "./HowCanWe.css";

const HowCanWe = () => {
  const carddata = [
    {
      title: "Web Development",
      disc: "We will build your website from start to finish",
    },
    {
      title: "UI/UX Design",
      disc: "We will build your website from start to finish",
    },
    {
      title: "Back-End Development",
      disc: "We will build your website from start to finish",
    },
    {
      title: "UI Design",
      disc: "We will build your website from start to finish",
    },
    {
      title: "Front-End Development",
      disc: "We will build your website from start to finish",
    },
    {
      title: "Maintenance",
      disc: "We will build your website from start to finish",
    },
  ];

  return (
    <div className="HowCanWe">
      <h1>How can we help you?</h1>

      <div className="cardholder">
        {carddata.map((item) => (
          <HCWCard title={item.title} disc={item.disc} />
        ))}
      </div>
    </div>
  );
};

export default HowCanWe;
