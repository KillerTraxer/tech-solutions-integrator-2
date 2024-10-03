import { Redirect, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { homeOutline, briefcaseOutline, chatbubblesOutline, peopleOutline } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ContactForm from './pages/ContactForm';
import Teamwork from './pages/Teamwork';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

// import '@ionic/react/css/palettes/dark.always.css';
// import '@ionic/react/css/palettes/dark.class.css'; 
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

import './App.css'

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <Tabs />
      </IonReactRouter>
    </IonApp>
  );
};

const Tabs: React.FC = () => {
  const isActiveRoute = (routePath: string) => {
    const location = useLocation();
    return location.pathname === routePath;
  };

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact-form">
          <ContactForm />
        </Route>
        <Route path="/teamwork">
          <Teamwork />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>

      <IonTabBar slot="bottom" className='bottom-navbar' color={"light"}>
        <IonTabButton tab="home" href="/home">
          <IonIcon aria-hidden="true" icon={homeOutline} className={`custom-icon-color ${isActiveRoute('/home') ? 'active' : ''}`} />
          <IonLabel className={`custom-icon-color ${isActiveRoute('/home') ? 'active' : ''}`}>{isActiveRoute('/home') ? "°" : ""}</IonLabel>
        </IonTabButton>
        <IonTabButton tab="portfolio" href="/portfolio">
          <IonIcon aria-hidden="true" icon={briefcaseOutline} className={`custom-icon-color ${isActiveRoute('/portfolio') ? 'active' : ''}`} />
          <IonLabel className={`custom-icon-color ${isActiveRoute('/portfolio') ? 'active' : ''}`}>{isActiveRoute('/portfolio') ? "°" : ""}</IonLabel>
        </IonTabButton>
        <IonTabButton tab="contact-form" href="/contact-form">
          <IonIcon aria-hidden="true" icon={chatbubblesOutline} className={`custom-icon-color ${isActiveRoute('/contact-form') ? 'active' : ''}`} />
          <IonLabel className={`custom-icon-color ${isActiveRoute('/contact-form') ? 'active' : ''}`}>{isActiveRoute('/contact-form') ? "°" : ""}</IonLabel>
        </IonTabButton>
        <IonTabButton tab="teamwork" href="/teamwork">
          <IonIcon aria-hidden="true" icon={peopleOutline} className={`custom-icon-color ${isActiveRoute('/teamwork') ? 'active' : ''}`} />
          <IonLabel className={`custom-icon-color ${isActiveRoute('/teamwork') ? 'active' : ''}`}>{isActiveRoute('/teamwork') ? "°" : ""}</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default App;
