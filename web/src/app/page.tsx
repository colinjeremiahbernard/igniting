
//TypeScript + JSX = TSX
//JSX = JavaScript + XML

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/*Left*/}
      <div className="relative flex flex-col items-start justify-between overflow-hidden px-28 py-16">
        <div className="absolute left-0 top-1/2 h-[288px] w-[526px] bg-pink-500 opacity-50 -translate-y-1/2 -translate-x-1/2 rounded-full blur-full"  />
        <div className="absolute right-0 top-0 bottom-0 w-2 bg-stripes"></div>
      </div>
      {/*Right*/}
      <div className="flex flex-col p-16">
        <div className="flex flex-1 items-center justify-center">
            <p className="w-[360px] text-center leading-relaxed">No registered past memory, start{''} <a href="" className="underline hover:text-brown-50">now</a>!
            </p>
        </div>
      </div>
    </main>
    
    
  )
}

