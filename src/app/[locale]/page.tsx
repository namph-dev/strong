import MainSlider from "@/components/Mainslider";
import TabHomePage from "@/components/TabMain";

export default async function Home() {


  return (
    <div className="flex flex-col items-center justify-between">
      <MainSlider />
      <TabHomePage />
    </div>
  );
}
