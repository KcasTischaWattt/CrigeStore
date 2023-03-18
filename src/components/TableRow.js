function TableRow({product}) {
    console.log(product.Photo[0].url);
    return (
    <tr>
        <td>{product.Name}</td>
        <td>{product.Price}</td>
        <td>{product.Photo && <img src={product.Photo[0].url} alt="Product photo3" />}</td>
    </tr>
    );
}

export default TableRow;