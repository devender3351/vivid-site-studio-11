import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Offcanvas from "react-bootstrap/Offcanvas";

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [skipLinkVisible, setSkipLinkVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { totalItems, setIsCartOpen } = useCart();

  const links = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" }
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleSkipLink = () => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          handleSkipLink();
        }}
        className={`skip-link ${skipLinkVisible ? "show" : ""}`}
        onFocus={() => setSkipLinkVisible(true)}
        onBlur={() => setSkipLinkVisible(false)}
      >
        Skip to main content
      </a>

      <Navbar
        expand="lg"
        fixed="top"
        className={`py-3 ${scrolled ? "navbar-scrolled shadow-lg" : "bg-transparent"}`}
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 text-decoration-none text-white">
            VR <span className="text-primary">Zone</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" className="border-0">
            <i className="bi bi-list text-white fs-4"></i>
          </Navbar.Toggle>

          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto align-items-center gap-3">
              {links.map((link) => (
                <Nav.Link
                  key={link.name}
                  onClick={() => navigate(link.path)}
                  className={`nav-link-custom ${isActive(link.path) ? "active" : ""}`}
                >
                  {link.name}
                </Nav.Link>
              ))}

              <Nav.Link onClick={() => navigate("/certifications")} className="nav-link-custom">
                Certifications
              </Nav.Link>

              <Nav.Link onClick={() => navigate("/system-overview")} className="nav-link-custom">
                System Overview
              </Nav.Link>

              <Button
                variant="link"
                className="position-relative p-2 text-white"
                onClick={() => setIsCartOpen(true)}
              >
                <i className="bi bi-cart fs-5"></i>
                {totalItems > 0 && (
                  <Badge bg="primary" className="position-absolute top-0 end-0 translate-middle p-1 rounded-circle" style={{ fontSize: "0.7rem" }}>
                    {totalItems}
                  </Badge>
                )}
              </Button>

              <div className="d-flex gap-2 ms-lg-3 ps-lg-3 border-start border-secondary">
                <Button variant="outline-light" size="sm" className="rounded-pill px-3" onClick={() => navigate("/signin")}>
                  <i className="bi bi-box-arrow-in-right me-1"></i>
                  Sign In
                </Button>
                <Button variant="primary" size="sm" className="rounded-pill px-3" onClick={() => navigate("/signup")}>
                  <i className="bi bi-person me-1"></i>
                  Sign Up
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>

          <Offcanvas show={expanded} onHide={() => setExpanded(false)} placement="end" className="bg-dark">
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title className="fw-bold text-white">
                VR <span className="text-primary">Zone</span>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column">
              <Nav className="flex-column gap-2">
                {links.map((link) => (
                  <Nav.Link key={link.name} onClick={() => { setExpanded(false); navigate(link.path); }} className="mobile-nav-link text-white">
                    {link.name}
                  </Nav.Link>
                ))}
                <Nav.Link onClick={() => { setExpanded(false); navigate("/certifications"); }} className="mobile-nav-link text-white">
                  Certifications
                </Nav.Link>
                <Nav.Link onClick={() => { setExpanded(false); navigate("/system-overview"); }} className="mobile-nav-link text-white">
                  System Overview
                </Nav.Link>
                <Nav.Link onClick={() => { setExpanded(false); setIsCartOpen(true); }} className="mobile-nav-link text-white d-flex justify-content-between">
                  <span>Cart</span>
                  {totalItems > 0 && <Badge bg="primary">{totalItems}</Badge>}
                </Nav.Link>
              </Nav>
              <div className="mt-auto pt-4 border-top border-secondary">
                <div className="d-grid gap-2">
                  <Button variant="outline-light" className="rounded-pill" onClick={() => { setExpanded(false); navigate("/signin"); }}>
                    <i className="bi bi-box-arrow-in-right me-2"></i> Sign In
                  </Button>
                  <Button variant="primary" className="rounded-pill" onClick={() => { setExpanded(false); navigate("/signup"); }}>
                    <i className="bi bi-person me-2"></i> Sign Up Free
                  </Button>
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>

      <style>{`
        .skip-link {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1050;
          background: var(--bs-primary);
          color: white;
          padding: 8px 16px;
          transform: translateY(-100%);
          transition: transform 0.2s;
          text-decoration: none;
          font-weight: 500;
        }
        .skip-link.show {
          transform: translateY(0);
        }
        .nav-link-custom {
          color: rgba(255, 255, 255, 0.8) !important;
          font-weight: 500;
          cursor: pointer;
        }
        .nav-link-custom:hover, .nav-link-custom.active {
          color: var(--bs-primary) !important;
        }
        .mobile-nav-link {
          padding: 0.75rem 1rem !important;
          border-radius: 0.5rem;
          cursor: pointer;
        }
        .mobile-nav-link:hover {
          background: rgba(13, 110, 253, 0.1);
          color: var(--bs-primary) !important;
        }
        .navbar-scrolled {
          background: rgba(33, 37, 41, 0.95) !important;
          backdrop-filter: blur(10px);
        }
      `}</style>
    </>
  );
};

export default Navbar;
