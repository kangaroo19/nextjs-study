"use client";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import { fetchHello } from "../api/fetchHello";

function SSRData() {
  const { data } = useSuspenseQuery({
    queryKey: ["fetchHello_SSR"],
    queryFn: fetchHello,
  });
  return <ul>{data}</ul>;
}

const FetchComponent = () => {
  const { data: csrData } = useQuery({ queryKey: ["fetchHello_CSR"], queryFn: fetchHello });

  return (
    <div>
      <Suspense fallback={<p>Loading (SSR)…</p>}>
        <SSRData />
      </Suspense>
      <ul>{csrData}</ul>
    </div>
  );
};
export default FetchComponent;
