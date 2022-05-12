import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  console.log(router);
  const [title, id] = router.query.params || [];
  // incognito(시크릿) 모드로 접속시 에러 발생
  // 이 페이지가 백엔드에서 pre-render되기 때문에 server에서 미리 렌더되고, router.query.params가 서버에서 아직
  // 배열이 아니라서
  return (
    <div>
      <h4>{title}</h4>
    </div>
  );
}
