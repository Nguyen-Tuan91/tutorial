import { Outlet, Link } from 'react-router-dom';

const App=() => {
  return (
    <div>
      <h1>BookKeepers</h1>
      <nav style={{borderBottom: "solid 1px"}, {paddingBottom: "1rem"}}>
      <Link to="/invoices">Invoices</Link> |{" "}
      <Link to="/expense">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}
export default App;