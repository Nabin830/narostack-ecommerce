export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="animate-pulse space-y-6">
          <div className="h-8 w-52 rounded-full bg-slate-200" />
          <div className="h-12 w-full max-w-2xl rounded-2xl bg-slate-200" />
          <div className="h-6 w-full max-w-xl rounded-2xl bg-slate-200" />

          <div className="grid gap-6 md:grid-cols-3">
            <div className="h-72 rounded-3xl bg-slate-200" />
            <div className="h-72 rounded-3xl bg-slate-200" />
            <div className="h-72 rounded-3xl bg-slate-200" />
          </div>
        </div>
      </div>
    </div>
  );
}