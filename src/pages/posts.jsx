import { ErrorBoundaries } from "../components/ErrorBoundaries";
import { Navigation } from "../components/Navigation";
import Posts from "../components/posts";

export function PostsPage() {
    return <ErrorBoundaries>
        <Navigation />
        <Posts />
    </ErrorBoundaries>
}