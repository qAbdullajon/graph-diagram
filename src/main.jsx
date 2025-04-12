import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import configureStore from './store/configureStore.js';
import { Provider } from 'react-redux';

const store = configureStore();

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
