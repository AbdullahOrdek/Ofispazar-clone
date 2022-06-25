  <template>
  <div id="app">
    <div class="container">
      <img src="src/assets/logo.svg" />
      <input
        type="text"
        placeholder="Ürün, kategori veya marka ara"
        name="searchBar"
        id="aramaKutusu"
      />
      <a type="button" class="araBtn"
        ><FontAwesomeIcon icon="search"></FontAwesomeIcon
      ></a>
      <ul class="navBar">
        <router-link to="/uyeOl" tag="li" v-if="!currentUser"
          ><img
            src="src/assets/profil.png"
            alt="yok"
            style="width: 30px; margin-top: -10px; margin-left: 5px"
          /><a> Üye Ol </a>
        </router-link>
        <router-link to="/login" tag="li" v-if="!currentUser"
          ><img
            src="src/assets/profil.png"
            alt="yok"
            style="width: 30px; margin-top: -10px; margin-left: 5px"
          /><a> Üye Girişi </a>
        </router-link>
        <router-link
          v-if="currentUser"
          tag="li"
          to="#"
          @click.native.prevent="showInfo()"
          ><img
            src="src/assets/profil.png"
            alt="yok"
            style="width: 30px; margin-top: -10px; margin-left: 5px"
          /><a>Hesabım</a></router-link
        >
        <router-link to="/sepetim" tag="li"
          ><!-- <img
            src="src/assets/sepetikon.png"
            alt="yok"
            style="width: 30px; margin-top: -10px; margin-left: 5px"
          /> --><FontAwesomeIcon icon="shopping-cart">&#xf07a;</FontAwesomeIcon>
          <span class="badge badge-warning" id="lblCartCount">{{
            getCartCount
          }}</span
          ><a> Sepetim </a>
        </router-link>
        <!--<li><a href="http://vuex.vuejs.org/" target="_blank"><img src="src/assets/profil2.png" alt="yok" style="width:25px;margin-top:-5px;margin-left:5px">Üye Girişi</a></li>-->
        <!-- <li><a href="http://vue-loader.vuejs.org/" target="_blank"><img src="src/assets/sepetikon.png" alt="yok" style="width:30px;margin-top:-10px;margin-left:5px">Sepetim</a></li> -->
        <li>
          <a href="https://github.com/vuejs/awesome-vue" target="_blank"
            ><img
              src="src/assets/kagitucak.png"
              alt="yok"
              style="width: 30px; margin-top: -10px; margin-left: 5px"
            />Sipariş Takibi</a
          >
        </li>
        <router-link
          tag="li"
          to="#"
          class="sign-out"
          @click.native.prevent="logout()"
          v-if="currentUser"
          ><FontAwesomeIcon icon="sign-out-alt" /><a> Çıkış Yap</a></router-link
        >
      </ul>

      <ul class="Menu">
        <router-link to="/Anasayfa" tag="button"
          ><FontAwesomeIcon icon="ellipsis-v"></FontAwesomeIcon
          ><FontAwesomeIcon icon="ellipsis-v"></FontAwesomeIcon
          ><FontAwesomeIcon icon="ellipsis-v"> </FontAwesomeIcon>Tüm Lensler
        </router-link>
        <router-link to="/saydamLens" tag="li">
          <a> Saydam Lens </a>
        </router-link>
        <router-link to="/gunlukLens" tag="li">
          <a> Günlük Lens </a>
        </router-link>
        <router-link to="/renkliLens" tag="li">
          <a> Renkli Lens </a>
        </router-link>
        <router-link to="/toricLens" tag="li">
          <a> Toric Lens </a>
        </router-link>
        <router-link to="/indirimliLens" tag="li">
          <a> İndirimli Lens </a>
        </router-link>
        <router-link to="/solusyon" tag="li">
          <a> Solüsyonlar </a>
        </router-link>
        <router-link to="/gozBakim" tag="li"> <a> Göz Bakım </a> </router-link>
        <router-link to="/kampanyalar" tag="li">
          <a> Kampanyalar </a>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { mapActions, mapGetters } from "vuex";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
library.add(fas);
export default {
  name: "app",
  data() {
    return {
      msg: "Merhabalar Bu benim ilk başarılı uygulamam olabilir.",
      currentUser: null,
      //cartCount: 0,
    };
  },
  components: {
    FontAwesomeIcon,
  },
  methods: {
    ...mapActions(["logout", "fetchCart"]),

    showInfo() {
      alert(
        "Kullanıcı Bilgileriniz: \nMailiniz: " + this.currentUser.email,
        "\nID'niz: " + this.currentUser.uid
      );
    },
  },
  computed: {
   ...mapGetters([
      'getCartCount',
   ]),
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.currentUser = auth.currentUser;
      }
    });
  },
};
</script>

  <style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
  border: 3px solid #2c3e50;
  background: red;
}

.navBar {
  display: inline-block;
  list-style-type: none;
  padding: 0;
  margin-left: 15px;
}

.navBar li {
  display: inline-block;
  margin: 0 5px;
}

.navBar li a {
  text-decoration: none;
  color: black;
}
.navBar li a:hover {
  color: orangered;
}
.container {
  /*width:90%;
    margin: 0 auto;*/
  text-align: center;
}
.container img {
  float: left;
  margin-left: 85px;
}
#aramaKutusu {
  display: inline-block;
  line-height: 30px;
  width: 30%;
  border: 1px solid orangered;
  border-radius: 3px;
  padding-left: 10px;
}
#aramaKutusu {
  display: inline-block;
  line-height: 30px;
  width: 30%;
  border: 1px solid orangered;

  border-radius: 3px;
}
.araBtn {
  height: 33px;
  /* border: 1px solid orangered;
    border-radius: 3px;
    border-bottom-left-radius: 0  ;
    border-top-left-radius: 0;
    background: white;*/
  margin-left: -30px;
}
.araBtn:hover {
  cursor: pointer;
}
.Menu {
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  padding: 15px 0;
  box-shadow: 0px 10px 18px 10px #e3e3e3;
}
.Menu button {
  display: inline-block;
  padding: 12px 16px;
  margin: -16px 0;
  border: none;
  background: white;
  font-weight: bold;
  color: #2c3e50;
  font-size: 17px;
}
.Menu button:hover {
  background: #f60;
  color: #fff;
  border: 1px solid #f60;
  cursor: pointer;
}
.Menu li {
  border-left: 1px solid gray;
  padding-left: 15px;
  display: inline-block;
  margin: 0 5px;
}
.Menu li a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
}
.Menu li a:hover {
  color: orangered;
}
.badge {
  padding-left: 9px;
  padding-right: 9px;
  -webkit-border-radius: 9px;
  -moz-border-radius: 9px;
  border-radius: 9px;
}

.label-warning[href],
.badge-warning[href] {
  background-color: #c67605;
}
#lblCartCount {
  font-size: 12px;
  background: #ff0000;
  color: #fff;
  padding: 0 3px;
  vertical-align: top;
  margin-left: -10px;
}
</style>
