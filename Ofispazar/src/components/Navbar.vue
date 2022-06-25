<template>
<div class="arkaplan1">

    <div class="dropdown">
  <button class="dropbtn">☰ Tüm Kategoriler ▼ </button>
  <div class="dropdown-content">
    <router-link tag='a' to="/sayfa2">Fotokopi Yazıcı Ürünleri</router-link>
    <router-link tag='a' to="/sayfa2">Tüketici Elektroniği</router-link>
    <router-link tag='a' to="/sayfa2">Bilgisayar Ürünleri</router-link>
    <router-link tag='a' to="/sayfa2">Sarf Malzeme & Yedek Parça</router-link>
    <router-link tag='a' to="/sayfa2">Baskı Çözümleri</router-link>
  </div>
  
</div>
<ul>
  <li><router-link to="/" tag='a'>İletişim</router-link></li>
  <li><router-link tag='a' to="/sayfa3">Gizlilik ve Kullanım Şartları</router-link></li>   
  <li><router-link tag='a' to="/sayfa4">Kargo ve Taşıma Bilgileri</router-link></li>
  <li><router-link tag='a' to="/sayfa5">Mesafeli Satış Sözleşmesi</router-link></li>
  <li><router-link tag='a' to="/sayfa6">Garanti ve İade</router-link></li>

</ul>
</div>

    
</template>

<script>

</script>






<style scoped>

.dropbtn {
  background-color: #06345F;
  color: white;
  padding: 16px;
  font-size: 16px;
  border:none;
  cursor: pointer;
  width: 100%;
  text-align: left;

}

.dropdown {
  position: relative;
  display: inline-block;
  width: 15%;
  margin-left: 20%;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #06345F;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  width: 100%;
  z-index: 17;

}

.dropdown-content a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  z-index: 17;
  
}

.dropdown-content a:hover {background-color: #0B4174}

.dropdown:hover .dropdown-content {
  display: block;
}

.arkaplan1 {
  
    width: 100%;
    display: inline-flex;
    background-color: #084B8A;
    
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #084B8A;
 
}

li {
  float: left;
  border-right: 0.5px solid black;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  
}


li a:hover {
  background-color: #06345F;
}

</style>

