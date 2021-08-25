import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./components/redux/store"
import { Layout } from "./components/layout/Layout";
import { Rutas } from "./components/router/Rutas";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faMapMarkerAlt, faUsers, faStar, faExclamationCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

function App() {
  // Carga los iconos de FontAwesome
  library.add( faCheckSquare, faCoffee, faMapMarkerAlt, faGithub, faUsers, faStar, faTwitter, faExclamationCircle, faSearch )
  
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Rutas />
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;