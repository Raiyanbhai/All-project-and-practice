// Nepali Mobile Number Validator and Operator Detector

export const operatorData = {
  NTC: {
    name: 'Nepal Telecom',
    prefixes: ['984', '985', '986', '974', '975'],
    color: '#DC143C',
    logo: '📱'
  },
  Ncell: {
    name: 'Ncell',
    prefixes: ['980', '981', '982', '960', '961', '962'],
    color: '#6B1E8C',
    logo: '📞'
  },
  SmartCell: {
    name: 'Smart Cell',
    prefixes: ['961', '988'],
    color: '#FF6B00',
    logo: '📲'
  },
  UTL: {
    name: 'United Telecom Limited',
    prefixes: ['972'],
    color: '#0066CC',
    logo: '☎️'
  }
};

export const validateMobileNumber = (number) => {
  // Remove spaces and special characters
  const cleaned = number.replace(/[\s\-()]/g, '');
  
  // Check if it's a valid 10-digit number starting with 97, 98, or 96
  const regex = /^(97|98|96)\d{8}$/;
  
  return regex.test(cleaned);
};

export const detectOperator = (number) => {
  const cleaned = number.replace(/[\s\-()]/g, '');
  const prefix = cleaned.substring(0, 3);
  
  for (const [key, operator] of Object.entries(operatorData)) {
    if (operator.prefixes.includes(prefix)) {
      return {
        operator: key,
        ...operator
      };
    }
  }
  
  return null;
};

export const formatMobileNumber = (number) => {
  const cleaned = number.replace(/[\s\-()]/g, '');
  if (cleaned.length === 10) {
    return `${cleaned.substring(0, 3)}-${cleaned.substring(3, 6)}-${cleaned.substring(6)}`;
  }
  return number;
};
