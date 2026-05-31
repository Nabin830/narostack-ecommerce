export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="mt-4 text-slate-600">Contact Narostack Digital LLC for product support, business enquiries, and IT service requests.</p>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <section className="rounded-2xl border bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-bold">Send a message</h2>
          <form className="mt-6 grid gap-4">
            <input className="rounded-xl border px-4 py-3" placeholder="Your name" />
            <input className="rounded-xl border px-4 py-3" placeholder="Email address" />
            <input className="rounded-xl border px-4 py-3" placeholder="Subject" />
            <textarea className="min-h-32 rounded-xl border px-4 py-3" placeholder="Message" />
            <button type="button" className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">Submit Demo Form</button>
          </form>
        </section>
        <section className="rounded-2xl border bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-bold">Business information</h2>
          <div className="mt-4 grid gap-2 text-slate-600">
            <p><strong>Email:</strong> pandeynabin@narostack.com</p>
            <p><strong>Address:</strong> 30 N Gould St, Sheridan, WY 82801, USA</p>
            <p><strong>Support:</strong> Monday-Friday, 9:00 AM-5:00 PM</p>
          </div>
          <iframe className="mt-6 h-72 w-full rounded-2xl border" loading="lazy" src="https://www.google.com/maps?q=30%20N%20Gould%20St%2C%20Sheridan%2C%20WY%2082801%2C%20USA&output=embed" />
        </section>
      </div>
    </main>
  );
}
