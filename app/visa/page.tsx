
"use client";
import { useState } from "react";

type Result = { eligible: boolean; docs: string[]; time: string; note?: string };

const sampleRules: Record<string, Record<string, Result>> = {
  "Bahrain": {
    "Japan": { eligible: true, docs: ["Passport (6+ months)", "Photo 3.5x4.5", "Bank statements (3m)"], time: "5–7 business days" },
    "Schengen": { eligible: true, docs: ["Application form", "Travel insurance", "Proof of accommodation"], time: "15 days" }
  }
};

export default function Visa(){
  const [nationality, setNationality] = useState("");
  const [destination, setDestination] = useState("");
  const [purpose, setPurpose] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  async function onCheck(){
    // Placeholder for API call: send {nationality, destination, purpose} to your backend
    const res = sampleRules[nationality]?.[destination] || { eligible: true, docs: ["Passport", "Photo", "Travel plan"], time: "Varies", note: "Connect real API later." };
    setResult(res);
  }

  return (<main className="container py-16">
    <h1 className="text-3xl md:text-4xl font-bold mb-6">Visa Check</h1>
    <div className="grid md:grid-cols-4 gap-3 items-end">
      <div className="grid gap-1">
        <label htmlFor="nationality" className="text-sm font-medium">Nationality</label>
        <input id="nationality" placeholder="Nationality" value={nationality} onChange={e=>setNationality(e.target.value)} className="rounded-2xl border px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"/>
      </div>
      <div className="grid gap-1">
        <label htmlFor="destination" className="text-sm font-medium">Destination</label>
        <input id="destination" placeholder="Destination country" value={destination} onChange={e=>setDestination(e.target.value)} className="rounded-2xl border px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"/>
      </div>
      <div className="grid gap-1">
        <label htmlFor="purpose" className="text-sm font-medium">Purpose</label>
        <input id="purpose" placeholder="Purpose (tourism, work)" value={purpose} onChange={e=>setPurpose(e.target.value)} className="rounded-2xl border px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"/>
      </div>
      <button onClick={onCheck} className="btn btn-primary h-[42px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">Check requirements</button>
    </div>
    {result && (
      <div className="card mt-6">
        <div className="font-semibold mb-2">{result.eligible ? "Likely eligible" : "Not eligible"}</div>
        <div className="text-black/70">Processing time: {result.time}</div>
        <ul className="list-disc pl-6 mt-2 text-black/70">
          {result.docs.map(d=> <li key={d}>{d}</li>)}
        </ul>
        {result.note && <p className="text-xs text-black/50 mt-2">{result.note}</p>}
      </div>
    )}
    <p className="text-xs text-black/50 mt-4">Disclaimer: This is guidance only. Requirements change. We’ll verify before submission.</p>
  </main>);
}
