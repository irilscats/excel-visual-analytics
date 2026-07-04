import Dashboard from './components/Dashboard';
import DesignerPanel from './components/DesignerPanel';
import Navigation from './components/Navigation';
import { layoutStyles } from './styles';

export default function Entry() {
  return <div style={layoutStyles.shell}><Navigation /><Dashboard /><DesignerPanel /></div>;
}
