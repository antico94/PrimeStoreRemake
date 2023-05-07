export async function getDataFromApi(index) {
    try {
        const response = await fetch(`https://localhost:44398/${index}`);

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(`Error retrieving data from API. Status code: ${response.status}`);
        }
    } catch (error) {
        throw new Error(`Error retrieving data from API: ${error.message}`);
    }
}