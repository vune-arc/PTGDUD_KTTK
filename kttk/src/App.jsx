import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Contents from './components/Contents';
import Help from './pages/Help';
import Notifications from './pages/Notifications';
import Project from './pages/Projects';
import Team from  './pages/Teams';
import Analytics from './pages/Analytics';
import Messages from './pages/Messages';
import Integrations from './pages/Integrations';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Contents />} />
          <Route path="dashboard" element={<Contents />} />
          <Route path="help" element={<Help />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/integrations" element={<Integrations />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
