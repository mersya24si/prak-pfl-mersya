export default function TailwindCSS() {
  return (
    <div className="min-h-screen bg-slate-50 text-blue-950 font-sans pb-20">
      <FlexboxGrid />
      
      <main className="max-w-5xl mx-auto px-6 mt-12 space-y-12">
        {/* Header Section */}
        <section className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-blue-950 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-white border border-slate-200 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
            <div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter border-l-8 border-amber-400 pl-6">
                Belajar <span className="text-blue-950">Tailwind</span> <span className="text-amber-500 italic">CSS 4</span>
              </h1>
            </div>
            <button className="bg-blue-950 text-amber-400 px-10 py-5 rounded-full font-black uppercase tracking-widest shadow-[0_10px_0_0_#1e1b4b] hover:shadow-none hover:translate-y-2 transition-all duration-200 active:scale-95">
              Click Me
            </button>
          </div>
        </section>

        {/* Bento Grid Layout untuk Komponen Lain */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Spacing />
          <BackgroundColors />
          <div className="md:col-span-2">
             <Typography />
          </div>
          <BorderRadius />
          <ShadowEffects />
        </div>
      </main>
    </div>
  )
}

function Spacing() {
  return (
    <div className="bg-blue-950 shadow-2xl p-10 rounded-[3rem] border-b-8 border-amber-400 group hover:-rotate-1 transition-transform">
      <h2 className="text-white text-3xl font-black tracking-tight mb-4 group-hover:text-amber-400 transition">Card Title</h2>
      <p className="text-amber-400 text-lg leading-relaxed font-medium">
        Ini adalah contoh penggunaan padding dan margin di Tailwind.
      </p>
    </div>
  )
}

function Typography() {
  return (
    <div className="bg-white border-2 border-blue-950 p-12 rounded-[3.5rem] relative overflow-hidden shadow-xl group">
      <div className="absolute top-0 right-0 p-8 text-blue-950/5 font-black text-9xl select-none group-hover:scale-110 transition-transform">Aa</div>
      <h1 className="text-5xl font-black text-blue-950 mb-4 tracking-tighter relative z-10">Tailwind Typography</h1>
      <p className="text-gray-500 text-2xl font-bold mt-2 leading-tight max-w-2xl relative z-10">
        Belajar Tailwind sangat menyenangkan dan cepat!
      </p>
    </div>
  )
}

function BorderRadius() {
  return (
    <div className="flex items-center justify-center gap-4 bg-slate-200/50 p-10 rounded-[3rem] border-2 border-dashed border-slate-300">
      <button className="border-4 border-amber-400 text-amber-400 px-8 py-4 font-black uppercase tracking-tighter rounded-l-[2.5rem] bg-blue-950 hover:bg-amber-400 hover:text-blue-950 transition-all duration-300">
        Klik Saya
      </button>

      <button className="border-4 border-amber-400 text-amber-400 px-8 py-4 font-black uppercase tracking-tighter rounded-r-[2.5rem] bg-blue-950 hover:bg-amber-400 hover:text-blue-950 transition-all duration-300">
        Klik Saya
      </button>  
    </div>            
  )
}

function BackgroundColors() {
  return (
    <div className="bg-amber-400 text-blue-950 p-10 rounded-[3rem] shadow-xl flex flex-col justify-center border-4 border-blue-950 group hover:shadow-[12px_12px_0_0_#1e1b4b] transition-all">
      <h3 className="text-3xl font-black uppercase italic tracking-tighter">Tailwind Colors</h3>
      <p className="mt-4 font-bold text-lg opacity-80">Belajar Tailwind itu seru dan fleksibel!</p>
    </div>
  )
}

function FlexboxGrid() {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center bg-blue-950 p-6 px-10 text-amber-300 sticky top-0 z-50 border-b-4 border-amber-400 shadow-xl gap-4">
      <h1 className="text-3xl font-black tracking-tighter text-white">
        MERSYA<span className="text-amber-500">WEBSITE</span>
      </h1>
      <ul className="flex items-center space-x-8 font-bold uppercase text-xs tracking-widest">
        <li><a href="#" className="hover:text-white border-b-2 border-transparent hover:border-amber-400 pb-1 transition-all">Home</a></li>
        <li><a href="#" className="hover:text-white border-b-2 border-transparent hover:border-amber-400 pb-1 transition-all">About</a></li>
        <li><a href="#" className="hover:text-white border-b-2 border-transparent hover:border-amber-400 pb-1 transition-all">Contact</a></li>
      </ul>
      <h1 className="text-white bg-red-500 px-6 py-2 rounded-full font-black text-xs uppercase cursor-pointer hover:bg-white hover:text-red-500 transition-all border-2 border-transparent hover:border-red-500">
        Logout
      </h1>
    </nav>
  )
}

function ShadowEffects() {
  return (
    <div className="bg-blue-950 shadow-2xl p-10 rounded-[3rem] flex flex-col items-center justify-center text-center cursor-pointer hover:rotate-180 transition-all duration-700 ease-in-out group border-4 border-white/10">
      <h3 className="text-amber-200 text-3xl font-black italic mb-2 group-hover:scale-110">Hover me!</h3>
      <p className="text-amber-200/60 font-medium">Lihat efek bayangan saat hover.</p>
    </div>
  )
}