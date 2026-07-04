import Dashboard from './components/Dashboard';
import DesignerPanel from './components/DesignerPanel';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <Dashboard />
      <DesignerPanel />
    </div>
  );
}

export default App;
