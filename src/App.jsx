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

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route
                index
                lazy={async () => {
                    const component = await import('./layouts/Portfolio')
                    return { Component: component.default }
                }}
            />
            <Route
                path='diary'
                lazy={async () => {
                    const component = await import('./layouts/Diary')
                    return { Component: component.default }
                }}
            >
                <Route
                    index
                    loader={diariesLoader(queryClient)}
                    lazy={async () => {
                        const component = await import(
                            './components/DiaryCollection'
                        )
                        return { Component: component.default }
                    }}
                />
                <Route
                    path=':id'
                    loader={diaryLoader(queryClient)}
                    lazy={async () => {
                        const component = await import(
                            './components/DiaryDetail'
                        )
                        return { Component: component.default }
                    }}
                />
            </Route>
            <Route
                path='login'
                action={loginAction}
                lazy={async () => {
                    const component = await import('./layouts/Login')
                    return { Component: component.default }
                }}
            />
            <Route element={<Protected />}>
                <Route
                    path='dashboard'
                    loader={diariesLoader(queryClient)}
                    lazy={async () => {
                        const component = await import('./layouts/Dashboard')
                        return { Component: component.default }
                    }}
                />
                <Route
                    path='add'
                    action={addDiaryAction(queryClient)}
                    lazy={async () => {
                        const component = await import('./layouts/AddDiary')
                        return { Component: component.default }
                    }}
                />
                <Route
                    path='edit/:id'
                    loader={diaryLoader(queryClient)}
                    action={editDiaryAction(queryClient)}
                    lazy={async () => {
                        const component = await import('./layouts/EditDiary')
                        return { Component: component.default }
                    }}
                />
            </Route>
            <Route
                path='*'
                lazy={async () => {
                    const component = await import('./layouts/NotFound')
                    return { Component: component.default }
                }}
            />
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
