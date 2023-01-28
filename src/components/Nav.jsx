const Nav = () => {
  return (
    <>
      <nav>
        <div className="main-container">
          <div className="nav-box">
            <div className="company">Moja firma</div>
            <ul className="menu-2">
              <li>
                <a href="#aboutUs">O nas</a>
              </li>
              <li>
                <a href="#services">Oferta</a>
              </li>
              <li>
                <a className="disabled" href="#">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
