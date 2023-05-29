import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Layout</div>}>
        <Route index element={<div>Shops page</div>} />
        <Route path="shops" element={<div>Shops page</div>}>
          <Route path=":categoryName" element={<div>Shop page</div>} />
        </Route>
        <Route path="/carts" element={<div>Cart page</div>} />
        <Route path="/ordersHistory" element={<div>Orders history page</div>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
