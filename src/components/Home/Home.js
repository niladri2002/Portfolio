import React,{useState,useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { db } from "../../firebase";

function Home() {
  const [visitorCount, setVisitorCount] = useState(0);
  useEffect(() => {
    const incrementVisitorCount = async () => {
      const visitorRef = db.collection('visitors').doc('count');
      const doc = await visitorRef.get();
      if (doc.exists) {
        const currentCount = doc.data().count;
        await visitorRef.update({ count: currentCount + 1 });
        setVisitorCount(currentCount + 1);
      }
    };

    incrementVisitorCount();
  }, []);
  return (
    <section>
      <Container fluid className="home-section" id="home">
      
        <Particle />
        
        <Container className="home-content">
        
          <Row>
          <h2>Today's Visitor Count: {visitorCount}</h2>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> NILADRI SADHU</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
