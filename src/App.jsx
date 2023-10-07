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
import { diariesLoader, diaryLoader } from '../utils/api'
import NotFound from './layouts/NotFound'
import { QueryClient, QueryClientProvider } from 'react-query'

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
            <Route path='*' element={<NotFound />} />
        </Route>
    )
)

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    )
}

export default App
