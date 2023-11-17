import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom'
import {
    addDiaryAction,
    diariesLoader,
    diaryLoader,
    editDiaryAction,
    loginAction,
} from '../utils/api'
import { QueryClient, QueryClientProvider } from 'react-query'
import { HelmetProvider } from 'react-helmet-async'
import { Suspense, lazy } from 'react'

const Root = lazy(() => import('./layouts/Root'))
const Portfolio = lazy(() => import('./layouts/Portfolio'))
const Diary = lazy(() => import('./layouts/Diary'))
const DiaryDetail = lazy(() => import('./components/DiaryDetail'))
const NotFound = lazy(() => import('./layouts/NotFound'))
const Login = lazy(() => import('./layouts/Login'))
const Dashboard = lazy(() => import('./layouts/Dashboard'))
const Protected = lazy(() => import('./layouts/Protected'))
const AddDiary = lazy(() => import('./layouts/AddDiary'))
const EditDiary = lazy(() => import('./layouts/EditDiary'))
const DiaryCollection = lazy(() => import('./components/DiaryCollection'))

const queryClient = new QueryClient()

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route index element={<Portfolio />} />
            <Route path='diary' element={<Diary />}>
                <Route
                    index
                    element={<DiaryCollection />}
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
                <Route
                    path='edit/:id'
                    element={<EditDiary />}
                    loader={diaryLoader(queryClient)}
                    action={editDiaryAction(queryClient)}
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
                <Suspense>
                    <RouterProvider router={router} />
                </Suspense>
            </QueryClientProvider>
        </HelmetProvider>
    )
}

export default App
