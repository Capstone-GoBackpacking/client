const Loading = () => {
  return (
      <div className="h-6 flex items-end gap-1 font-bold">
          <div className="relative animate-jumping w-4 h-4 rounded-full bg-blue-300" style={{animationDelay: '0'}}></div>
          <div className="relative animate-jumping w-4 h-4 rounded-full bg-red-300" style={{animationDelay: '200ms'}}></div>
          <div className="relative animate-jumping w-4 h-4 rounded-full bg-fuchsia-300" style={{animationDelay: '400ms'}}></div>
          <div className="relative animate-jumping w-4 h-4 rounded-full bg-yellow-300" style={{animationDelay: '600ms'}}></div>
          <div className="relative animate-jumping w-4 h-4 rounded-full bg-lime-300" style={{animationDelay: '800ms'}}></div>
          <div className="relative animate-jumping w-4 h-4 rounded-full bg-pink-300" style={{animationDelay: '1000ms'}}></div>
          <div className="relative animate-jumping w-4 h-4 rounded-full bg-orange-300" style={{animationDelay: '1200ms'}}></div>
      </div>
  )
}

export default Loading