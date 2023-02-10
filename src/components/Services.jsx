import Service from "./Service";
import { offers } from "../Data/Offers.js";

const Services = () => {
  return (
    <>
      <section id="services">
        <div className="main-container">
          <h2 className="services-header">Czym zajmuje się nasza firma?</h2>
          <div className="services-container">
            {offers.map((offer, index) => {
              return (
                <Service name={offer.name} isNew={offer.isNew} key={index} />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Services;
