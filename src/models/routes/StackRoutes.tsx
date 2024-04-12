import { INavRoutes, IStackRouteName } from "../../libs/types/type";
import Forecast from "../../ui/views/Forecast/Forecast";
import { LinkBack } from "../../ui/views/Forecast/link/BackLink";
import Home from "@/ui/views/Home/Home";
import Personal from "../../ui/views/Personal/Personal";
import { View } from "react-native";

export const StackRoutes:INavRoutes<IStackRouteName>[] = [
    {
      name:"Home",
      component:Home,
      options:{
        presentation:"card",
      }
    },
    {
      name:"Forecast",
      component:Forecast,
      options:{
        presentation:"modal",
        headerLeft:LinkBack,
      }
    },
    {
      name:"Personal",
      component:Personal,
      options:{
        presentation:"fullScreenModal",
        headerLeft:LinkBack,
      }
    }
]