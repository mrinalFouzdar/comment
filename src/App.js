import './App.css';
import UserUi from './Components/UserUi';
import userData from './Data/userData';

function App() {
  return (
    <div className="App">
      <UserUi userData={userData}/>
    </div>
  );
}

export default App;
