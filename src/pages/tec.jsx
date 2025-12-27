import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import NewsCard from "../component/newscard.jsx";

const API_KEY = process.env.REACT_APP_API_KEY;
const Technology = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=technology+bangladesh&apiKey=${API_KEY}`
      )
      .then((res) => {
        setNews(res.data.articles);
        localStorage.setItem(
          "newsData",
          JSON.stringify(res.data.articles)
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container className="mt-4">
      <h3 className="mb-4">💻 Technology News</h3>

      <Row>
        {news.map((item, index) => (
          <Col md={4} key={index}>
            <NewsCard news={item} index={index} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Technology;
