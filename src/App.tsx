import { Route, Switch } from 'wouter'
import Home from './pages/home'
import Programas from './pages/programas'
import Episodio from './pages/programas/Episodio'
import Biografia from './pages/biografia'
import Contacto from './pages/contacto'
import Error from './pages/error'

function App() {
  return (
    <Switch>
      <Route
        path='/'
        component={Home}
      />
      <Route
        path='/programas/:id/:slug'
        component={Programas}
      />
      <Route
        path='/programas'
        component={Programas}
      />
      <Route
        path='/programas/:id/:slug/episodio/:ide'
        component={Episodio}
      />
      <Route
        path='/biografia'
        component={Biografia}
      />
      <Route
        path='/contacto'
        component={Contacto}
      />
      <Route component={Error} />
    </Switch>
  )
}

export default App
