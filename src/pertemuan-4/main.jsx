import { createRoot } from "react-dom/client";
import './tailwind.css';
import FrameworkList from "./frameworkList";
import FrameworkListSearchFilter from "./frameworkListSearchFilter";
import ResponsiveText from "./ResponsiveDesign";

createRoot(document.getElementById("root"))
    .render(
         <div>
           {/* <FrameworkList/> */}
           {/* <FrameworkListSearchFilter/> */}
           <ResponsiveText/>
         </div>,
);
