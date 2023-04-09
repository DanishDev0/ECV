import React, { useEffect } from "react";
import Router, { useRouter } from "next/router";

function index() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, []);
  return (
    <>
      <div>index</div>
    </>
  );
}

export default index;
