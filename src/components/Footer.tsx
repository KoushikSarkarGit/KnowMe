import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4 text-sm">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <Link
                href="/"
                className="hover:text-white transition-colors text-sm duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-white text-sm transition-colors duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/aboutme"
                className="hover:text-white text-sm transition-colors duration-300"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white text-sm transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-4">
            Social Media
          </h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors text-sm duration-300"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white text-sm transition-colors duration-300"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white text-sm transition-colors duration-300"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>West Bengal, India</p>
          <p>Kolkata 700101</p>
          <p>Email: sarkarkoushik557@gmail.com</p>
          <p>Phone: +919051276204</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2025 Studio KS. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
