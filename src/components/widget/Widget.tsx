// import { ReactElement } from "react";
import "./widget.scss";
interface NameProps {
  // icon: File;
  icon: string;
  name: string;
}
export const Widget = (props: NameProps) => {

  return (
    <div className="widget">

     <div className="widget-icon">
      <div className="ico"></div>
     </div>
     <div className="title">
     {props.name}
     </div>
         <span className="avatar">
        
         </span>
        
     <div className="count">
      <h2>2,453</h2>
     </div>
   
    </div>
  );
};
