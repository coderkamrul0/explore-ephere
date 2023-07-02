import Achievements from "@/components/Achivement/page";
import DestinationList from "@/components/DestinationList/page";
import RecentNews from "@/components/RecentNews/page";


export default function Home() {
  return (
    <main>
      <DestinationList></DestinationList>
      <RecentNews></RecentNews>
      <Achievements></Achievements>
    </main>
  )
}
