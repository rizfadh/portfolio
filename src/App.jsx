import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom'
import Portfolio from './layouts/Portfolio'
import Diary from './layouts/Diary'
import DiaryDetail from './components/DiaryDetail'
import Root from './layouts/Root'
import DiaryList from './components/DiaryList'
import {
    addDiaryAction,
    diariesLoader,
    diaryLoader,
    loginAction,
} from '../utils/api'
import NotFound from './layouts/NotFound'
import { QueryClient, QueryClientProvider } from 'react-query'
import Login from './layouts/Login'
import Dashboard from './layouts/Dashboard'
import Protected from './layouts/Protected'
import AddDiary from './layouts/AddDiary'
import { HelmetProvider } from 'react-helmet-async'

const queryClient = new QueryClient()

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route index element={<Portfolio />} />
            <Route path='diary' element={<Diary />}>
                <Route
                    index
                    element={<DiaryList />}
                    loader={diariesLoader(queryClient)}
                />
                <Route
                    path=':id'
                    element={<DiaryDetail />}
                    loader={diaryLoader(queryClient)}
                />
            </Route>
            <Route path='login' element={<Login />} action={loginAction} />
            <Route element={<Protected />}>
                <Route
                    path='dashboard'
                    element={<Dashboard />}
                    loader={diariesLoader(queryClient)}
                />
                <Route
                    path='add'
                    element={<AddDiary />}
                    action={addDiaryAction(queryClient)}
                />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Route>
    )
)

function App() {
    return (
        <HelmetProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </HelmetProvider>
    )
}

export default App
