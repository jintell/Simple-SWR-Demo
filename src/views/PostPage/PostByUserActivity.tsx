import {useParams} from "react-router-dom";
import {PostActivity} from "../../components/Post";

export const PostByUserActivity = () => {
    const { userId = '' } = useParams();
    return (
        <div className="container">
            <h2 style={{ textAlign: 'center' }}> User Posts </h2>
            <hr />
            <PostActivity userId={userId} />
        </div>
    )
}