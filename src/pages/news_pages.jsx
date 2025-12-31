import { useParams } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

const NewsDetails = () => {
  const { id } = useParams();
  const news = JSON.parse(localStorage.getItem("newsData")) || [];
  const article = news[id];

  if (!article) {
    return <h3 className="text-center mt-5">News not found</h3>;
  }

  return (
    <Container className="mt-5">
      <Card>
        <Card.Img
          src={article.urlToImage || "https://via.placeholder.com/600"}
        />

        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <p>{article.content || article.description}</p>

          <Button onClick={() => window.history.back()}>← Back</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NewsDetails;
