export const fetchMockItems = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/mock-items');
    if (!response.ok) {
      throw new Error('Failed to fetch mock items');
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw new Error('Failed to fetch mock items');
  }
};
