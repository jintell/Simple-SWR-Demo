import {useState} from "react";
import { EditPostService} from "../../services/postService";

export const EditPost = (params : any) => {
    const { userPost, updateUserPost } = params;
    const [title, setTitle] = useState(userPost?.title);
    const [body, setBody] = useState(userPost?.body);
    const { modifyPost, posts, error, isError } = EditPostService(userPost?.id);

    const updatePost = async (event: any) => {
        event.preventDefault();
        if(title.length === 0) {
            alert("Please provide the title");
            return;
        } if(body.length === 0) {
            alert("Please provide the body");
            return;
        }
        userPost.title = title;
        userPost.body = body;
        await modifyPost(JSON.stringify(userPost));
        updateUserPost(null, 'edit');
        setTitle('');
        setBody('');
    }

    return (
        <>
            {isError ? (
                <div className="alert alert-danger" role="alert">
                    Sorry an  error occurred: {error?.message}
                </div>
            ) : null
            }

            {posts? (
                <div className="alert alert-success" role="alert">
                    Your Post was updated Successfully!
                </div>
            ) : null
            }
            <form onSubmit={updatePost}>
                <div className="form-group row">
                    <label htmlFor="title2" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control"
                               value={title}
                               onChange={(e)=> setTitle(e.target.value)}
                               id="title2" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="body2" className="col-sm-2 col-form-label">Message</label>
                    <div className="col-sm-10">
                        <textarea className="form-control"
                                  rows={3}
                                  value={body}
                                  onChange={(e)=> setBody(e.target.value)}
                                  id="body2" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Save Edit</button>
                    </div>
                </div>
            </form>
        </>
    );
}