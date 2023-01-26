import Service from "./Service";

const offers = [
  { name: "Usługa 1", isNew: true },
  { name: "Usługa 2", isNew: false },
  { name: "Usługa 3", isNew: false },
  { name: "Usługa 4", isNew: false },
  { name: "Usługa 5", isNew: false },
  { name: "Usługa 6", isNew: false },
];

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
