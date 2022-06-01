import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import { Provider } from './repository/store';

// ReactDOM.render(
//     <React.StrictMode>
//         <HashRouter basename='/'>
//             <div>
//                 Welcome to Wexler Calculate!
//                 <ul>
//                     <a href='/#/'><li>Home</li></a>
//                 </ul>
//                 <Route path='/' element={<PlainApp/>} />
//             </div>
//         </HashRouter>
//     </React.StrictMode>,
//     document.getElementById('root'),
// );

ReactDOM.render(
    <React.StrictMode>
        <Provider>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
