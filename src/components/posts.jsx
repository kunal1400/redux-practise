import { useAppDispatch } from "../redux/hooks";
import { add } from "../redux/postsSlice";
import { useFetchTodosQuery } from "../redux/api";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export default function Posts() {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const {data: posts, isFetching, isSuccess, isError} = useFetchTodosQuery();
    // const {posts, status, error} = useAppSelector((state) => state.posts);

    // useEffect(() => {
    //     if(status === "idle") {
    //         dispatch(fetchTodos())
    //     }
    // },[status])

    const handleSubmit = (e) => {
        e.preventDefault();
        const postTitle = e.target.postTitle.value;
        const postContent = e.target.postContent.value;
        const post = { title: postTitle, content: postContent };
        dispatch(add(postTitle, postContent));
    }

    if(isFetching) return <div>Loading...</div>

    if(isError) return <div>{isError}</div>

    return <div>
        <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <td>Post title</td>
                        <td><input type="text" name="postTitle" /></td>
                    </tr>
                    <tr>
                        <td>Post content</td>
                        <td><textarea name="postContent" /></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><button type="submit">Submit</button></td>
                    </tr>
                </tbody>
            </table>
        </form>
        <LanguageSwitcher />
        <h2>{t('postsHeading')}</h2>
        {posts.map((post) => {
            return <div>
                <h3>#{post.id} {post.title}</h3>
                <p>{post.body}</p>
                
            </div>
        })}
    </div>
}