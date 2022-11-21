import movieModel from "./movieModel";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

type Props = {
  movie: movieModel;
};

const MoiveModelList = ({ movie }: Props) => {
  return (
    <Card>
      <Card.Img variant="top" src={movie.posterurl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <FontAwesomeIcon
          icon={faHeart}
          style={{ fontSize: "0.9em", marginRight: "10px", color: "red" }}
        />
        {/* <Link to={''}
          style={{ whiteSpace: "nowrap" }}
          className="btn btn-primary bt-sm"
        >
          Add to favourit
        </Link> */}
      </Card.Body>
    </Card>
  );
};

export default MoiveModelList;
