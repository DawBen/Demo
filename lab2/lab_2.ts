type product ={
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}
type products ={
    products:product[];
}
type cart ={
    id: number,
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: 8.71,
    discountedPrice: 55,
    thumbnail: "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg"
}
type carts={
    id:number;
    products:product[];
}