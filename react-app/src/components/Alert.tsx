/*
function Alert() {}

export defulat Alert
*/
// rafec: Short for ReactArrowFunctionExportComponent
/*
const Alert = () => {
  return (
    <div className="alert alert-primary">Alert</div>
  )
}

export default Alert 
*/
// We want to pass the text as a prop. To do that, we need to use an interface.

import { ReactNode } from "react";

/*
interface Props {
    text: string;
}
const Alert = ({ text } : Props) => {
    return (
      <div className="alert alert-primary">{text}</div>
    )
  }
  
  export default Alert 
*/

interface Props {
  children: ReactNode; // children: special prop that all components support
  // ReactNode: special type that supports complex parameter like html block 
}
const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
