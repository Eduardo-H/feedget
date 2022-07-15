import { Widget } from './components/Widget';

export function App() {
  return (
    <>
      <header className="bg-zinc-800 flex justify-between md:justify-evenly h-[5rem] p-5 gap-2">
        <div className="bg-zinc-700 w-[10rem] rounded"></div>

        <div className="hidden md:flex items-center gap-4">
          <div className="bg-zinc-700 w-[5rem] h-5 rounded"></div>
          <div className="bg-zinc-700 w-[5rem] h-5 rounded"></div>
          <div className="bg-zinc-700 w-[5rem] h-5 rounded"></div>
          <div className="bg-zinc-700 w-[5rem] h-5 rounded"></div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-zinc-700 w-8 h-8 rounded"></div>
          <div className="bg-zinc-700 w-8 h-8 rounded"></div>
          <div className="bg-zinc-700 w-8 h-8 rounded-full"></div>
        </div>
      </header>

      <main className="max-w-[1110px] mx-auto py-10 px-5">
        <div className="bg-zinc-800 p-10 rounded mb-10">
          <p className="text-zinc-400">Try sending a feedback.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-zinc-800 h-[250px] sm:h-[300px] rounded"></div>
          <div className="bg-zinc-800 h-[250px] sm:h-[300px] rounded"></div>
          <div className="bg-zinc-800 h-[250px] sm:h-[300px] rounded"></div>
          <div className="bg-zinc-800 h-[250px] sm:h-[300px] rounded"></div>
          <div className="bg-zinc-800 h-[250px] sm:h-[300px] rounded"></div>
        </div>
      </main>
      
      <Widget />
    </>
  )
}
