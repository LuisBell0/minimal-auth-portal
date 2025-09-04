import { Route, Routes } from "react-router-dom";
import { LoginScreen } from "../views/login/LoginScreen";
import { SignUpScreen } from "../views/signup/SignUpScreen";
import { ForgotPassword } from "../views/forgot/ForgotPasswordScreen";
import { DashboardScreen } from "../views/dashboard/DashboardScreen";
import { ActivateAccountScreen } from "../views/activate/ActivateAccountScreen";
import { NotFoundScreen } from "../views/not-found/NotFound";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { ForgotPasswordUpdateScreen } from "../views/forgot/ForgotPasswordUpdateScreen";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundScreen />} />
      <Route
        path="/activate/:uid/:token/"
        element={<ActivateAccountScreen />}
      />
      <Route
        path="/dashboard/"
        element={
          <ProtectedRoute>
            <DashboardScreen />
          </ProtectedRoute>
        }
      />
      <Route path="/forgot/" element={<ForgotPassword />} />
      <Route
        path="/forgot/change/:uid/:token/"
        element={<ForgotPasswordUpdateScreen />}
      />
      <Route path="/login/" element={<LoginScreen />} />
      <Route path="/signup/" element={<SignUpScreen />} />
    </Routes>
  );
}
