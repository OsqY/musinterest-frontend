import AlbumCard from "./AlbumCard"

const AlbumResults = ({ albums }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-8">
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
