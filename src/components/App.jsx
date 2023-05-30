import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import AllShopsPage from 'pages/AllShopsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AllShopsPage />} />
        <Route path="/" element={<AllShopsPage />}>
          <Route path=":category" />
        </Route>
        <Route path="/carts" element={<div>Cart page</div>} />
        <Route path="/ordersHistory" element={<div>Orders history page</div>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
