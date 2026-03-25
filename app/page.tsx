import FavoritesDrawer from "@/components/FavoritesDrawer";
import TopHeaderComponent from "@/components/TopHeaderComponent";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[url('/assets/Pokeball-bg.png')] bg-cover bg-center h-screen font-sans ">
      <TopHeaderComponent></TopHeaderComponent>
      
    </div>
  );
}
