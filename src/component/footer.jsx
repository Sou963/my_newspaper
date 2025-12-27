import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5 pt-5 pb-3">
      <Container>
        <Row className="text-center text-md-start">
          {/* About */}
          <Col md={4} className="mb-4">
            <h4 className="fw-bold"><b>🗞️ My Newspaper</b></h4>
            <p className="small">
              Latest Bangladesh and world news.<br /> Stay informed with trusted sources.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none hover-underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/login" className="text-light text-decoration-none hover-underline">
                  Login
                </a>
              </li>
              <li>
                <a href="/register" className="text-light text-decoration-none hover-underline">
                  Register
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={4} className="mb-4">
            <h6 className="fw-bold">Contact</h6>
            <p className="small mb-1">📧 info@mynewspaper.com</p>
            <p className="small mb-1">📍 Bangladesh</p>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <p className="text-center small mb-0">
          © {new Date().getFullYear()} My Newspaper. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
