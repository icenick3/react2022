import css from './App.module.css';
import {Routes, Route, Link} from 'react-router-dom'
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import UserDetails from "./components/Users/UserDetails";
import PostsOfUser from "./components/Posts/PostsOfUser";
import PostsDetails from "./components/Posts/PostsDetails";
import Comments from "./components/Comments/Comments";


function App() {
    return (
        <>
            <div className={css.header}>
                <Link to={'/users'}>Users</Link>
                <Link to={'/posts'}>Posts</Link>


            </div>
            <Routes>
                <Route path={'/users'} element={<UsersPage/>}>
                    <Route path={'/users/:id'} element={<UserDetails/>}>
                        <Route path={'/users/:id/posts'} element={<PostsOfUser/>}/>
                    </Route>
                </Route>
                <Route path={'/posts'} element={<PostsPage/>}>
                    <Route path={'/posts/:id'} element={<PostsDetails/>}>
                        <Route path={'/posts/:id/comments'} element={<Comments/>}/>
                    </Route>
                    </Route>
            </Routes>

        </>
    );
}

export default App;
