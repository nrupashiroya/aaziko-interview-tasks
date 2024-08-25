import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Task1 from './pages/Task1';
import Task2 from './pages/Task2';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task-1" element={<Task1 />} />
          <Route path="/task-2" element={<Task2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
