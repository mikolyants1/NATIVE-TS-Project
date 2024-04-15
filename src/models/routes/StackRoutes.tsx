import { INavRoutes, IStackRouteName } from "@/libs/types/type";
import Forecast from "@/ui/views/Forecast/Forecast";
import Home from "@/ui/views/Home/Home";
import Personal from "@/ui/views/Personal/Personal";

export const StackRoutes:INavRoutes<IStackRouteName>[] = [
    {
      name:"Home",
      component:Home,
      options:{
        presentation:"card"
      }
    },
    {
      name:"Forecast",
      component:Forecast,
      options:{
        presentation:"modal"
      }
    },
    {
      name:"Personal",
      component:Personal,
      options:{
        presentation:"modal"
      }
    }
]