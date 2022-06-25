<template>
  <div class="rennk">
    
    <arama></arama>
    <navbar></navbar>
    <sidebar></sidebar>
    <p id="basliiik">Gizlilik ve Kullanım Şartları</p>
    <p id="yazi">Gizlilik Politikası                


1- Ofisjet Bilişim  olarak siz değerli müşterilerimize daha iyi hizmet verebilmek amacıyla bazı kişisel bilgilerinizi (isim, yaş, adres, ilgi alanlarınız, e-posta vb.) sizlerden talep etmekteyiz. Sadece Ofisjet Bilişim’a ait sunucularda toplanan bu bilgiler, dönemsel kampanya çalışmaları, müşteri profillerine yönelik özel promosyon faaliyetlerinin kurgulanması ve istenmeyen e-postaların iletilmemesine yönelik müşteri "sınıflandırma” çalışmalarında ve en önemlisi siz değerli müşterilerimize daha iyi hizmet vermek maksadı ile sadece Ofisjet Bilişim bünyesinde kullanılmaktadır.

2- Ofisjet Bilişim olarak alışverişleriniz esnasında ve üyelik formlarından topladığımız bilgileri, siz değerli müşterimizin/üyemizin haberi ya da aksi bir talimatı olmaksızın, üçüncü şahıslarla kesinlikle paylaşmamakta, faaliyet dışı hiçbir nedenle ticari amaçla kullanmamakta ve de satmamaktayız.

3- Müşteri bilgileri, ancak resmi makamlarca bu bilgilerin talep edilmesi halinde ve yürürlükteki emredici mevzuat hükümleri gereğince resmi makamlara açıklama yapmak zorunda olduğu durumlarda resmi makamlara açıklanabilecektir. Siz değerli Müşterimizin sisteme girdiği tüm bilgilere sadece sizin tarafınızdan    ulaşabilmekte ve bu bilgileri sadece siz değerli Müşterimiz değiştirebilmektesiniz. Bir başkasının bu bilgilere ulaşması ve bunları değiştirmesi mümkün değildir. Herhangi bir    zamanda günlük e-mail gönderim listemizden çıkmak isterseniz, gönderdiğimiz e-maillerin alt kısmında ve sağ üst köşesinde bulunan  üyelikten ayrıl butonuna tıklayarak   kolayca çıkabilirsiniz.

4- Ofisjet Bilişim olarak, e-posta adresleri ve üyelik formlarında istediğimiz kişisel bilgilerin haricinde site kullanımı sırasında ziyaretçi olarak izlediğiniz hareket ve      tercihlerinizi size daha iyi bir hizmet vermek maksadı ile analiz ederek   yorumlamaktayız. Kişisel bilgiler içermeyen bu istatistiksel veriler siz değerli Ofisjet Bilişim müşterilerine daha özel ve etkin bir alışveriş deneyimi yaşatmak amacıyla Ofisjet Bilişim iş ortakları ile paylaşılabilmektedir.

5- Ofisjet Bilişim Ödeme sayfasında istenen kredi kartı bilgileriniz, siteden alışveriş yapan siz değerli müşterilerimizin güvenliğini en üst seviyede tutmak amacıyla hiçbir şekilde biz Ofisjet Bilişim ve bize hizmet veren şirketlerin sunucularında, iş ortaklıklarımızda veya herhangi bir veri havuzunda tutulmamaktadır. Bu şekilde ödemeye         yönelik tüm işlemlerin www.ofispazar.com ara yüzü üzerinden banka ve bilgisayarınız arasında gerçekleşmektedir.  

6- Ayrıca www.ofispazar.com sepet, ödeme ve üyelik sayfalarında ‘’Secure Sockets Layer’’ (SSL) teknolojisi kullanılmaktadır.128 bit SSL sertifikamız sayesinde kişisel bilgileriniz şifrelendiğinden 3.şahısların ellerine geçmesi tamamı ile engellenmiştir.

Gizlilik politikamız ve kişisel verilerin korunması ile ilgili sorunuz için info@ofispazar.com veya 0212 216 64 65  numaralı müşteri danışma hattımızdan bize ulaşabilirsiniz.

Ofisjet Bilişim San. ve Tic. Ltd. Şti.</p>
    
    
    
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
