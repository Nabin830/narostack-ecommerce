export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold">About Narostack Digital LLC</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <section className="rounded-2xl border bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-bold">Who we are</h2>
          <p className="mt-4 leading-8 text-slate-600">Narostack Digital LLC provides digital IT services and software products for small businesses. We help customers with website resources, automation guides, cloud setup, cybersecurity basics, branding templates, and remote IT support packages.</p>
        </section>
        <section className="rounded-2xl border bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-bold">Company details</h2>
          <div className="mt-4 grid gap-2 text-slate-600">
            <p><strong>Company:</strong> Narostack Digital LLC</p>
            <p><strong>Email:</strong> pandeynabin@narostack.com</p>
            <p><strong>Address:</strong> 30 N Gould St, Sheridan, WY 82801, USA</p>
            <p><strong>Delivery:</strong> Online digital delivery by email/download</p>
          </div>
        </section>
      </div>
    </main>
  );
}
