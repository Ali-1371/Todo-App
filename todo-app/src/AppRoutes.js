import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const TodoList = React.lazy(() => import('./containers/todo/TodoList'));
const TodoEdit = React.lazy(() => import('./containers/todo/TodoEdit'));
const TodoAdd = React.lazy(() => import('./containers/todo/TodoAdd'));

const routes = [
  { component: <TodoList />, path: '/' },
  { component: <TodoAdd />, path: '/add' },
  { component: <TodoEdit />, path: '/edit/:id' },
];

const AppRoutes = () => {
  return (
    <Suspense
      fallback={
        <div className='text-center'>
          <p>Please wait a moment</p>
        </div>
      }
    >
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
