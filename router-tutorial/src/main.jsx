import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Expenses from './routes/expenses';
import Invoices from './routes/Invoices';


ReactDOM.render(<BrowserRouter>
                <Routes>
                <Route path="/" element={<App />} >
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/expenses" element={<Expenses />} />
                </Route>
                </Routes>
                </BrowserRouter>, document.getElementById('root'));