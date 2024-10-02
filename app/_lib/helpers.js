export default async function getLatLng(address, city) {
  const query = `${address}, ${city}`;
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.length > 0) {
      const lat = data[0].lat;
      const lng = data[0].lon;
      return { lat, lng };
    } else {
      console.log('No results found');
      return null;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
