
const DiscussionCard = () => {
  return (
    <div className="mx-6 flex-row justify-items-center mt-6">
      <div className="max-w-sm mx-auto w-full lg:max-w-full lg:flex">
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">Is Kanye the best artist of all times?</div>
            <p className="text-gray-700 text-base">I mean, he made Graduation</p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Oscar Ardón</p>
              <p className="text-gray-600">Feb42069</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscussionCard
