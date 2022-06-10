import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      <div className="container my-5">
        <TextForm heading="Enter the text to analyze:" />
      </div>
      <About />
    </>
  );
}

export default App;
