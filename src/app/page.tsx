import Image from "next/image";
import {Banner} from "@/components/banner"
export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <Banner/>
    </main>
  );
}
