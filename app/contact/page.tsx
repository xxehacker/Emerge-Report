export default function ContactPage() {
  return (
     <div className="relative p-10  min-h-screen bg-black selection:bg-sky-500/20 overflow-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10 min-h-screen">
        <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_50%)]" />
        <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.04),transparent_70%)]" />
      </div>

      <main className="relative">
        <div className="mx-auto max-w-3xl">
          <div className=" bg-green-500/80 rounded-2xl border border-white/5 p-6">
            <h1 className="text-3xl text-white text-center">Under Development</h1>
          </div>
        </div>
      </main>
    </div>
  );
}
