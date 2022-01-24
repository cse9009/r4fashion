import {BrowserRouter as Router} from 'react-router-dom';
import SiteLayout from './containers/layouts/SiteLayout';
import BaseRouter from './routers';

function App() {
  return (
    <Router>
      <SiteLayout>
          <BaseRouter/>
      </SiteLayout>
    </Router>
  );
}

export default App;
