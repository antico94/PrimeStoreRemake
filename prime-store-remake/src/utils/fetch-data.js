import {useContext} from "react";
import {CartContext} from "../context-provider/cart-context-provider";

export async function GetDataFromApi(ContentType, index) {
    let url;
    switch (ContentType) {
        case "Category":
            url = `https://localhost:44398/${index}`;
            break;
        case "Products":
            url = `https://localhost:44398/api/Subcategory/${index}/products`;
            break;
        case "AllProducts":
            url = `https://localhost:44398/api/Product`;
            break;
        case "ProductPage":
            url = `https://localhost:44398/api/Product/${index}`;
            break;
        case "ProductSearch":
            url = `https://localhost:44398/api/Product/Search/${index}`;
            break;
        case "ProductDeals":
            url = `https://localhost:44398/api/Product/OnPromo`;
            break;
        default:
            throw new Error(`Unknown content type: ${ContentType}`);
    }

    try {
        const response = await fetch(url);

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

export async function GetDataFromApiPost(productIds) {
    productIds = productIds.map(product=>product.productId)
    try {
        const response = await fetch('https://localhost:44398/api/Product/GetProductsByIds', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productIds)
        });

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
