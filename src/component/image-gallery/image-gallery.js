import CardStyle from "./image-gallery.module.css";
import Image2 from "../../img/gallery-pic2.jpg";
import Image4 from "../../img/gallery-pic3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Button from "react-bootstrap/Button";

function TeamCard() {
  return (
    <div className={CardStyle.main}>
      <div className={CardStyle.gallery}>
        <img
          src={require("../../img/gallery-pic1.jpg")}
          className={CardStyle.bigCard}
        />
        <img src={Image2} className={CardStyle.smallCard} />
        <img
          src={require("../../img/gallery-pic4.jpg")}
          className={CardStyle.bigCard}
        />
        <img src={Image4} className={CardStyle.smallCard} />
        <img
          src={require("../../img/gallery-pic5.jpg")}
          className={CardStyle.bigCard}
        />
      </div>
      <div>
        <Button variant="secondary">مشاهده همه</Button>
      </div>
    </div>
  );
}

export default TeamCard;
