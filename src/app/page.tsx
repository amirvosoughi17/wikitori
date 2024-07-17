import Blogs from "@/components/stracture/blogs/Blogs";
import Hero from "@/components/stracture/hero/Hero";
import MainProducts from "@/components/stracture/MainProducts";
import Services from "@/components/stracture/services/Services";
import Totals from "@/components/stracture/totals/Totals";

export default async function Home() {
  return (
    <main className="overflow-hidden">
      <div className="" id="">
        <Hero />
      </div>
      <div className="" id="products">
        <MainProducts />
      </div>
      <div className="" id="totals">
        <Totals />
      </div>
      <div className="" id="services">
        <Services />
      </div>
      <div className="" id="blogs">
        <Blogs />
      </div>
    </main>
  );
}
