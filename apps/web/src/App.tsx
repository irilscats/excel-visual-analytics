import Dashboard from './components/Dashboard';
import DesignerPanel from './components/DesignerPanel';
import Sidebar from './components/Sidebar';
import { layoutStyles } from './styles';

function App() {
  return (
    <div style={layoutStyles.shell}>
      <Sidebar />
      <Dashboard />
      <DesignerPanel />
    </div>
  );
}

export default App;
