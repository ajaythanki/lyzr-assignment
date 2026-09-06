import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/content";

export default function Products() {
  return (
    <section id="products">
      <div className="wrap section">
        <div className="mb-[clamp(44px,5vw,68px)] max-w-[60ch]">
          <span className="eyebrow">Platform</span>
          <h2 className="display-2">
            Five surfaces, one <span className="em">agentic OS.</span>
          </h2>
        </div>
        <div id="platform" className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
