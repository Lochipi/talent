import Hero from "./_components/Hero";
import HowWeWork from "./_components/HowWeWork";
import Paths from "./_components/Paths";
import Event from "./_components/Event";
import Partner from "./_components/Partner";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b text-gray-600">
      <Navbar />
      <Hero />
      <HowWeWork />
      <Paths />
      <Event />
      <Partner />
      <Footer />
    </main>
  );
}
