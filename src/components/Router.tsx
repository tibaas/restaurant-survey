import { Routes, Route} from 'react-router-dom'
import { GlobalComponent } from './GlobalComponent/GlobalComponent'
import { LogScreen } from './LoginPage/LogScreen'
import { AdminPage } from './AdminPage/AdminPage'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<GlobalComponent />} />
            <Route path="/login" element={<LogScreen />} />
            <Route path="/admin" element={<AdminPage />} /> 
        </Routes>
    )
}