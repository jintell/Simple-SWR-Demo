import {GetAlbumPhotoByUserIdService} from "../../services";
import {useState} from "react";
import {Album} from "../model/Album";
import {Carousel} from "react-bootstrap";


export const AlbumPhotos = (param: any) => {
    const { albumId, userId } = param;
    const { albums, isLoading, isError } = GetAlbumPhotoByUserIdService(albumId);
    const [index, setIndex] = useState(0);

    const changeIndex = (i: number) => {
        setIndex(i);
    }

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
        return <span>Error: We could not fetch the user detail. Please try again later </span>
    }

    return (
        <>
            <h3>My Album</h3>
            <hr />
            <Carousel activeIndex={index} fade={true} onSelect={changeIndex} nextLabel="" prevLabel="">
                {albums.map((album : Album) => (
                    <Carousel.Item key={album.id}>
                        <img src={album.url} className="d-block w-100" alt="..." />
                        <Carousel.Caption>
                            <h3>{album.title}</h3>
                            <p>...</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            <a href={`/users/${userId}`} className="btn btn-dark btn-lg" style={{ marginTop: '1%' }}>Back to user </a>
        </>
    );

}