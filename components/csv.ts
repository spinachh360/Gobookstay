
export async function fetchCsv(url: string): Promise<Record<string,string>[]> {
  const res = await fetch(url, { next: { revalidate: 60 } });
  const text = await res.text();
  const [header, ...rows] = text.trim().split(/\r?\n/).map(l=>l.split(","));
  return rows.map(r => Object.fromEntries(r.map((v,i)=>[header[i], v])));
}
