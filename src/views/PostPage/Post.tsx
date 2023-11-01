import { PostById } from "../../components/Post";
import {useParams} from "react-router-dom";
export const Post = () => {
    const { id = 0} = useParams();
    return (
        <div className="fluid-container" style={{ margin: 'auto 5%' }}>
            <PostById id={id}/>
        </div>
    )
}