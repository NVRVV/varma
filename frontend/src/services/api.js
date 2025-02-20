const API_URL = 'http://localhost:5000/api';

export const fetchDetailsData = async () => {
    const response = await fetch(`${API_URL}/details`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};
