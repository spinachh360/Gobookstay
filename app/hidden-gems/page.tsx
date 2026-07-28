
import { fetchCsv } from "../../components/csv";
export const revalidate = 60;

export default async function Page(){
  const url = process.env.NEXT_PUBLIC_SHEET_GEMS_CSV as string | undefined;
  let rows: any[] = [];
  if (url) rows = await fetchCsv(url);
  return (<main className="container py-16">
    <h1 className="text-3xl md:text-4xl font-bold mb-4">Hidden Gems</h1>
    {!url && <p className="text-sm text-red-600">Set NEXT_PUBLIC_SHEET_GEMS_CSV in .env to load content.</p>}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {rows.map((r,i)=>(
        <div key={i} className="relative overflow-hidden rounded-3xl shadow-md">
          <img src={r.image || r.img} alt={r.title} className="w-full h-72 object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent"></div>
          <div className="absolute bottom-3 left-3 text-white">
            <span className="inline-block text-xs font-medium bg-white/90 text-black rounded-2xl px-2 py-1 mb-2">{r.tag || r.category}</span>
            <h3 className="font-semibold drop-shadow">{r.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </main>);
}
