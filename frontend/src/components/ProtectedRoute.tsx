import { Navigate } from "react-router-dom"; 
import { useAuthStore } from "../stores/userStore"; 
import { useState, useEffect } from "react"; 
import {LoadingComponent} from "./LoadingComponent"; 

interface ProtectedRouteProps { children: JSX.Element; } 
export function ProtectedRoute({ children }: ProtectedRouteProps) {

  const { user, loading, checkAuth } = useAuthStore(); 
  
  const [initialized, setInitialized] = useState(false); 

  useEffect(() => { 
    const initAuth = async () => { 
      await checkAuth(); 
      setInitialized(true); 
    }; 
      initAuth(); 
  }, [checkAuth]);

    if (loading || !initialized) return <LoadingComponent />; 

    if (!user) return <Navigate to="/login" replace />; 
    
    return children; 
}
