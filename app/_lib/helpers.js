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

export function formatPrice(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function convertNumber(word) {
  const numberMap = {
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    fiveOrMore: '5+',
  };

  return numberMap[word];
}

export function calculateDaysOrHours(date) {
  const targetDate = new Date(date);
  const today = new Date();

  targetDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const timeDifference = targetDate - today;
  const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (dayDifference >= 1) {
    return `${dayDifference} days`;
  } else {
    const hourDifference = Math.abs(
      Math.ceil(timeDifference / (1000 * 60 * 60)),
    );
    return `${hourDifference} hours`;
  }
}

export function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  }
  return num.toString();
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export function pricePerSqm(price, sqm) {
  return `${formatPrice(price / sqm)}`;
}
export const featuresList = [
  { value: 'gym', label: 'Gym' },
  { value: 'balcony', label: 'Balcony' },
  { value: 'ac', label: 'A/C' },
  { value: 'fireplace', label: 'Fireplace' },
];

export function getLabelByValue(value) {
  const feature = featuresList.find((item) => item.value === value);
  return feature.label;
}
