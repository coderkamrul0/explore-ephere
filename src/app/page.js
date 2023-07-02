
import Image from 'next/image'

import PopularActivities from '@/components/PopularActivities/PopularActivities'
import FeaturedTours from '@/components/FeaturedTours/FeaturedTours'
import Ready from '@/components/Ready/Ready'

export default function Home() {

  return (
    <main>

      {/* popular activities */}
      <PopularActivities></PopularActivities>
      <FeaturedTours></FeaturedTours>
      <Ready></Ready>

    </main>
  )
}
