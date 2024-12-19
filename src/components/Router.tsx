import { Routes, Route} from 'react-router-dom'
import { GlobalComponent } from './GlobalComponent/GlobalComponent'
import { LogScreen } from './LoginPage/LogScreen'
import { AdminPage } from './AdminPage/AdminPage'
import { ProtectedRoutes }  from '../components/ProtectedRoute'
import { useEffect, useState } from 'react'

export function Router() {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const storedAuth = sessionStorage.getItem("isAuthenticated")
        return storedAuth === "true"
    })

    useEffect(() => {
        sessionStorage.setItem("isAuthenticated", isAuthenticated.toString())
    },[isAuthenticated])

    return (
        <Routes>
            <Route path="/" element={<GlobalComponent />} /> 
            <Route path="/login" element={<LogScreen setIsAuthenticated={setIsAuthenticated} />} />
            <Route element={<ProtectedRoutes isAuthenticated={isAuthenticated} />}>
                <Route path="/admin" element={<AdminPage />} /> 
            </Route>
            
        </Routes>
    )
}




