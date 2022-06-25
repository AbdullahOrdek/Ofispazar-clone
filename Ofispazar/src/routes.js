import Anasayfa from "./pages/Anasayfa.vue"

import login from "./pages/login.vue"
import uyeOl from "./pages/uyeOl.vue"
import sepetim from "./pages/sepetim.vue"
import urun from "./pages/urun.vue"
import sayfa2 from "./pages/sayfa2.vue"
import sayfa3 from "./pages/sayfa3.vue"
import sayfa4 from "./pages/sayfa4.vue"
import sayfa5 from "./pages/sayfa5.vue"
import sayfa6 from "./pages/sayfa6.vue"
import hakkımızda from "./pages/hakkımızda.vue"
import unuttumm from "./pages/unuttumm.vue"

export const routes = [
    { path: '/',component: Anasayfa},
    { path: '/Anasayfa', component: Anasayfa},
    { path: '/sepetim', component: sepetim},
    { path: '/urun/:id', component: urun, name: "urun" },
    { path: '/login', component: login },
    { path: '/uyeOl', component: uyeOl },
    { path: '/sayfa2', component: sayfa2 },
    { path: '/sayfa3', component: sayfa3 },
    { path: '/sayfa4', component: sayfa4 },
    { path: '/sayfa5', component: sayfa5 },
    { path: '/sayfa6', component: sayfa6 },
    { path: '/hakkımızda', component: hakkımızda },
    { path: '/unuttumm', component: unuttumm },
    

   
];

