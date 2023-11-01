import {useParams} from "react-router-dom";
import {UserAlbum} from "../../components/User";

export const User = () => {
    const { id = ''} = useParams();
    return (
        <div className="fluid-container" >
            <h3 style={{ textAlign: 'center' }}>Profile Page</h3>
            <hr />
            <UserAlbum id={id} />
        </div>
    )
}