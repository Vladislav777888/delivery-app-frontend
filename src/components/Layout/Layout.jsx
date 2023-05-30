import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar } from 'components/AppBar';
import { ToastContainer } from 'react-toastify';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <ToastContainer />
        <Outlet />
      </Suspense>
    </>
  );
};
