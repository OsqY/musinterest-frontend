
const fetchAlbum = async ({ queryKey }) => {
  const { id } = queryKey
  const apiRes = await fetch(`http://localhost:8000/albums/${id}`, {
    mode: 'no-cors'
  })

  if (!apiRes.ok) {
    throw new Error(`fetch not ok`)
  }
  return apiRes.json()
}

export default fetchAlbum
