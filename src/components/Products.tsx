import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/content";

export default function Products() {
  return (
    <section id="platform" className="wrap py-20 md:py-28">
      <div className="marker mb-12">
        <span className="idx">03</span>
        <span>Platform</span>
        <span className="fill" />
      </div>
      <h2 className="h-sec mb-10 max-w-[18ch]">Five surfaces, one agentic OS.</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </section>
  );
}
