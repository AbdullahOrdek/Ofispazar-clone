<template>
  <div class="rennk">
    
    <arama></arama>
    <navbar></navbar>
    <sidebar></sidebar>
    <p id="basliiik">Kargo ve Taşıma Bilgileri</p>
    <p id="yazi">Kargo ve Taşıma Bilgileri
www.ofispazar.com ‘den verdiğiniz siparişlerinizin teslimatı, belirttiğiniz adresinize kargo firması aracılığı ile yapılmaktadır. Kargo firmasından siparişinizi teslim alırken, lütfen aşağıdaki konulara dikkat ediniz.

 

Kargo paketini nasıl teslim almalıyım?
Kargo firmaları zamana karşı yarıştığı için, teslimat elemanı ürünü teslim edip hemen gitmek ister , ancak hassas olan bir konu vardır . Kargo paketinizi teslim almadan, kargo teslimat formuna imza atılmamalıdır. Kargo tutanağını imzalamadan önce ürününüzün kutusunun taşımadan dolayı hasarlı olup olmadığını lütfen kontrol ediniz. Kutuda herhangi bir nedenle hasar var ise teslimatla ilgili hiç bir belgeyi imzalamadan kargo yetkilisine tutanak tutulması için kutunuzu iade ediniz. Size tarafımızdan yeni ürünleriniz derhal gönderilecektir. Kutusu hasarlı olan ürünlerin teslim alınması durumunda içindeki ürünlerin hasarından veya eksikliğinden www.ofispazar.com  sorumlu değildir.

 

Size Teslim edilen pakette deformasyon var mı?
Kargo firmalarının getirdiği pakette herhangi bir deformasyon, kırıklık, eziklik, kutu açılması veya içindeki ürünün zarar görebileceğini size düşündüren herhangi bir şüpheli durum var ise, kargo formunu imzalamadan, kargo görevlisinin yanında paketi açıp içindeki siparişlerinizin fiziksel durumunu kontrol ediniz. Anormal bir durum görmüyorsanız, teslimat formunu imzalayınız. Kutu içerisindeki ürünlerin herhangi bir şekilde zarar gördüğünü düşünüyorsanız, ürünleri teslim almayıp kargo görevlisinden kargo hasar tutanağı talep ediniz  (Tutanak tutulan ürünleri lütfen teslim almayınız. Ürünlerin firmamıza iade edilmesi gerekmektedir). Tutanak tutulan ürünlerin değişimi yapılarak tarafınıza yeniden kargo ile sevk edilecektir.

 

Arızalı, ezik, kırık veya hasarlı teslimat.
Kargo firmalarının görevi, firmamıza sipariş ettiğiniz ürünü, güvenli bir şekilde taşıyarak, doğru kişiye teslim etmektir. Üründe bir hasar var ise, kargo elemanına tutanak düzenletebilirsiniz. Düzenlenen tutanakla beraber, ürün bize ulaştıktan sonra değişim işleminiz derhal yapılacaktır.</p>
    
    
    
    <foter></foter>
      
  </div>
</template>

<script>


import arama from '../components/arama.vue'
import navbar from '../components/Navbar.vue'
import filtre from '../components/filtre.vue'
import foter from '../components/foter.vue'
import uye from '../components/uyeGirisi.vue'
import sidebar from '../components/bilgisidebar.vue'
import urunler from '../components/urunler.vue'








export default {
  components:{
    uye,
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
