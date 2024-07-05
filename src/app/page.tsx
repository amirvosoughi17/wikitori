import Blogs from "@/components/stracture/blogs/Blogs";
import Hero from "@/components/stracture/hero/Hero";
import MainProducts from "@/components/stracture/MainProducts";
import Services from "@/components/stracture/services/Services";
import Totals from "@/components/stracture/totals/Totals";


export default async function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <MainProducts />
      <Totals />
      <Services />
      <Blogs />
    </main>
  );
}