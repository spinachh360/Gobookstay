
import { fetchCsv } from "../../components/csv";
export const revalidate = 60;
export default async function Page(){
  const url = process.env.NEXT_PUBLIC_SHEET_GUIDES_CSV as string | undefined;
  let rows: any[] = [];
  if (url) rows = await fetchCsv(url);
  return (<main className="container py-16">
    <h1 className="text-3xl md:text-4xl font-bold mb-6">Local Guides</h1>
    {!url && <p className="text-sm text-red-600">Set NEXT_PUBLIC_SHEET_GUIDES_CSV in .env to load guides.</p>}
    <div className="grid md:grid-cols-3 gap-6">
      {rows.map((r,i)=>(
        <div key={i} className="card">
          <div className="flex items-center gap-3">
            <img src={r.avatar || `https://i.pravatar.cc/100?img=${i+20}`} alt="Guide" className="w-12 h-12 rounded-full"/>
            <div>
              <div className="font-medium">{r.name}</div>
              <div className="text-sm text-black/60">{r.languages}</div>
            </div>
          </div>
          <p className="mt-3 text-black/70">{r.bio}</p>
          <a href="/contact" className="btn btn-outline mt-4">Request this guide</a>
        </div>
      ))}
    </div>
  </main>);
}
