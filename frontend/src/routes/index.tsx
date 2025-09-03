import { Route, Routes, Navigate } from "react-router-dom"
import { LoginScreen } from "../views/login/LoginScreen"
import { SignUpScreen } from "../views/signup/SignUpScreen"
import { ForgotPassword } from "../views/forgot/ForgotPasswordScreen"
import { ResetPasswordScreen } from "../views/reset/ResetPasswordScreen"
import { DashboardScreen } from "../views/dashboard/DashboardScreen"
import { ActivateAccountScreen } from "../views/activate/ActivateAccountScreen"

export function AppRoutes() {
    return(
        <Routes>
            <Route path="*" element={<Navigate to="/login"/>} />
            <Route path="/activate/:uid/:token" element={<ActivateAccountScreen />} />
            <Route path="/dashboard" element={<DashboardScreen />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/reset" element={<ResetPasswordScreen />} />
            <Route path="/signup" element={<SignUpScreen />} />
        </Routes>
    )
}