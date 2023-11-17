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
import Root from './layouts/Root'
import Protected from './layouts/Protected'

const queryClient = new QueryClient()
const importDefault = async (path) => {
    const component = await import(path)
    return { Component: component.default }
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route index lazy={() => importDefault('./layouts/Portfolio')} />
            <Route path='diary' lazy={() => importDefault('./layouts/Diary')}>
                <Route
                    index
                    loader={diariesLoader(queryClient)}
                    lazy={() => importDefault('./components/DiaryCollection')}
                />
                <Route
                    path=':id'
                    loader={diaryLoader(queryClient)}
                    lazy={() => importDefault('./components/DiaryDetail')}
                />
            </Route>
            <Route
                path='login'
                action={loginAction}
                lazy={() => importDefault('./layouts/Login')}
            />
            <Route element={<Protected />}>
                <Route
                    path='dashboard'
                    loader={diariesLoader(queryClient)}
                    lazy={() => importDefault('./layouts/Dashboard')}
                />
                <Route
                    path='add'
                    action={addDiaryAction(queryClient)}
                    lazy={() => importDefault('./layouts/AddDiary')}
                />
                <Route
                    path='edit/:id'
                    loader={diaryLoader(queryClient)}
                    action={editDiaryAction(queryClient)}
                    lazy={() => importDefault('./layouts/EditDiary')}
                />
            </Route>
            <Route path='*' lazy={() => importDefault('./layouts/NotFound')} />
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
