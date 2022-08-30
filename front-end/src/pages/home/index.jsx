import React from 'react';
import ProductsTable from '../../components/ProductsTable';

export default function Home() {
  return (
    <main>
      <div><h1>HEADER</h1></div>
      <section>
        <ProductsTable />
      </section>
    </main>
  );
}
