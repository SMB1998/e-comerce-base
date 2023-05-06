
import products from '../pages/api/fakeDB';



export const getProductBySlug = async( slug )=> {


    const product = products.filter((product_map) => (product_map.slug === slug));

    if ( !product ) {
        return null;
    }

    return JSON.parse( JSON.stringify( product ) );
}

export const getAllProductSlugs = async() => {



    const slugs = products.map((product_map) => (product_map.slug));

    return slugs;
}

export const getProductsByTerm = async ( term) => {
    
    term = term.toString().toLowerCase();


    const products = products.map((product_map) => (product_map.slug));



    return products;
}


export const getAllProducts = async() => {


    const products = products



    return JSON.parse( JSON.stringify( products ) );
}


