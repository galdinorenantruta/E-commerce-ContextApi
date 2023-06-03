import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavbarComponent from './components/Navbar';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Container>
        <NavbarComponent/>
      </Container>
    </div>
  );
}

export default App;
