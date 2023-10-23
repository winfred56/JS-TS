export default function Products(){
    const products = ["Laptop", "Mouse", "Keyboard", "USB cable", "Speaker", "Tablet", "Television", "Phone", "Macbook"]
   // const productsList = products.map((product) =>(<li>{product}</li>))
    return(
        <div>
            <ol>
                {products.map((product) =>(
                    <li>{product}</li>
                ))}
            </ol>
        </div>
    )
}