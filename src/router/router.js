import { createRouter, createWebHistory } from "vue-router";
import TitlePage from "../components/TitlePage.vue";
import About from "../components/About.vue";
import Portfolio from "../components/Portfolio.vue";
import Detail from "../components/Detail.vue";

// router 옵션 설정
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TitlePage },
    { path: "/about", component: About },
    { path: "/portfolio", component: Portfolio },
    { path: "/detail/:id", component: Detail }, // id라는 동적 라우팅을 사용
  ],
});

export default router;
