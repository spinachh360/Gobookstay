
"use client";

export default function Page(){
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (<main className="container py-16">
    <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact & Support</h1>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card">
        <div className="font-semibold mb-4">Send a message</div>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium text-black/80">Name</label>
            <input id="name" required placeholder="Your name" className="rounded-2xl border px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)]"/>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium text-black/80">Email</label>
            <input id="email" required type="email" placeholder="Email" className="rounded-2xl border px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)]"/>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-sm font-medium text-black/80">Message</label>
            <textarea id="message" required placeholder="How can we help?" className="rounded-2xl border px-3 py-2 h-28 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)]"></textarea>
          </div>
          <button type="submit" className="btn btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--brand)]">Submit</button>
        </form>
      </div>
      <div className="card">
        <div className="font-semibold mb-2">Reach us directly</div>
        <div className="grid gap-3 text-black/80">
          <div>Phone: +973 33579397</div>
          <div>Email: hello@gobookstay.com</div>
          <div className="text-sm text-black/60">Office hours: Sun–Thu, 9:00–18:00 (AST)</div>
        </div>
      </div>
    </div>
  </main>);
}
