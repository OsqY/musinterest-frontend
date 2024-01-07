import AlbumCard from "./AlbumCard"
import { useQuery } from "@tanstack/react-query"
import fetchAlbum from "./fetchAlbum"
import { useParams } from "react-router-dom"

const AlbumDetails = () => {

  const { id } = useParams()
  const { data, status } = useQuery({
    queryKey: ["details", id],
    queryFn: fetchAlbum,
  })

  return (
    <div>
      return (
      <AlbumCard
        title={data.title}
        artist={data.artist}
        relaseDate={data.releaseDate}
        ratings={data.ratings}
        key={data.id} />
      )
      ))
    </div>
  )
}

export default AlbumDetails
