import React, { useState } from 'react'
interface Props {
    children: string;
    maxChars?: number;
}
const ExpandableText = ({children, maxChars = 100 }: Props) => {
    const [isExpanded, setExpanded] = useState(false);
    if (children.length <= maxChars) return <p>{children}</p>
    const text = isExpanded? children : children.substring(0, maxChars);
    // text doesn't have to use state because it's computable by the state isExpanded
    // The DOM will re-render text everytime isExpanded changes

  return (
    <p>{text}...<button onClick={() => setExpanded(!isExpanded)}>{isExpanded ? 'Less' : 'More'}</button></p>
  )
}

export default ExpandableText