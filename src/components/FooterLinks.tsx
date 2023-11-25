import "../styles/Footerlinks.css";

export const FooterLinks = (props: { head: string; footerlinks: any }) => {
  return (
    <div className="footerlinkslist">
      <ul>
        <h5>{props.head}</h5>
        {props.footerlinks.map((item: string) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
