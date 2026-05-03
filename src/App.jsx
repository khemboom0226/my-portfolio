import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Card,
  Badge,
  Stack,
  ListGroup,
  Accordion,
} from 'react-bootstrap'
import myLogo from './assets/khg-logo.png'
import './App.css'

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="shadow-sm sticky-top">
        <Container>
          <Navbar.Brand href="#home">Kem Harold C. Garate</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>
        <section id="home" className="hero-section py-5">
          <Container>
            <Row className="align-items-center">
              <Col lg={7}>
                <p className="eyebrow mb-2">Software Engineer</p>
                <h1 className="display-5 fw-bold">
                  Kem Harold C. Garate
                </h1>
                <p className="lead text-muted mb-4">
                  To strive for excellence, and to work where I can enhance my skills and knowledge in the field of Information Technology and effectively contribute to the growth of organization and to serve the company with the best of my abilities.
                </p>
                <Stack direction="horizontal" gap={3} className="flex-wrap mt-4">
                  <Button href="#contact" variant="primary">
                    Contact me
                  </Button>
                  <Button href="#experience" variant="outline-primary">
                    View experience
                  </Button>
                </Stack>
              </Col>
              <Col lg={5} className="text-center mt-4 mt-lg-0">
                <Card className="hero-card p-3 border-0 shadow-sm">
                  <Card.Img variant="top" src={myLogo} alt="Portrait illustration" className="rounded" />
                  <Card.Body>
                    <Card.Title className="mb-1">Front End Developer</Card.Title>
                    <Card.Text className="text-muted mb-0">
                      Experienced in React, TypeScript, and modern web development.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="about" className="py-5 bg-white">
          <Container>
            <div className="section-header mb-4">
              <h2>About</h2>
              <p className="text-muted mb-0">
                Front-End developer with expertise in front-end and back-end technologies.
              </p>
            </div>
            <Row className="g-4">
              <Col md={6}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body>
                    <Card.Title>Professional Background</Card.Title>
                    <Card.Text>
                      I am a dedicated software engineer with over 10 years of experience in web development. I specialize in creating reusable components, pages, and forms using React and TypeScript. My expertise spans connecting APIs from back-end to front-end, bug fixing, code analysis, and system behavior implementation. I'm passionate about writing clean, maintainable code and collaborating with teams to deliver high-quality products.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body>
                    <Card.Title>Current Role</Card.Title>
                    <Card.Text>
                      <strong>Full-stack Developer at Cody Web Development</strong> (June 2024 - Present)
                      <br />
                      <br />
                      Currently responsible for creating reusable components, pages and forms, connecting APIs between front-end and back-end, bug fixing, adding new features, and creating code analysis and system behavior documentation.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="experience" className="py-5">
          <Container>
            <div className="section-header mb-4">
              <h2>Experience</h2>
              <p className="text-muted mb-0">
                Over 10 years of professional software development experience.
              </p>
            </div>
            <Row className="g-4">
              {[
                {
                  company: 'Cody Web Development',
                  role: 'Full-stack Developer',
                  period: 'June 2024 — Present',
                  bullets: [
                    'Creating Reusable Components, Pages and Forms',
                    'Responsible for connecting API from back-end to front-end or vice versa',
                    'Bug fixing and adding new features',
                    'Creates Code Analysis and System Behaviour',
                  ],
                },
                {
                  company: 'Ray Business Technologies Inc.',
                  role: 'Front End Developer',
                  period: 'May 2022 – May 2024',
                  bullets: [
                    'Responsible for creating pages, forms and Unit Testing',
                    'Responsible for connecting API from back-end to front-end or vice versa',
                    'Responsible for creating reusable components and front-end libraries',
                    'Managing junior developers',
                  ],
                },
                {
                  company: 'CodeHub OPC (Beehive Asia Limited)',
                  role: 'Front End Developer',
                  period: 'July 2021 – May 2022',
                  bullets: [
                    'Responsible for creating pages and forms',
                    'Responsible for connecting API from Back-end to front-end or vice versa',
                    'Responsible for creating reusable components and front-end libraries',
                  ],
                },
                {
                  company: 'Payruler (Genii hut Technologies Corp.)',
                  role: 'Software Developer / RND',
                  period: 'May 2018 – July 2021',
                  bullets: [
                    'Responsible for creating pages and forms',
                    'Responsible for connecting API from back-end to front-end or vice versa',
                    'Responsible for creating reusable components and front-end libraries',
                  ],
                },
                {
                  company: 'Sizmek Corp.',
                  role: 'Tier 1 Engineer',
                  period: 'February 2017 – April 2018',
                  bullets: [
                    'Troubleshoot and resolve technical issues related to ad serving',
                    'Investigate and resolve analytics discrepancies between Sizmek and publishers',
                  ],
                },
                {
                  company: 'Onomatopoeia Inc.',
                  role: 'Web Developer',
                  period: 'Jan 2016 – February 2017',
                  bullets: [
                    'Responsible for converting Mockup design to HTML/CSS',
                    'Responsible for WordPress Integration',
                    'Responsible for creating Database Design',
                  ],
                },
                {
                  company: 'Proweaver Inc.',
                  role: 'Web Developer',
                  period: 'May 2014 – October 2014',
                  bullets: [
                    'Responsible for converting Mockup design to HTML/CSS',
                    'Responsible for WordPress Integration',
                    'Responsible for creating Database Design',
                  ],
                },
              ].map((item) => (
                <Col lg={6} key={item.role + item.company}>
                  <Card className="h-100 shadow-sm border-0 experience-card">
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div>
                          <Card.Title>{item.role}</Card.Title>
                          <Card.Subtitle className="text-muted">
                            {item.company}
                          </Card.Subtitle>
                        </div>
                        <Badge bg="info" text="dark">
                          {item.period}
                        </Badge>
                      </div>
                      <ListGroup variant="flush">
                        {item.bullets.map((bullet) => (
                          <ListGroup.Item key={bullet} className="px-0 border-0 ps-1">
                            • {bullet}
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section id="skills" className="py-5 bg-white">
          <Container>
            <div className="section-header mb-4">
              <h2>Skills & Technologies</h2>
              <p className="text-muted mb-0">
                A comprehensive set of tools and technologies I've mastered over my career.
              </p>
            </div>
            <Row className="g-4">
              {[
                {
                  category: 'Front-End',
                  skills: ['React JS', 'TypeScript', 'Next JS', 'HTML', 'CSS', 'SCSS', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'Jest', 'React Testing Library'],
                },
                {
                  category: 'Back-End & Database',
                  skills: ['PHP', 'CodeIgniter', 'MySQL', 'PostgreSQL', 'jQuery'],
                },
                {
                  category: 'Other Tools',
                  skills: ['Git', 'WordPress', 'API Integration', 'Database Design'],
                },
              ].map((skillGroup) => (
                <Col md={4} key={skillGroup.category}>
                  <Card className="h-100 shadow-sm border-0">
                    <Card.Body>
                      <Card.Title>{skillGroup.category}</Card.Title>
                      <div className="skill-list mt-3">
                        {skillGroup.skills.map((skill) => (
                          <Badge bg="secondary" key={skill} className="me-2 mb-2 skill-badge">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section id="education" className="py-5">
          <Container>
            <div className="section-header mb-4">
              <h2>Education</h2>
              <p className="text-muted mb-0">Academic background in Information Technology.</p>
            </div>
            <Row>
              <Col lg={6}>
                <Card className="shadow-sm border-0">
                  <Card.Body>
                    <Card.Title>Bachelor of Science in Information Technology</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">University of Cebu (Main)</Card.Subtitle>
                    <Card.Text>
                      <strong>2010 – 2014</strong>
                      <br />
                      Comprehensive education in software development, web technologies, and information systems with a focus on practical programming skills and system design.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="contact" className="py-5 bg-white">
          <Container>
            <div className="section-header mb-4">
              <h2>Contact</h2>
              <p className="text-muted mb-4">Reach out for freelance work, collaborations, or any inquiries.</p>
            </div>
            <Row>
              <Col lg={6}>
                <Card className="shadow-sm border-0 contact-card">
                  <Card.Body>
                    <Card.Title>Get in Touch</Card.Title>
                    <ListGroup variant="flush" className="mt-3">
                      <ListGroup.Item className="px-0 border-0">
                        <strong>Email:</strong> <a href="mailto:khemboom0226@gmail.com">khemboom0226@gmail.com</a>
                      </ListGroup.Item>
                      <ListGroup.Item className="px-0 border-0">
                        <strong>Phone:</strong> <a href="tel:+639561478803">(+63) 9561478803</a>
                      </ListGroup.Item>
                      <ListGroup.Item className="px-0 border-0">
                        <strong>Location:</strong> Lapu-Lapu City, Cebu, Philippines
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6}>
                <Accordion defaultActiveKey="0" className="shadow-sm border-0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Experience & Expertise</Accordion.Header>
                    <Accordion.Body>
                      I bring over 10 years of professional experience in full-stack web development. Specialized expertise in React, TypeScript, and API integration with a proven track record of managing teams and delivering high-quality solutions.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Available for Work</Accordion.Header>
                    <Accordion.Body>
                      Currently employed at Cody Web Development. Open to contract work, freelance projects, and consulting opportunities. Feel free to reach out with any inquiries.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  )
}

export default App
