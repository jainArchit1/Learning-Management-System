import { useState } from "react";
import { Button } from "./components/ui/button";
import "./App.css";
import LoginSignup from "./pages/LoginSignup";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/student/HeroSection";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Courses from "./pages/student/Courses";
import MyLearning from "./pages/student/MyLearning";
import Profile from "./pages/student/Profile";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection></HeroSection>
            <Courses></Courses>
          </>
        ),
      },
      {
        path: "/login",
        element: (
          <>
            <LoginSignup></LoginSignup>
          </>
        ),
      },
      {
        path: "/mylearning",
        element: <MyLearning></MyLearning>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={appRouter}></RouterProvider>
    </main>
  );
}

export default App;
