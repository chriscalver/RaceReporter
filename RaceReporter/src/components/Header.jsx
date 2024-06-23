import reactLogo from "../assets/news2.png";

export default function Header() {
  return (
    <div>
      <header>
        <div className="container">
          <nav className="nav_checkbox">
            <img src={reactLogo} className="logoImg" width="30" />
            <h2 className="logo">Race Reporter</h2>
            <input type="checkbox" id="tab-nav" className="tab-nav" />
            <label for="tab-nav" className="label">
              <div className="burger"></div>
              <div className="burger"></div>
              <div className="burger"></div>
            </label>
            <ul className="content_nav">
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">FULL-REPORT</a>
              </li>

              <li>
                <a href="#">ABOUT</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
