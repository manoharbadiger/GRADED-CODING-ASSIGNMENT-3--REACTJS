import { useEffect, useState } from "react";
import movieModel from "../model/movieModel";
import { getTopRatedMovies } from "../services/movies";
import { Alert, Row, Col, Spinner } from "react-bootstrap";
import MoiveModelList from "../model/movieModelList";



const TopRated = () => {
    const [moiveTheater, setMovies] = useState<movieModel[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
  
    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const data = await getTopRatedMovies();
          setMovies(data);
        } catch {
          setError(error as Error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchMovies();
    }, []);
  
    return (
      <div>
        <hr />
        {loading && (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">
                Fetch details of the moives...
              </span>
            </Spinner>
          </div>
        )}
        {error && <Alert variant="danger">{error.message}</Alert>}
        {moiveTheater.length !== 0 && (
          <Row xs={1} md={2} lg={3}>
            {moiveTheater.map((movie) => (
              <Col key={movie.id} className="d-flex my-3">
                <MoiveModelList movie={movie} key={movie.id} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    );
}
 
export default TopRated;