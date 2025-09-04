import { Route, Routes } from "react-router-dom"
import { LoginScreen } from "../views/login/LoginScreen"
import { SignUpScreen } from "../views/signup/SignUpScreen"
import { ForgotPassword } from "../views/forgot/ForgotPasswordScreen"
import { ResetPasswordScreen } from "../views/reset/ResetPasswordScreen"
import { DashboardScreen } from "../views/dashboard/DashboardScreen"
import { ActivateAccountScreen } from "../views/activate/ActivateAccountScreen"
import {NotFoundScreen} from "../views/not-found/NotFound"
import { ProtectedRoute } from "../components/ProtectedRoute"

export function AppRoutes() {
    return(
        <Routes>
            <Route path="*" element={<NotFoundScreen />} />
            <Route path="/activate/:uid/:token" element={<ActivateAccountScreen />} />
            <Route path="/dashboard" element={<ProtectedRoute><DashboardScreen /></ProtectedRoute >} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/login" element={<LoginScreen/>} />
            <Route path="/reset" element={<ResetPasswordScreen />} />
            <Route path="/signup" element={<SignUpScreen />} />
        </Routes>
    )
}