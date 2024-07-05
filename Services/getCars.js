export async function getCars({ make }) {
  const response = await fetch(`https://api.api-ninjas.com/v1/cars?limit=12&make=${make}`, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY,
    },
  });
  const data = await response.json();
  return data;
}