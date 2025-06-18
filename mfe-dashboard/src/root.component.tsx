import { HeroCard } from "./components/hero-card";
import { UserCard } from "./components/user-card";
import { WaterCard } from "./components/water-card";

export default function Root(props) {
  return (
    <div>
      <HeroCard />
      <UserCard />
      <WaterCard />
    </div>
  )
}
