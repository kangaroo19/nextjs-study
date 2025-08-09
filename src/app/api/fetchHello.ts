export async function fetchHello() {
  console.log("서버 Fetching hello message...", Math.random());
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (!res.ok) throw new Error("Network response was not ok");
  const data = await res.json();
  // 예시로 title만 반환
  return data.title as string;
}
