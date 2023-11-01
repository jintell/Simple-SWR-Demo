import {AlbumPhotos} from "../../components/Album";
import {useParams} from "react-router-dom";

export const Album = () => {
    const { id = '', userId = '' } = useParams();
    return (
        <div className="container">
            <AlbumPhotos albumId={id} userId={userId} />
        </div>
    );
}