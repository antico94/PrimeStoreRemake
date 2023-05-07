export async function getDataFromApi(ContentType, index) {
    if (ContentType === "Category"){
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
    else if (ContentType === 'Products'){
        try {
            const response = await fetch(`https://localhost:44398/api/Subcategory/${index}/products`);

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

    else if (ContentType === 'ProductPage'){
        try {
            const response = await fetch(`https://localhost:44398/api/Product/${index}`);

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

    else if (ContentType === 'ProductSearch'){
        try {
            const response = await fetch(`https://localhost:44398/api/Product/Search/${index}`);

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

}