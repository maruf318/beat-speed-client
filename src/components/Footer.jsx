import pic from "../assets/iconcar.png";
const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <footer className="footer p-10  text-base-content">
        <aside>
          <img src={pic} alt="" />
          <p className="text-2xl text-gray-500 font-bold">
            Beat<span className="text-red-700">Speed</span>
            <br />
            Providing best cars since 1994
          </p>
        </aside>
        <nav>
          <header className="footer-title text-gray-500">Services</header>
          <a className="link link-hover text-gray-500">Branding</a>
          <a className="link link-hover text-gray-500">Design</a>
          <a className="link link-hover text-gray-500">Marketing</a>
          <a className="link link-hover text-gray-500">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title text-gray-500">Company</header>
          <a className="link link-hover text-gray-500">About us</a>
          <a className="link link-hover text-gray-500">Contact</a>
          <a className="link link-hover text-gray-500">Jobs</a>
          <a className="link link-hover text-gray-500">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title  text-gray-500">Legal</header>
          <a className="link link-hover text-gray-500">Terms of use</a>
          <a className="link link-hover text-gray-500">Privacy policy</a>
          <a className="link link-hover text-gray-500">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
