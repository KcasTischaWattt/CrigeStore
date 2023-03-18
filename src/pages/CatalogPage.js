import { useCallback, useEffect, useState } from "react";
import TablePageContent from "../components/TablePageContent";
import { loadProductsList } from "../network/products";

function CatalogPage() {
  const [products, setProduct] = useState([]);
  const [offset, setOffset] = useState(null);
  const [rotation] = useState(0);

  useEffect(() => {
    (async () => {
      const { offset: newOffset, records } = await loadProductsList(10, null);
      setOffset(newOffset);
      setProduct(records);
    })();
  }, []);

  const loadMoreProducts = useCallback(async () => {
    const { offset: newOffset, records } = await loadProductsList(10, offset);
    setOffset(newOffset);
    setProduct((products) => [...products, ...records]);
  }, [offset]);

  return (
    <div style={{ height: "100vh", overflowY: "scroll" }}>
      <TablePageContent
        products={products}
        loadProducts={loadMoreProducts}
        rotation={rotation}
      />
    </div>
  );
}
export default CatalogPage;