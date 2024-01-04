import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./i18";
import { ErrorPage } from "./components/error-page";
import { HomePage } from "./pages/home";
import { PostPage } from "./pages/post";
import { PostsPage } from "./pages/posts";

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  { path: "/posts", element: <PostsPage /> },
  { path: "/post/:postId", element: <PostPage /> }
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
