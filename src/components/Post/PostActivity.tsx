import {useState} from "react";
import {PostByUser} from "./PostByUser";
import {CreatePost} from "./CreatePost";
import {EditPost} from "./EditPost";
import {DeletePost} from "./DeletePost";

export const PostActivity = (params : any) => {
    const { userId } = params;
    const [userPost, setUserPost] = useState(null);
    const [action, setAction] = useState('');

    const updateUserPost = ( post: any, type : string ) => {
        setUserPost(post);
        setAction(type);
    }

    return (
        <div className="row">
            <div className="col-lg-5">
                <PostByUser userId={userId} updatePost={updateUserPost} />
            </div>
            <div className="col-lg-5">
                {userPost === null ?
                    <CreatePost userId={userId} /> :
                    (action === 'edit') ?
                        <EditPost userPost={userPost} updateUserPost={updateUserPost} />
                        : <DeletePost  userPost={userPost} updateUserPost={updateUserPost} />
                }
            </div>
        </div>
    )

}