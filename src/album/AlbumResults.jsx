import AlbumCard from "./AlbumCard"

const AlbumResults = ({ albums }) => {
  return (
    <div className="mt-8 flex items-center justify-center">
      {!albums.length ? (
        <h2> No albums, sorry... </h2>
      ) : (
        albums.map(album => {
          return (
            <AlbumCard
              title={album.title}
              artist={album.artist}
              releaseDate={album.releaseDate}
              ratings={album.ratings}
              key={album.id}
            />
          )
        })
      )}
    </div >
  )
}

export default AlbumResults
