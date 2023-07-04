
import About from '@/components/About/About'
import Banner from '@/components/Banner/Banner'

import Achievements from "@/components/Achivement/page";
import DestinationList from "@/components/DestinationList/page";
import RecentNews from "@/components/RecentNews/page";

import PopularActivities from '@/components/PopularActivities/PopularActivities'
import FeaturedTours from '@/components/FeaturedTours/FeaturedTours'
import Ready from '@/components/Ready/Ready'

export default function Home() {

  return (
    <main>
     
     <Banner/>
     <About/>
      <DestinationList></DestinationList>
      <Achievements></Achievements>
      <RecentNews></RecentNews>

      {/* popular activities */}
      <PopularActivities></PopularActivities>
      <FeaturedTours></FeaturedTours>
      
      <Ready></Ready>


    </main>
  )
}
