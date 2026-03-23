import FavoritesDrawer from "@/components/FavoritesDrawer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center  bg-[url('/assets/Pokeball-bg.png')] bg-cover h-screen font-sans ">
      <main className="">
        <h1>Hello Pokemon World!!!</h1>
        <FavoritesDrawer key={"left"}></FavoritesDrawer>
      </main>
    </div>
  );
}
