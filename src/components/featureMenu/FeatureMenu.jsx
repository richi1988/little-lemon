import burrata from "../../assets/images/Image1.png";
import spaguettinegro from "../../assets/images/Image2.png";
import tagliataitaliana from "../../assets/images/Image3.png";
import maccheroni from "../../assets/images/Image4.png";
import maccheroniForno from "../../assets/images/Image5.png";
import raviolli from "../../assets/images/Image6.png";
import "../../assets/css/FeatureMenu.css";
import Card from "../card/Card";

const FeatureMenu = () => {
  const cardMenu = [
    {
      id: 1,
      image: burrata,
      title: "Burrata Siciliana",
      price: "14,90 €",
      description:
        "Mozzarella fresca, tomate seco.",
      order: "Ver más información",
    },
    {
      id: 2,
      image: spaguettinegro,
      title: "Spaguetti Negro",
      price: "12,90 €",
      description:
        "Almejas, gambas, ajo.",
      order: "Ver más información",
    },
    {
      id: 3,
      image: tagliataitaliana,
      title: "Tagliata Italiana",
      price: "18,90 €",
      description:
        "Lomo de buey con rúcula, mostaza y parmesano.",
      order: "Ver más información",
    },
    {
      id: 4,
      image: maccheroni,
      title: "Maccheroni Pomodoro",
      price: "10,90 €",
      description:
        "Tomate, basílico.",
      order: "Ver más información",
    },
    {
      id: 5,
      image: maccheroniForno,
      title: "Maccheroni al Forno",
      price: "14,90 €",
      description:
        "Boloñesa, nata, jamón york, quesos.",
      order: "Ver más información",
    },
    {
      id: 6,
      image: raviolli,
      title: "Raviolli Tartufo",
      price: "16,90 €",
      description:
        "Jamón ahumado, nata, trufa.",
      order: "Ver más información",
    },
  ];

  return (
    <div className="feature-menu-container">
      <div className="feature-menu-wrapper global-max-width">
        <div className="feature-menu-top">
          <h3 className="feature-menu-top-title">Tradición y modernidad</h3>
         

          <button className="feature-menu-top-button">VER MENUS</button>
        </div>
        <div>
          <p>Sabor a Italia, a Mediterráneo, a cocina de ‘la mamma’. Esta es la especialidad de Il Gondoliere, que no renuncia a la imaginación para lograr platos innovadores, ricos en matices y que diviertan a la vista y paladar.</p>
        </div>
        <article className="feature-menu-bottom">
          {cardMenu.map((item) => {
            const { image, title, price, description, order, id } = item;
            return (
              <Card
                key={id}
                image={image}
                title={title}
                price={price}
                description={description}
                order={order}
              />
            );
          })}
        </article>
        <div className="content-page-home-descip">
          <p>La carta de Il Gondoliere y su amplia oferta de menús para eventos se basa en productos de calidad certificada, que son tratados con respeto por profesionales cuya excelencia e ilusión está avalada por multitud de premios gastronómicos a nivel nacional e internacional.</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureMenu;
