import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import AppLayout from "./layout/AppLayout";
import CreateAccount from "./pages/AuthPages/CreateAccount";
import ResetPassword from "./pages/AuthPages/ResetPassword";
import SignIn from "./pages/AuthPages/SignIn";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main app routes */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />

        </Route>

        {/* Auth routes */}
        <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/auth/create-account" element={<CreateAccount />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
