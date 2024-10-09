export const PROJECTS = [
  {
    id: 1,
    name: "OpenMind",
    url: "https://openmind5-4.netlify.app",
    description: "질문과 답변을 통해 마음을 열고 대화 나누는 소통 플랫폼",
    position: "Front-End Engineer",
    devPeriod: "2024.04.08 ~ 2024.04.25",
    contents: [
      "비교적 러닝커브가 낮은 애니메이션 라이브러리인 Framer Motion을 활용해 질문 리스트의 페이지네이션이나 각 아이템의 사용자 경험을 향상",
    ],
  },
  {
    id: 2,
    name: "길라 | Gila",
    url: "https://gila.vercel.app/",
    description: "국내 현지인과 여행자간의 경험 매칭 서비스",
    position: "Front-End Engineer & Project Manager",
    devPeriod: "2024.07.03 ~ 2024.08.05",
    contents: [
      "개발 초기 기획에서 서비스 목적의 불분명함을 느껴 ppt를 활용해 팀원들에게 피버팅을 제안하고 팀 방향성을 제시",
      "서비스의 핵심 기능인 국내 행정구역 기준 지역 선택 폼을 모바일 화면의 가독성을 위해 Radix UI의 Drawer 인터페이스로 모듈 구현",
    ],
  },
  {
    id: 3,
    name: "떨면뭐하니",
    url: "https://dmmhn-next-js.vercel.app/",
    description: "GPT API를 활용한 AI 모의면접 서비스",
    position: "Front-End Engineer",
    devPeriod: "2024.09.09 ~ 진행중",
    contents: [
      "모의면접 시작 전 기술 스택을 선택할 때 편의성을 위해 직군에 따라 해당하는 스택의 버튼이 하이라이트 되어 색상이 바뀌는 기능 구현",
      "인증 토큰을 미들웨어에서 쿠키로 관리해 SSR을 통해 페이지 이동 및 새로고침 시 빠른 로딩과 깜박임 없이 일관된 화면을 제공",
    ],
  },
];

export const SKILLS = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "HTML",
  "CSS",
];
