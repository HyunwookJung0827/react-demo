"use client";
// We cannot handle a browser event on server component
import { useRouter } from "next/navigation"; // Don't import from "next/router"
import React from "react";

const NewUserPage = () => {
  const router = useRouter();
  return (
    <button className="btn btn-primary" onClick={() => router.push("/users")}>
      CREATE
    </button>
  );
};

export default NewUserPage;
