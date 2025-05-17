import React from "react";

const products = [
  {
    id: 1,
    name: "Mantenimiento Básico",
    description: "Revisión general, limpieza y calibración.",
    price: "$500 MXN",
  },
  {
    id: 2,
    name: "Venta Drone DJI Mini",
    description: "Drone compacto con cámara 4K.",
    price: "$12,000 MXN",
  },
];

export default function App() {
  return (
    <main className="p-4 max-w-4xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-400">Dronix</h1>
        <p className="text-slate-300 mt-2">
          Venta y mantenimiento de drones en México
        </p>
      </header>
      <section className="grid gap-4 sm:grid-cols-2">
        {products.map((product) => (
          <div key={product.id} className="bg-slate-800 p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-white">{product.name}</h2>
            <p className="text-slate-300 text-sm">{product.description}</p>
            <p className="text-blue-400 font-bold mt-2">{product.price}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
