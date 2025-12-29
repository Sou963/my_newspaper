import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import NewsCard from "./newscard.jsx";

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("https://my-news-backend-466li9rku-sourav-bosus-projects-592bdce6.vercel.app/api/news")
      .then((res) => {
        setNews(res.data.articles);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        {news.length === 0 && <p>Loading news...</p>}

        {news.map((item, index) => (
          <Col md={4} key={index} className="mb-3">
            <NewsCard news={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewsList;
