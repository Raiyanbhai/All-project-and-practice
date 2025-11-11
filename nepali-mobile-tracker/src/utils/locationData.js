// Nepal Location Data based on mobile number patterns

export const nepalProvinces = {
  'Province 1': {
    name: 'Koshi Province',
    coordinates: [26.8467, 87.2718],
    cities: ['Biratnagar', 'Dharan', 'Itahari', 'Damak']
  },
  'Madhesh': {
    name: 'Madhesh Province',
    coordinates: [27.0000, 85.5000],
    cities: ['Janakpur', 'Birgunj', 'Kalaiya', 'Gaur']
  },
  'Bagmati': {
    name: 'Bagmati Province',
    coordinates: [27.7172, 85.3240],
    cities: ['Kathmandu', 'Lalitpur', 'Bhaktapur', 'Hetauda']
  },
  'Gandaki': {
    name: 'Gandaki Province',
    coordinates: [28.2096, 84.0000],
    cities: ['Pokhara', 'Gorkha', 'Baglung', 'Damauli']
  },
  'Lumbini': {
    name: 'Lumbini Province',
    coordinates: [27.4833, 83.2500],
    cities: ['Butwal', 'Bhairahawa', 'Tansen', 'Kapilvastu']
  },
  'Karnali': {
    name: 'Karnali Province',
    coordinates: [29.0000, 82.0000],
    cities: ['Birendranagar', 'Jumla', 'Dailekh', 'Dunai']
  },
  'Sudurpashchim': {
    name: 'Sudurpashchim Province',
    coordinates: [29.2000, 80.5000],
    cities: ['Dhangadhi', 'Mahendranagar', 'Dipayal', 'Dadeldhura']
  }
};

// Simulate location based on number patterns
export const getLocationFromNumber = (number) => {
  const cleaned = number.replace(/[\s\-()]/g, '');
  const lastDigit = parseInt(cleaned.charAt(cleaned.length - 1));
  
  // Distribute across provinces based on last digit
  const provinceKeys = Object.keys(nepalProvinces);
  const provinceIndex = lastDigit % provinceKeys.length;
  const provinceKey = provinceKeys[provinceIndex];
  const province = nepalProvinces[provinceKey];
  
  // Add some randomness to coordinates for realistic effect
  const randomOffset = () => (Math.random() - 0.5) * 0.5;
  
  return {
    province: province.name,
    coordinates: [
      province.coordinates[0] + randomOffset(),
      province.coordinates[1] + randomOffset()
    ],
    city: province.cities[Math.floor(Math.random() * province.cities.length)],
    accuracy: 'Approximate'
  };
};

// Nepal center coordinates for map
export const nepalCenter = [28.3949, 84.1240];
export const nepalBounds = [
  [26.3478, 80.0586], // Southwest
  [30.4469, 88.2015]  // Northeast
];
