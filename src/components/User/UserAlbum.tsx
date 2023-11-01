import {UserById} from "./UserById";
import {UserAlbumList} from "./UserAlbumList";

export const UserAlbum = (userId : any) => {
    const { id } = userId;

    return (
        <div className="row">
            <div className="col-md-6">
                <UserById id={id}/>
            </div>
            <div className="col-md-6">
                <UserAlbumList id={id} />
            </div>
        </div>
    )
}