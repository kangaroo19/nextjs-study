"use client";
import { useQueryClient } from "@tanstack/react-query";
import { fetchHello } from "../api/fetchHello";

export default function ShowDetailsButton() {
  const queryClient = useQueryClient();

  const prefetch = () => {
    queryClient.prefetchQuery({
      queryKey: ["details"],
      queryFn: fetchHello,
      staleTime: 1000,
    });
  };

  const handleClick = async () => {
    // 클릭 후 바로 데이터가 필요하면 ensureQueryData 권장
    const data = await queryClient.ensureQueryData({
      queryKey: ["details"],
      queryFn: fetchHello,
      staleTime: 60_000,
    });
    console.log("details:", data);
  };

  return (
    <button
      onMouseEnter={prefetch}
      onFocus={prefetch}
      onClick={handleClick}
      className="bg-blue-500 text-white p-2 rounded"
    >
      Show Details
    </button>
  );
}
