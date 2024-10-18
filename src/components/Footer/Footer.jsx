import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer_container">
      <footer className="footer">
        <div className="footer__container container grid">
          <h1>Have any questions?</h1>
          <button className="button-6" onClick={() => window.location.href = "https://mail.google.com/mail/?view=cm&fs=1&to=ecocycleinnovations1@gmail.com&su=Your%20Subject%20Here&body=Your%20Body%20Text"}>Contact Us</button>
          </div>
      </footer>
    </div>
  );
};

export default Footer;
