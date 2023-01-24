const Header = () => {
  return (
    <>
      <header>
        <div className="shadow">
          <div className="main-container header-flex-container">
            <div className="header-container">
              <h1 className="company-slogan">
                Nasza firma oferuje najwyższej jakości produkty.
              </h1>
              <p className="slogan-introduction">
                Nie wierz nam na słowo - sprawdź
              </p>
              <button className="btn-offer">
                <a className="btn-link" href="#services">
                  Oferta{" "}
                </a>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
