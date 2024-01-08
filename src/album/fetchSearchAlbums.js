
const fetchSearchAlbums = async ({ queryKey }) => {
  const { order, sort_by, title } = queryKey[1]

  if (title !== "") {
    const res = await fetch(`http://localhost:8000/albums/album?title=${title}`);
    if (!res.ok) {
      throw new Error(`album search not okay: ${title}, ${sort_by}, ${order}`)
    }
    return res.json()
  } else {
    const res = await fetch(`http://localhost:8000/albums/?`);
    if (!res.ok) {
      throw new Error(`album search not okay: ${title}, ${sort_by}, ${order}`)
    }
    return res.json()
  }
}

export default fetchSearchAlbums
