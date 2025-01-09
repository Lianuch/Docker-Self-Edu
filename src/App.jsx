import React from "react";
import { Routes, Route, Navigate } from "react-router";
import "./App.css";

import { Layout } from "./components/Layout";
import { HomePage } from "./pages/homePage";
import { AboutPage } from "./pages/AboutPage";
import { NotFoundPage } from "./pages/notFoundPage";
import { SinglePage } from "./pages/singlePage";
import { BlogPage } from "./pages/blogPage";
import { EditPage } from "./pages/editPage";
import { LoginPage } from "./pages/loginPage";
import { RequireAuth } from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";
import { ErrorPage } from "./pages/errorPage";
import { createPage } from './pages/createPage'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />}>
            <Route path="contacts" element={<h1>Contacts</h1>} />
            <Route path="team" element={<h1>Team</h1>} />
          </Route>
          <Route path="about-us" element={<Navigate to={"/about"} replace />} />
          <Route path="posts" element={<BlogPage />} errorElement={<ErrorPage/>} />
          <Route path="posts/:id" element={<SinglePage />} />
          <Route path="posts/:id/edit" element={<EditPage />} />
          <Route
            path="posts/new"
            element={
              <RequireAuth>
                <createPage/>
              </RequireAuth>
            }
          />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
