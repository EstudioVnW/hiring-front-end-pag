export async function fetchCars({ model }) {
  const response = await fetch(`https://api.api-ninjas.com/v1/cars?limit=20&model=${model}`, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY,
    },
  });
  const data = await response.json();
  return data;
}
