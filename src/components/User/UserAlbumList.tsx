import {GetAlbumByUserIdService} from "../../services";
import { UserAlbum } from "../model/UserAlbum";
import {useNavigate} from "react-router-dom";

export const UserAlbumList = (userId : any) => {
    const { id } = userId;
    const { albums, isLoading, isError } = GetAlbumByUserIdService(id);
    const navigate = useNavigate();

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
        <div className="list-group" style={{ width: '70%' }}>
            <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
                My Album
            </button>
            {albums.map((album : UserAlbum) => (
                <button type="button"
                        className="list-group-item list-group-item-action"
                        key={album.id}
                        onClick={() => navigate(`/users/${id}/albums/${album.id}`)}
                >
                    {album.title}
                </button>
            ))}
        </div>
    );

}