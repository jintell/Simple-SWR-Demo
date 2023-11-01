import {DeletePostService} from "../../services/postService";

export const DeletePost = (params : any) => {
    const { userPost, updateUserPost } = params;
    const { deletePost, } = DeletePostService(userPost?.id);


    const removePost = () => {
        deletePost();
        updateUserPost(null, '');
    }

    return (
        <>
            <button type="button" className="btn btn-danger btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Do you Really Want to Delete the Post?
            </button>

            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Post</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            You're a about Deleting <strong>{userPost.title}</strong>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger btn-lg" data-bs-dismiss="modal" onClick={removePost}>
                                Confirm Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}