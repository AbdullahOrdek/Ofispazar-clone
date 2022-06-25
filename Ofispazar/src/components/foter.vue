<template>
<div class="renk">
    <div style="padding-left:20%; background-color:white;">
    <div class="arkaplan">
        <div class="bilgi">
            <img src="src/assets/footerbilgi.png" alt="">
        </div>
        <div>
        <p class="border1">Tüm Bilgisayar Ürünleri, Elektronik Ürünler, Fotokopi ve Yazıcı Cihazları, Sarf Malzemeler , Güvenlik Ürünleri, Telefonlar En Uygun Fiyata Ofisjet'de , Uzman Satış ve Satış Sonrası Destek Kadrosuyla Güvenilir Alışveriş..!</p>
        </div>
        
        <div class="div1">
            <span><a href="">2021 'da En Uygun İndirimli Bilişim Ürünleri, Sarf Malzemeler  Ofisjet'de</a></span>
            <span class="footerbanka"><img src="src/assets/footerbanka.png" alt=""></span>
        </div>
        
    <div class="div2">
            <p>Bilişim Sektöründe 25 Yıllık Tecrübe.© Ofisjet.-2019</p>
        <span>
            <h3>MENU</h3>
          <ul class="liste1">
            <li><a href="">İletişim</a></li>
            <li><a href="">Gizlilik ve Kullanım Şartları</a></li>
            <li><a href="">Kargo ve Taşıma Bilgileri</a></li>
            <li><a href="">Mesafeli Satış Sözleşmesi</a></li>
            <li><a href="">Garanti ve İade</a></li>
          </ul>
        </span>
        <span>
            <ul class="liste2">
            <li><a href="">Üye Girişi</a></li>
            <li><a href="">Sipariş Takibi</a></li>
            <li><a href="">Detaylı Arama</a></li>
            <li><a href="">Hakkımızda</a></li></ul>
        </span>
        <span class="span1">
            <h2>Bizi Takip Edin</h2>
            <img class="facebok" src="src/assets/facebook.png" alt="">
        </span>
        <span class="span2">
            <h2>E-Bulten Listemize Katılın</h2>
            <p>Güncel duyuru ve haberler için kayıt olabilirsiniz.</p>
            <input type="text" placeholder="e-posta @ adresiniz">
            <button class="button2">Kaydet</button>
        </span>
    </div>
       








</div>
    </div>
    </div>
</template>

<script>
</script>

<style scoped>

img {
width: 100%;
}
.renk{
    background-color: white;
}
.bilgi{
    border-bottom: 3px solid #e3e3e3;
    border-collapse: collapse;
    border-width: thin;
     margin: 10px 15px 0px 15px;
    padding-bottom: 10px;
    width: 69%;
    background-color: white;
}

.border1{
    border-bottom: 3px solid #e3e3e3;
    border-collapse: collapse;
    border-width: thin;
    margin: 10px 15px 0px 15px;
    padding-bottom: 10px;
    width: 69%;
    font-size: 12px;
}

.fontsize1{
    font-size: 10px;
}

span img {
    width: 65%;
    height: 100%;
}

.liste1{
    list-style-type: none;
    font-size: 13px;
    width: 80%;
    
}

.liste2{
    list-style-type: none;
    font-size: 13px;
    width: 80%;
    margin-top: 60px;
    
    
}
ul li{
    margin-top: 10px;
    
}
span h3{
    text-align: center;
    margin-right: 50px;
}
a{
    text-decoration:none;
    color: black;
}

.div1{
   word-break: break-word;
   display: inline-block;
   width: 100%;
  

}
.div2{
    display: inline-flex;
  
   text-align: left;
    
}

.facebok{
    height: 30%;
}
.span1{
    margin-left: 35px;
}

.button2 {
background-color: #EFEFEF;
color: black;
border: none;
cursor: pointer;
height: 25px;
border-radius: 5px;

}

.arkaplan {
    
    width: 100%;
    background-color:white;
}
.span2 {
    display: block;
    margin-left: 50px;
}
span input{
    display: block;
}
.footerbanka img{
    width: 40%;
}

</style>
