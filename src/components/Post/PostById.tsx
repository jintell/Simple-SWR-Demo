import { GetPostService } from "../../services";

export const PostById = (postId : any) => {
    const { id } = postId;
    const { post, isLoading, isError } = GetPostService(id);

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
        return <span>Error: We could not fetch the posts for now. </span>
    }

    return (
        <>
            <div className="row">
                <div className="col-lg-4" style={{ marginBottom: '1%' }} >
                    <div className="card" style={{ width: 'width: 18rem'}} >
                        <img src="" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.body}</p>
                            <a href="/" className="btn btn-primary" style={{ marginRight: '3%' }}> Go Back </a>
                            <a href={`/users/${post.userId}`} className="btn btn-primary"> View User </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}