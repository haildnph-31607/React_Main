import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import './index.scss';
import './assets/css/style.css'
import './assets/css/plugins/jquery.fancybox.css';
import './assets/css/plugins/swiper.min.css';
// import './assets/js/plugins/jquery.fancybox.js';
// import './assets/js/plugins/countdown.js';
// import './assets/js/plugins/swiper.min.js';
// import './assets/js/plugins/bootstrap-slider.min.js ';
// import './assets/js/plugins/bootstrap.bundle.min.js';
// import './assets/js/plugins/jquery.min.js';






import ProductContextProvider, { ProductContext } from './context/ProductContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ProductContextProvider>
            <App />
    </ProductContextProvider>
  
    
    </BrowserRouter>

  </React.StrictMode>,
)


