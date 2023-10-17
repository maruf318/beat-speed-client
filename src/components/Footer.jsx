import pic from "../assets/iconcar.png";
const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <footer className="footer p-10  text-base-content">
        <aside>
          <img src={pic} alt="" />
          <p className="text-2xl font-bold">
            Beat<span className="text-red-700">Speed</span>
            <br />
            Providing best cars since 1994
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
