import Image from "next/image";
import { Inter } from "next/font/google";
import Guitar from "../assets/Welcome page.JPG";
import WebsiteLayout from "@/layouts/WebsiteLayout";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <WebsiteLayout>
        <div className="container-image-home">
          <Image src={Guitar} alt="Guitar Image" width={500} height={300} />
        </div>
      </WebsiteLayout>
    </>
  );
}

// MD:CSS EST POUR ECRAN LARGE ET PRIS D'ABORD EN PRIORITE
// CSS DIRECT EST SOIT PRIS EN PRIORITE SI
// IL YA PAS DE MD: SOIT PRIS EN SECOND LORSQUE IL YA UN MD:
