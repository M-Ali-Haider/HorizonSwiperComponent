import "./HCW.css";

const HCWCard = (props: { title: string; disc: string }) => {
  return (
    <div className="HCWCard">
      <div className="imgHCW">
        <img src="" alt="" />
      </div>
      <h1 className="title">{props.title}</h1>
      <p>{props.disc}</p>
    </div>
  );
};

export default HCWCard;
