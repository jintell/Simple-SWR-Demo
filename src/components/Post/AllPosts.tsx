import { Posts } from "../model/Posts";
import {GetAllPostService} from "../../services";

export const AllPosts = () => {
    const { posts, isLoading, isError } = GetAllPostService();

    if (isLoading) {
        return (
            <div style={{ margin: '25% 50%'}}>
                <div className="spinner-grow" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }

    if (isError) {
        return <span>Error: We could not fetch the entire posts for now. Please try again later </span>
    }

    // We can assume by this point that `isSuccess === true`
    return (
        <>
            <button type="button" className="btn btn-primary">
                Total Posts <span className="badge badge-light">{posts.length}</span>
            </button>
            <div className="row" style={{ marginTop: '1%' }}>
                { posts.map((post: Posts) => (
                    <div className="col-lg-4" style={{ marginBottom: '1%' }} key={post.id}>
                        <div className="card" style={{ width: 'width: 18rem'}} >
                            <img src="" className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.body}</p>
                                <a href={`/posts/${post.id}`} className="btn btn-primary">Review</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )

}