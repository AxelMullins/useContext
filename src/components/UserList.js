import { useEffect } from "react";
import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserContext from "../context/user/UserContext";

const UserList = () => {
  const { users, getUsers, getProfile } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container className="mt-5">
      <Row className="g-5">
        {users.map((user) => (
          <Col key={user.id}>
          <a href="#!" onClick={() => getProfile(user.id)}>
            <img src={user.avatar} alt={user.first_name} className="rounded shadow"/>
          </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserList;
