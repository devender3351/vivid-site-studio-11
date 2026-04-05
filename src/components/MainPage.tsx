import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

const stats = [
  { icon: "bi bi-seedling", label: "Training Programs", value: "50+" },
  { icon: "bi bi-people", label: "Farmers Trained", value: "10K+" },
  { icon: "bi bi-award", label: "Certifications", value: "5K+" },
  { icon: "bi bi-graph-up-arrow", label: "Yield Increase", value: "25%" },
];

const features = [
  {
    icon: "bi bi-airplane",
    title: "Drone Training",
    description: "Master precision agriculture with cutting-edge drone technology",
  },
  {
    icon: "bi bi-seedling",
    title: "Crop Management",
    description: "Learn comprehensive rice cultivation from seed to harvest",
  },
  {
    icon: "bi bi-cpu",
    title: "AI Analytics",
    description: "Harness AI power for smart farming decisions",
  },
];

const MainPage = () => {
  const ref = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  return (
    <section ref={ref} className="position-relative overflow-hidden bg-dark text-white">
      {/* Hero Section - Agriculture Themed */}
      <div className="position-relative min-vh-100 d-flex flex-column justify-content-center align-items-center text-center pt-5">
        {/* Background Gradient */}
        <div 
          className="position-absolute w-100 h-100"
          style={{
            background: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #115e59 100%)'
          }}
        />

        {/* Hero Content */}
        <Container className="position-relative z-1">
          {/* Central Icon */}
          <div className="mb-4">
            <div 
              className="d-inline-flex align-items-center justify-content-center rounded-4 p-4"
              style={{
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(22, 163, 74, 0.3))',
                border: '1px solid rgba(52, 211, 153, 0.3)'
              }}
            >
              <i className="bi bi-leaf fs-1 text-success"></i>
            </div>
          </div>

          <Badge bg="success" className="mb-3 px-3 py-2">
            <i className="bi bi-seedling me-1"></i>
            AI + GIS + VR Agriculture
          </Badge>

          <h1 className="display-3 fw-bold mb-4">
            Transform Your <span className="text-success">Farming</span>
          </h1>

          <p className="lead mb-4 max-w-2xl mx-auto">
            Master modern agriculture with immersive VR training in drone operations, 
            crop management, and AI-powered analytics
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Button 
              size="lg" 
              variant="light"
              className="rounded-pill px-4"
              onClick={() => navigate("/signup")}
            >
              <i className="bi bi-play-circle me-2"></i>
              Start Training
              <i className="bi bi-arrow-right ms-2"></i>
            </Button>
            <Button 
              variant="outline-light" 
              size="lg"
              className="rounded-pill px-4"
              onClick={() => navigate("/certifications")}
            >
              View Certifications
            </Button>
          </div>
        </Container>
      </div>

      {/* Features Grid */}
      <div className="py-5 bg-dark">
        <Container>
          <Row className="g-4">
            {features.map((feature, i) => (
              <Col key={feature.title} md={4}>
                <Card className="h-100 bg-dark border-secondary text-center p-4">
                  <Card.Body>
                    <div 
                      className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3 p-3"
                      style={{ background: 'rgba(13, 110, 253, 0.1)' }}
                    >
                      <i className={`${feature.icon} fs-4 text-primary`}></i>
                    </div>
                    <Card.Title className="text-white">{feature.title}</Card.Title>
                    <Card.Text className="text-secondary">{feature.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* About Section */}
      <div className="py-5 bg-dark">
        <Container>
          <Row className="align-items-center g-4">
            <Col md={6}>
              <div 
                className="rounded-4 p-4"
                style={{
                  background: 'linear-gradient(135deg, rgba(6, 78, 59, 0.5), rgba(6, 95, 70, 0.5))',
                  border: '1px solid rgba(16, 185, 129, 0.2)'
                }}
              >
                <Row className="g-3">
                  <Col xs={6}>
                    <div 
                      className="ratio ratio-1x1 rounded-3 d-flex align-items-center justify-content-center"
                      style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(22, 163, 74, 0.2))' }}
                    >
                      <i className="bi bi-airplane fs-2 text-success"></i>
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div 
                      className="ratio ratio-1x1 rounded-3 d-flex align-items-center justify-content-center"
                      style={{ background: 'linear-gradient(135deg, rgba(22, 163, 74, 0.2), rgba(20, 184, 166, 0.2))' }}
                    >
                      <i className="bi bi-upc-scan fs-2 text-success"></i>
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div 
                      className="ratio ratio-1x1 rounded-3 d-flex align-items-center justify-content-center"
                      style={{ background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(6, 182, 212, 0.2))' }}
                    >
                      <i className="bi bi-cpu fs-2 text-info"></i>
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div 
                      className="ratio ratio-1x1 rounded-3 d-flex align-items-center justify-content-center"
                      style={{ background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))' }}
                    >
                      <i className="bi bi-wifi fs-2 text-info"></i>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={6}>
              <p className="text-uppercase text-primary fw-bold tracking-wide mb-3">
                About Us
              </p>
              <h2 className="display-5 fw-bold mb-4">
                VR Zone <span className="text-info">Academy</span>
              </h2>
              <p className="lead text-secondary mb-3">
                Founded by Dr. Devender Rapolu in partnership with Southern University Ag Center, 
                we specialize in immersive VR training for modern agriculture. Our programs combine 
                cutting-edge drone technology, AI analytics, and hands-on crop management techniques.
              </p>
              <p className="text-secondary mb-4">
                From drone piloting certification to AI-powered rice cultivation, we prepare 
                farmers for the future of agriculture with practical, engaging virtual reality 
                experiences.
              </p>
              <Button 
                variant="primary"
                className="rounded-pill"
                onClick={() => navigate("/registration")}
              >
                Get Started
                <i className="bi bi-arrow-right ms-2"></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Stats Section */}
      <div className="py-5 bg-dark">
        <Container>
          <div className="text-center mb-5">
            <p className="text-uppercase text-primary fw-bold tracking-wide mb-3">
              Our Impact
            </p>
            <h2 className="display-5 fw-bold">
              Transforming Agriculture Through <span className="text-primary">VR Training</span>
            </h2>
          </div>

          <Row className="g-4">
            {stats.map((stat) => (
              <Col key={stat.label} md={3} sm={6}>
                <Card className="h-100 bg-dark border-secondary text-center p-4">
                  <Card.Body>
                    <div 
                      className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3 p-3"
                      style={{ background: 'rgba(13, 110, 253, 0.1)' }}
                    >
                      <i className={`${stat.icon} fs-4 text-primary`}></i>
                    </div>
                    <div className="display-4 fw-bold mb-2">{stat.value}</div>
                    <div className="text-secondary">{stat.label}</div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default MainPage;
