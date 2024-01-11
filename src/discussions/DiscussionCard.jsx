
const DiscussionCard = ({ discussion }) => {
  return (
    <div className="mx-6 flex-row justify-items-center my-6">
      <div className="max-w-sm mx-auto w-full lg:max-w-full lg:flex">
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">{discussion.title}</div>
            <p className="text-gray-700 text-base">{discussion.description}</p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{discussion.UserId}</p>
              <p className="text-gray-600">{discussion.CreatedAt}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscussionCard
