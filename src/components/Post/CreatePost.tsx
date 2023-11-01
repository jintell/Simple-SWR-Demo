import {Posts} from "../model/Posts";
import {useState} from "react";
import {CreateNewPostService} from "../../services";

class PostsImpl implements Posts {
    body: string = '';
    id: number | undefined;
    title: string = '';
    userId: number = 0;
}
export const CreatePost = (params : any) => {
    const { userId } = params;
    const post: Posts = new PostsImpl();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const { addNewPost, posts, error, isError } = CreateNewPostService();

    const createNewPost = async (event: any) => {
        event.preventDefault();
        if(title.length === 0) {
            alert("Please provide the title");
            return;
        } if(body.length === 0) {
            alert("Please provide the body");
            return;
        }
        post.title = title;
        post.body = body;
        post.userId = parseInt(userId);
        await addNewPost(JSON.stringify(post));
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

            {posts ? (
                <div className="alert alert-success" role="alert">
                    Your New Post has been added Successfully!
                </div>
            ) : null
            }
            <form onSubmit={createNewPost}>
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
                        <button type="submit"
                                className="btn btn-primary">
                            Post
                        </button>
                    </div>
                </div>
            </form>
        </>
    );

}