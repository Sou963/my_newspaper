import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewsCard = ({ news, index }) => {
  return (
    <Card className="mb-4">
      <Card.Img
        variant="top"
        src={news.urlToImage || "https://via.placeholder.com/300"}
      />

      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Text>{news.description}</Card.Text>

        <Button
          as={Link}
          to={`/news/${index}`}
          variant="primary"
        >
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
