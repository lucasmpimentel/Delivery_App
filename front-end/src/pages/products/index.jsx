import React from 'react';
import Navbar from '../../components/navbar';
import ProductsTable from '../../components/ProductsTable';

export default function Products() {
  return (
    <main>
      <Navbar />
      <section>
        <ProductsTable />
      </section>
    </main>
  );
}
