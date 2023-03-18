import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../cssStyles/TableStyle.css";
import cat from "../pictures/cat.png"
import TableRow from "./TableRow";


function TablePageContent({ products, loadProducts }) {
  // Render table rows based on products

  const tableStyle = {
  };
    return (
        <>
        <div className="container">
      <div className="header">
        <img src={cat} alt="Cat" className="cat" />
        <h1>Our products</h1>
      </div>
      {!products[0] ? (<h3 className="nillkiggers">Please wait while loading</h3>) :(
        <>
        <table style={tableStyle}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
            {products.map (product => <TableRow key={product.Name} product= {product} />)}
        </tbody>
      </table>
      <Button onClick={() => loadProducts()}>Show more</Button>
      </>
      )}
      
    </div>
    </>
    )
}

export default TablePageContent;