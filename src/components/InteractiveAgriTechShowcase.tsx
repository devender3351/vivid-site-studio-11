import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

interface InteractiveAgriTechShowcaseProps {
  image1: string;
  image2: string;
}

const InteractiveAgriTechShowcase = ({ image1, image2 }: InteractiveAgriTechShowcaseProps) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);

  const images = [image1, image2];

  // Auto-switch images
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const toggleZone = (zone: string) => {
    setHoveredZone(hoveredZone === zone ? null : zone);
  };

  return (
    <section className="py-5 bg-gradient-to-b from-slate-50 to-white">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col lg={8} className="text-center">
            <Badge bg="primary" className="mb-3 px-3 py-2">
              <i className="bi bi-cpu me-2"></i>
              AI + GIS + VR Technology
            </Badge>
            <h2 className="display-5 fw-bold mb-3">
              Smart Agriculture
              <span className="text-primary"> Ecosystem</span>
            </h2>
            <p className="lead text-secondary">
              Explore our integrated farming technology platform with interactive visualization
            </p>
          </Col>
        </Row>

        {/* Main Interactive Display */}
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="border-0 shadow-lg overflow-hidden">
              <Card.Body className="p-0">
                <div className="position-relative" style={{ minHeight: "500px" }}>
                  {/* Image Container with Crossfade */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeImage}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6 }}
                      className="position-absolute w-100 h-100"
                    >
                      <img
                        src={images[activeImage]}
                        alt={`Agricultural Technology ${activeImage + 1}`}
                        className="w-100 h-100 object-fit-cover"
                        style={{ filter: "brightness(0.9)" }}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* UI Overlay - Top Dashboard */}
                  <div className="position-absolute top-0 start-0 end-0 p-3">
                    <div className="d-flex justify-content-between align-items-start">
                      {/* Left Stats Panel */}
                      <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="bg-dark bg-opacity-75 backdrop-blur rounded-3 p-3 text-white"
                        style={{ backdropFilter: "blur(10px)" }}
                      >
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <i className="bi bi-geo-alt-fill text-success fs-5"></i>
                          <span className="fw-semibold">Farm Monitor</span>
                        </div>
                        <div className="d-flex gap-4">
                          <div>
                            <small className="text-white-50 d-block">Yield</small>
                            <span className="fw-bold text-success">+23%</span>
                          </div>
                          <div>
                            <small className="text-white-50 d-block">Moisture</small>
                            <span className="fw-bold text-info">68%</span>
                          </div>
                          <div>
                            <small className="text-white-50 d-block">Temp</small>
                            <span className="fw-bold text-warning">28°C</span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Right Status Panel */}
                      <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="bg-dark bg-opacity-75 backdrop-blur rounded-3 p-3 text-white"
                        style={{ backdropFilter: "blur(10px)" }}
                      >
                        <div className="d-flex align-items-center gap-3">
                          <div className="text-center">
                            <i className="bi bi-wifi text-success fs-4"></i>
                            <small className="d-block">IoT</small>
                          </div>
                          <div className="text-center">
                            <i className="bi bi-drone text-primary fs-4"></i>
                            <small className="d-block">Drone</small>
                          </div>
                          <div className="text-center">
                            <i className="bi bi-headset-vr text-warning fs-4"></i>
                            <small className="d-block">VR</small>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Interactive Hotspots */}
                  {activeImage === 0 && (
                    <>
                      {/* Drone Hotspot */}
                      <motion.button
                        className="position-absolute btn btn-link p-0"
                        style={{ top: "15%", left: "10%" }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 }}
                        onMouseEnter={() => setHoveredZone("drone")}
                        onMouseLeave={() => setHoveredZone(null)}
                      >
                        <div className="position-relative">
                          <span className="badge bg-primary rounded-circle p-2">
                            <i className="bi bi-airplane fs-5"></i>
                          </span>
                          <span className="position-absolute top-0 start-0 translate-middle badge rounded-circle bg-danger animate-pulse">
                            <span className="visually-hidden">Active</span>
                          </span>
                        </div>
                      </motion.button>

                      {/* GIS Dashboard Hotspot */}
                      <motion.button
                        className="position-absolute btn btn-link p-0"
                        style={{ top: "20%", left: "45%" }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6 }}
                        onMouseEnter={() => setHoveredZone("gis")}
                        onMouseLeave={() => setHoveredZone(null)}
                      >
                        <div className="position-relative">
                          <span className="badge bg-success rounded-circle p-2">
                            <i className="bi bi-map fs-5"></i>
                          </span>
                        </div>
                      </motion.button>

                      {/* VR Training Hotspot */}
                      <motion.button
                        className="position-absolute btn btn-link p-0"
                        style={{ bottom: "30%", right: "15%" }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7 }}
                        onMouseEnter={() => setHoveredZone("vr")}
                        onMouseLeave={() => setHoveredZone(null)}
                      >
                        <div className="position-relative">
                          <span className="badge bg-warning rounded-circle p-2">
                            <i className="bi bi-headset-vr fs-5"></i>
                          </span>
                        </div>
                      </motion.button>

                      {/* Control Center Hotspot */}
                      <motion.button
                        className="position-absolute btn btn-link p-0"
                        style={{ bottom: "10%", left: "10%" }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8 }}
                        onMouseEnter={() => setHoveredZone("control")}
                        onMouseLeave={() => setHoveredZone(null)}
                      >
                        <div className="position-relative">
                          <span className="badge bg-info rounded-circle p-2">
                            <i className="bi bi-display fs-5"></i>
                          </span>
                        </div>
                      </motion.button>
                    </>
                  )}

                  {/* Info Card Overlay */}
                  <AnimatePresence>
                    {hoveredZone && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="position-absolute bottom-20 start-50 translate-middle-x"
                        style={{ bottom: "80px", maxWidth: "300px" }}
                      >
                        <Card className="border-0 shadow-lg bg-white">
                          <Card.Body className="p-3">
                            {hoveredZone === "drone" && (
                              <>
                                <div className="d-flex align-items-center gap-2 mb-2">
                                  <i className="bi bi-airplane text-primary fs-4"></i>
                                  <h6 className="mb-0 fw-bold">AI Drone Surveillance</h6>
                                </div>
                                <p className="small text-secondary mb-2">Real-time crop monitoring with multispectral imaging</p>
                                <Badge bg="success">Active</Badge>
                              </>
                            )}
                            {hoveredZone === "gis" && (
                              <>
                                <div className="d-flex align-items-center gap-2 mb-2">
                                  <i className="bi bi-map text-success fs-4"></i>
                                  <h6 className="mb-0 fw-bold">GIS Mapping</h6>
                                </div>
                                <p className="small text-secondary mb-2">SSURGO soil data integration with field boundary validation</p>
                                <Badge bg="primary">Processing</Badge>
                              </>
                            )}
                            {hoveredZone === "vr" && (
                              <>
                                <div className="d-flex align-items-center gap-2 mb-2">
                                  <i className="bi bi-headset-vr text-warning fs-4"></i>
                                  <h6 className="mb-0 fw-bold">VR Training Module</h6>
                                </div>
                                <p className="small text-secondary mb-2">Immersive 3D farming simulation for hands-on learning</p>
                                <Badge bg="info">Ready</Badge>
                              </>
                            )}
                            {hoveredZone === "control" && (
                              <>
                                <div className="d-flex align-items-center gap-2 mb-2">
                                  <i className="bi bi-display text-info fs-4"></i>
                                  <h6 className="mb-0 fw-bold">AI Control Center</h6>
                                </div>
                                <p className="small text-secondary mb-2">Centralized monitoring with predictive analytics dashboard</p>
                                <Badge bg="success">Online</Badge>
                              </>
                            )}
                          </Card.Body>
                        </Card>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Bottom Controls */}
                  <div className="position-absolute bottom-0 start-0 end-0 p-3">
                    <div className="d-flex justify-content-between align-items-end">
                      {/* Image Switcher */}
                      <div className="d-flex gap-2">
                        {images.map((_, index) => (
                          <Button
                            key={index}
                            variant={activeImage === index ? "light" : "outline-light"}
                            size="sm"
                            className="rounded-pill px-3"
                            onClick={() => {
                              setActiveImage(index);
                              setIsAutoPlaying(false);
                            }}
                          >
                            <i className={`bi ${index === 0 ? "bi-image" : "bi-grid-3x3-gap"} me-1`}></i>
                            View {index + 1}
                          </Button>
                        ))}
                        <Button
                          variant="outline-light"
                          size="sm"
                          className="rounded-pill"
                          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        >
                          <i className={`bi ${isAutoPlaying ? "bi-pause-fill" : "bi-play-fill"}`}></i>
                        </Button>
                      </div>

                      {/* Quick Stats */}
                      <div className="bg-dark bg-opacity-75 backdrop-blur rounded-3 px-3 py-2 text-white d-none d-md-block">
                        <div className="d-flex gap-4 text-center">
                          <div>
                            <small className="d-block text-white-50">NDVI</small>
                            <span className="fw-bold">0.82</span>
                          </div>
                          <div>
                            <small className="d-block text-white-50">GDD</small>
                            <span className="fw-bold">1,240</span>
                          </div>
                          <div>
                            <small className="d-block text-white-50">Health</small>
                            <span className="fw-bold text-success">94%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* Feature Cards Below */}
            <Row className="g-4 mt-4">
              {[
                {
                  icon: "bi-cpu",
                  title: "AI Analytics",
                  desc: "Yield prediction using machine learning models",
                  color: "primary"
                },
                {
                  icon: "bi-geo-alt",
                  title: "GIS Integration",
                  desc: "Spatial analysis with satellite imagery",
                  color: "success"
                },
                {
                  icon: "bi-headset-vr",
                  title: "VR Training",
                  desc: "Immersive learning for modern farmers",
                  color: "warning"
                },
                {
                  icon: "bi-shield-check",
                  title: "Certified",
                  desc: "Professional certification programs",
                  color: "info"
                }
              ].map((feature, idx) => (
                <Col md={6} lg={3} key={idx}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    <Card className="h-100 border-0 shadow-sm hover-lift">
                      <Card.Body className="text-center p-4">
                        <div className={`d-inline-flex align-items-center justify-content-center rounded-3 mb-3 p-3 bg-${feature.color} bg-opacity-10`}>
                          <i className={`bi ${feature.icon} fs-3 text-${feature.color}`}></i>
                        </div>
                        <h6 className="fw-bold mb-2">{feature.title}</h6>
                        <p className="small text-secondary mb-0">{feature.desc}</p>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Animation Styles */}
      <style>{`
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
        }
        .backdrop-blur {
          backdrop-filter: blur(10px);
        }
      `}</style>
    </section>
  );
};

export default InteractiveAgriTechShowcase;
