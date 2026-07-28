
export async function fetchCsv(url: string): Promise<Record<string,string>[]> {
  try {
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) {
      console.error(`Failed to fetch CSV: ${res.status} ${res.statusText}`);
      return [];
    }
    const text = await res.text();
    const [header, ...rows] = text.trim().split(/\r?\n/).map(l=>l.split(","));
    if (!header) return [];
    return rows.map(r => Object.fromEntries(r.map((v,i)=>[header[i], v])));
  } catch (error) {
    console.error("Error fetching or parsing CSV:", error);
    return [];
  }
}
