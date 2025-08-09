"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchHello } from "../api/fetchHello";

const FetchComponent = () => {
  const { data: ssrData } = useQuery({ queryKey: ["fetchHello"], queryFn: fetchHello });
  const { data: csrData } = useQuery({ queryKey: ["fetchHello_CSR"], queryFn: fetchHello });

  return (
    <div>
      <ul>{ssrData}</ul>
      <ul>{csrData}</ul>
    </div>
  );
};
export default FetchComponent;
