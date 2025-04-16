import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Contents from './components/Contents';
import Help from './pages/Help';
import Notifications from './pages/Notifications';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Contents />} />
          <Route path="dashboard" element={<Contents />} />
          <Route path="help" element={<Help />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
