import React from 'react';
import Navbar from '../../components/navbar';
import ProductsTable from '../../components/ProductsTable';

export default function Home() {
  return (
    <main>
      <Navbar />
      <section>
        <ProductsTable />
      </section>
    </main>
  );
}
