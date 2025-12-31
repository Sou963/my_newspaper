import { Card, Button, Modal } from "react-bootstrap";
import { useState } from "react";

const NewsCard = ({ news }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (!news) return null;

  return (
    <>
      <Card className="h-100 shadow-sm">
        <Card.Img
          variant="top"
          src={news.urlToImage || "https://via.placeholder.com/400x200"}
          alt={news.title}
        />
        <Card.Body>
          <Card.Title className="fs-6">{news.title}</Card.Title>
          <Card.Text className="small">
            {news.description?.slice(0, 100)}...
          </Card.Text>
          <Button size="sm" onClick={handleShow}>
            Read More
          </Button>
        </Card.Body>
      </Card>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{news.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={news.urlToImage || "https://via.placeholder.com/400x200"}
            alt={news.title}
            className="img-fluid mb-3"
          />
          <p>{news.content || news.description}</p>
          <a href={news.url} target="_blank" rel="noreferrer">
            Source Link
          </a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewsCard;
