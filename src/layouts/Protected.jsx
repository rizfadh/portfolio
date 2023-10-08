import { Navigate, Outlet, useOutletContext } from 'react-router-dom'

function Protected() {
    const { accessToken } = useOutletContext()
    return accessToken ? <Outlet /> : <Navigate to='/login' replace />
}

export default Protected
