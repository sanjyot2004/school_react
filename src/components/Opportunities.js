import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsCardChecklist, BsClipboardData, BsLightningFill, BsBook, BsMusicNoteList, BsHeartFill } from 'react-icons/bs'; // Additional Bootstrap icons

export const Opportunities = () => {
  return (
    <section className="opportunities-section" id='opportunities-block'>
      <Container className='container'>
      <h1 className="page-heading text-center mb-4" >Opportunities</h1><br/><br/>
        <Row className="justify-content-center">
          <Col md={6} lg={4} className="mb-4">
            <div className="opportunity-item text-center">
              <BsCardChecklist className="icon mb-3" style={{color:"#8c0036" , marginRight:"10px"}}/>
              <h3 className="title">Leadership Development</h3>
              <p className="description">Join leadership programs and workshops to develop essential leadership skills and qualities.</p>
            </div>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <div className="opportunity-item text-center">
              <BsClipboardData className="icon mb-3" style={{color:"#8c0036" , marginRight:"10px"}}/>
              <h3 className="title">Research Opportunities</h3>
              <p className="description">Participate in research projects and gain valuable experience in your field of interest.</p>
            </div>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <div className="opportunity-item text-center">
              <BsLightningFill className="icon mb-3" style={{color:"#8c0036" , marginRight:"10px"}}/>
              <h3 className="title">Innovation Challenges</h3>
              <p className="description">Take part in innovation challenges and develop creative solutions to real-world problems.</p>
            </div>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <div className="opportunity-item text-center">
              <BsBook className="icon mb-3" style={{color:"#8c0036" , marginRight:"10px"}}/>
              <h3 className="title">Academic Competitions</h3>
              <p className="description">Participate in academic competitions and showcase your knowledge and skills in various subjects.</p>
            </div>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <div className="opportunity-item text-center">
              <BsMusicNoteList className="icon mb-3" style={{color:"#8c0036" , marginRight:"10px"}}/>
              <h3 className="title">Music & Arts Programs</h3>
              <p className="description">Join music and arts programs to explore your creativity and talents in performing and visual arts.</p>
            </div>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <div className="opportunity-item text-center">
              <BsHeartFill className="icon mb-3" style={{color:"#8c0036" , marginRight:"10px"}}/>
              <h3 className="title">Health & Wellness Activities</h3>
              <p className="description">Participate in health and wellness activities to promote physical and mental well-being.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Opportunities;
