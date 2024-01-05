import { useEffect, useRef } from "react"

// [2-Understanding the Effect Hook]
function App() {
  const ref = useRef<HTMLInputElement>(null);

  // Side effect
  // meaning this line changes things outside the DOM
  // To make this pure component, we can use the effect hook
  // if (ref.current) ref.current.focus();

  useEffect(()=> {
    if (ref.current) ref.current.focus();
  });
  // The name useEffect is confusing. Think of it as "afterRender"
  // that runs after each render

  // Just like state and ref hook, we can only call the effect hook
  // at the top level of our components.
  // So we cannot call it inside loops or if statements

  useEffect(()=> {
    document.title = 'My App';
  });

  return <div>
    <input ref={ref} type="text" className="form-control" />
  </div>
}

export default App
