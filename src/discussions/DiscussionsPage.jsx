import { useState } from "react"
import DiscussionCard from "./DiscussionCard"
import fetchDiscussions from "./fetchDiscussions"
import { useQuery } from "@tanstack/react-query"

const DiscussionsPage = () => {
  const [requestParams, setRequestParams] = useState({
    title: ''
  })

  const { data, _ } = useQuery({
    queryKey: ["search", requestParams],
    queryFn: fetchDiscussions
  })
  const discussions = !data?.discussions ? data ?? [] : data?.discussion ?? []
  console.log(discussions)
  return (
    <div>
      {!discussions.length ? (
        <h1 className="my-4"> No discussions right now...</h1>
      ) : (
        discussions.map(discussion => {
          return (
            <DiscussionCard discussion={discussion} />)
        }))}
    </div>
  )
}

export default DiscussionsPage
