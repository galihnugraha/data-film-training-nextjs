import ICONS from "@assets/icons";
import { MenuData } from "@interfaces/menuInterfaces";

export const dataMenu: MenuData[] = [
  { name: "Home", path: "/", icon: ICONS.IconHome},
  { name: "Popular", path: "/popular", icon: ICONS.IconPopular},
  { name: "Now Playing", path: "/now-playing", icon: ICONS.IconNowPlaying},
  { name: "Top Rated", path: "/top-rated", icon: ICONS.IconTopRated},
  { name: "Upcoming", path: "/upcoming", icon: ICONS.IconUpcoming}
];