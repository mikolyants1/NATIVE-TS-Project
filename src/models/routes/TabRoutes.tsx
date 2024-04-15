import { INavRoutes, ITabIconProps, ITabRouteName } from "@/libs/types/type";
import Main from "@/ui/views/Home/Main/Main";
import Search from "@/ui/views/Home/Search/Search";
import {Ionicons} from "@expo/vector-icons";

export const TabRoutes:INavRoutes<ITabRouteName>[] = [
    {
      name:"Main",
      component:Main,
      options:{
        headerShown:false,
        tabBarIcon:({color,size}:ITabIconProps):JSX.Element=>(
          <Ionicons name="home" color={color} size={size} />
        )
      }
    },
    {
      name:"Search",
      component:Search,
      options:{
        headerShown:false,
        tabBarIcon:({color,size}:ITabIconProps):JSX.Element=>(
          <Ionicons name="search" color={color} size={size} />
        )
      }
    }
]