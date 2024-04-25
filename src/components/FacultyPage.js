import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUser, FaGraduationCap, FaChalkboardTeacher, FaAward, FaHandsHelping, FaClock, FaRegSmileBeam, FaCommentAlt } from 'react-icons/fa';
import { RiUserSearchLine } from 'react-icons/ri';
import { GiTeacher } from 'react-icons/gi';
import { AiOutlineUsergroupAdd, AiFillSafetyCertificate } from 'react-icons/ai';




export const FacultyPage = () => {
  return (
    <Container className="py-5" id='FacultyPage-block'>
 <h1 className="page-heading text-center mb-4" >Faculty </h1> {/* Add class 'page-heading' */} <br/><br/><br/>
      <Row className="mb-5" >
        <Col md={6} className="d-flex align-items-center">
          <FaUser  className="icon mr-3" style={{color:"#8c0036" , marginRight:"10px"}} />
          <div>
            <h3>Dedicated and Experienced Faculty</h3>
            <p>Our faculty members are dedicated professionals with years of experience.</p>
          </div>
        </Col>
        
        <Col md={6} className="d-flex align-items-center">
          <FaCommentAlt className="icon mr-3" style={{color:"#8c0036" , marginRight:"10px"}}/>
          <div>
            <h3>Open Communication</h3>
            <p>Our faculty members maintain open communication channels to address student concerns and feedback.</p>
          </div>
        </Col>


      </Row>
      <Row className="mb-5">
        <Col md={6} className="d-flex align-items-center">
          <FaChalkboardTeacher className="icon mr-3"style={{color:"#8c0036" , marginRight:"10px"}} />
          <div>
            <h3>Expertise in Various Subjects</h3>
            <p>Our faculty members have expertise in a wide range of subjects, ensuring a comprehensive learning experience.</p>
          </div>
        </Col>
        <Col md={6} className="d-flex align-items-center">
          <RiUserSearchLine className="icon mr-3" style={{color:"#8c0036" , marginRight:"10px"}}/>
          <div>
            <h3>Focused on Student Success</h3>
            <p>Our faculty members are committed to the success and well-being of every student.</p>
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col md={6} className="d-flex align-items-center">
          <AiOutlineUsergroupAdd className="icon mr-3"style={{color:"#8c0036" , marginRight:"10px"}} />
          <div>
            <h3>Supportive Learning Environment</h3>
            <p>We foster a supportive learning environment where students can thrive.</p>
          </div>
        </Col>
        <Col md={6} className="d-flex align-items-center">
          <GiTeacher className="icon mr-3" style={{color:"#8c0036" , marginRight:"10px"}}/>
          <div>
            <h3>Passionate about Teaching</h3>
            <p>Our faculty members are passionate about teaching and inspiring students.</p>
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col md={6} className="d-flex align-items-center">
          <FaAward className="icon mr-3" style={{color:"#8c0036" , marginRight:"10px"}}/>
          <div>
            <h3>Recognized Achievements</h3>
            <p>Many of our faculty members have received prestigious awards and recognition in their fields.</p>
          </div>
        </Col>
        <Col md={6} className="d-flex align-items-center">
          <AiFillSafetyCertificate className="icon mr-3" style={{color:"#8c0036" , marginRight:"10px"}}/>
          <div>
            <h3>Commitment to Safety</h3>
            <p>Ensuring the safety and well-being of our students is a top priority for our faculty.</p>
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
       
       
      <Col md={6} className="d-flex align-items-center">
          <FaRegSmileBeam className="icon mr-3" style={{color:"#8c0036" , marginRight:"10px"}}/>
          <div>
            <h3>Positive Learning Environment</h3>
            <p>We create a positive and inclusive learning environment that fosters student growth and development.</p>
          </div>
        </Col>



        <Col md={6} className="d-flex align-items-center">
          <FaClock className="icon mr-3" style={{color:"#8c0036" , marginRight:"10px"}}/>
          <div>
            <h3>Flexible Teaching Approaches</h3>
            <p>Our faculty members adapt their teaching methods to meet the diverse learning needs of students.</p>
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
       
        
      </Row>

      <footer className="py-3 my-4">
    <h6 className='' style={{textAlign:'center'}}>Gurukul Public School</h6>
    <hr/>
    <p className="text-center text-body-secondary"> © 2024 Gurukul Public School. All rights reserved</p>
    <p className="text-center text-body-secondary"> Designed By : Web Spirits , IT Department of SCOE</p>
  </footer>
  
    </Container>

    
  );
};

export default FacultyPage;