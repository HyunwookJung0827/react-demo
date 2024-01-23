"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void; // Next.js will automatically pass the reset function to our component
}
const ErrorPage = ({ error, reset }: Props) => {
  console.log("Error", error);
  return (
    <>
      <div>An unexpected error has occurred.</div>
      <button className="btn" onClick={() => reset()}>
        RETRY
      </button>
    </>
  );
};

export default ErrorPage;
