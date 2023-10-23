export default function Products() {
    // const products = ["Laptop", "Mouse", "Keyboard", "USB cable", "Speaker", "Tablet", "Television", "Phone", "Macbook"]
    const products = [{id: 1, name: "Laptop", price: 400}, {id: 2, name: "Mouse", price: 20}, {
        id: 3,
        name: "Keyboard",
        price: 60
    }, {id: 4, name: "USB cable", price: 15}, {id: 5, name: "Speaker", price: 300}, {
        id: 6,
        name: "Tablet",
        price: 670
    }, {id: 7, name: "Phone", price: 780}, {id: 8, name: "Macbook", price: 1890}, {
        id: 9,
        name: "Television",
        price: 500
    }]
    const productsList = products.map((product) =>(<li key={product.id}>{product.name}:  ${product.price}</li>))
    return (
        <div>
            <ol>
                {productsList}
            </ol>
        </div>
    )
}