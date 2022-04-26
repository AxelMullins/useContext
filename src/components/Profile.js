import { useContext } from "react";
import { Card, Container } from "react-bootstrap";
import UserContext from "../context/user/UserContext";
const Profile = () => {
  const { selectedUser } = useContext(UserContext);
  return (
    <Container style={{ width: "40%", padding: "4em 10em" }}>
      {selectedUser ? (
        <Card className="shadow">
          <Card.Img
            variant="top"
            src={selectedUser.avatar}
            alt={selectedUser.first_name}
          />
          <Card.Body>
            <Card.Title>
              {selectedUser.first_name} {selectedUser.last_name}
            </Card.Title>
            <Card.Text>{selectedUser.email}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <p className="text-center">Seleccione un usuario</p>
      )}
    </Container>
  );
};

export default Profile;
