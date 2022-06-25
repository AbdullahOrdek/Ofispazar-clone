<template>
  <div class="rennk">
    
    <arama></arama>
    <navbar></navbar>
    <sidebar></sidebar>
    <p id="basliiik">Hakkımızda</p>
    <p id="yazi">OFİSJET BİLİŞİM LTD. ŞTİ.
2005 yılında Perpa 'da  kurulan OFİSPAZAR 2008 den itibaren Mecidiyeköy de , 2019 İtibarıyla Ofisjet Bilişim Ltd.  Şti.  faaliyet göstermektedir. Fotokopi Makineleri, Printer, Faks, Scanner Cihazları ve Bilgisayar ve diğer Bilişim Ürünleri satış servis, kiralama, sarf malzemeleri satış ve destek hizmetleri vermektedir. 

Kendi Sattığı ürünlerin bir kısmını üreten, bir kısmını ithal eden Ofisjet , bir kısım ürünlerin Distribütörleri ile çözüm ortaklığı yapmaktadır. 25 yıllık sektör bilgisi , geniş vizyonu müşterilerine has sunduğu  ekipmanla verimliliği, hızı artırır, baskı maliyetlerini düşürür.

İnternet Dünyasında sektöründe ilklerden olan Ofisjet zaman içinde e-ticaret satışlarınada başlamış iyi fiyat ,kaliteli ürün , müşteri memnuniyeti üçlü sac ayağını yerine getirmeyi hedeflemektedir. 

Bir çok distribütörü veya dağıtıcısı olduğu onlarca markayı , 5000 civarında kalem ürünü,  Türkiye'nin her noktasına en kısa zamanda müşterilere ulaştırır, genç ve dinamik ekipiyle satış öncesi ve sonrası en güvenilir partneriniz olmaya devam etmektedir.

Ofisjet direk son kullanıcı bazlı parekende  çalıştığı gibi B2B bayi alt yapısıyla Türkiyenin her yerinde bayilerinede toptan satış yapmaktadır.

Responsive tasarımıyla Masa üstü Pclerden alışveriş yapabildiğiniz gibi Mobil Cihaz tipinize göre uyumlu ara yüzüyle kullanıcı dostu olduğunu göstermektedir. 

Bir çok üründe aynı gün kargo seçeneği ile pazarında tartışılmaz lider bilişim firmalarındandır.

Beraber Çalışmak Ümidiyle

    </p>
    
    <foter></foter>
      
  </div>
</template>

<script>



import arama from '../components/arama.vue'
import navbar from '../components/Navbar.vue'
import filtre from '../components/filtre.vue'
import foter from '../components/foter.vue'

import sidebar from '../components/bilgisidebar.vue'
import urunler from '../components/urunler.vue'








export default {
  components:{
    
    filtre,
    foter,
    sidebar,
    arama,
    navbar,
    urunler,
   
   
    
    
  }
}

</script>

<style>
.rennk{
  background-color: #dddddd;
  padding: 0px!important;
}
#basliiik{
background-color: white;
border: 1px solid #D3D3D3;
width: 42%;
display: inline-block;
text-align: center;
font-size: 17px;
margin:17px 0px 16px 30px;
padding: 20px 0px;
}
#yazi{
    text-decoration:none;
    color: black;
    background-color: white;
    border: 1px solid #D3D3D3;
    width: 42%;
    display: inline-block;
    margin:17px 0px 16px 30px;
    font-size: 18px;
}

</style>
