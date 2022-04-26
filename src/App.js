import Profile from "./components/Profile";
import UserList from "./components/UserList";
import UserState from "./context/user/UserState";

function App() {
  return (
    <>
    <h1 className="bg-dark text-center text-white p-2">useContext</h1>
    <UserState>
      <UserList />
      <Profile />
    </UserState>
    </>
  );
}

export default App;
