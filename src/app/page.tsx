import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { fetchHello } from "./api/fetchHello";
import FetchComponent from "./components/FetchComponent";

const Home = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["fetchHello_SSR"],
    queryFn: fetchHello,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div>SSR Prefetching Data</div>
      <FetchComponent />
    </HydrationBoundary>
  );
};
export default Home;
