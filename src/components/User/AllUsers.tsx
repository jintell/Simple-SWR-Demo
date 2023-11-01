import { GetAllUserService } from "../../services";
import {User} from "../model/User";

export const AllUsers = () => {
    const { users, isLoading, isError } = GetAllUserService();

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
        return <span>Error: We could not fetch the entire users for now. Please try again later </span>
    }

    return (
        <>
            <button type="button" className="btn btn-primary">
                Total Users <span className="badge badge-light">{users.length}</span>
            </button>
            <div className="row" style={{ marginTop: '1%' }}>
                {users.map((user: User) => (
                    <div className="col-lg-4" style={{ marginBottom: '1%' }} key={user.id}>
                        <div className="card" style={{ width: 'width: 18rem'}} >
                            <img src={`https://picsum.photos/id/${user.id}/200`} className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">{user.name} ({user.username})</h5>
                                <p className="card-text">
                                    Works with {user.company.name}<br />
                                    mail me @ {user.email}<br />
                                    Call me on {user.phone}<br />
                                    Zip Code {user.address.zipcode}<br />
                                </p>
                                <a href={`/users/${user.id}`} className="btn btn-primary">Review</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );

}