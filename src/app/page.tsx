import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import LayerStack from "@/components/LayerStack";
import WhyLyzr from "@/components/WhyLyzr";
import Products from "@/components/Products";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Metrics />
        <LayerStack />
        <WhyLyzr />
        <Products />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
