<template>
    <div class="container">
   <ul>
    <li id="cat_917" catid="28"><a href="/akuler">Bilgi Sayfaları</a></li>     
    <li id="cat_2009" catid="28"><a href="/dijital-fotograf-makineleri">İletişim</a></li>
    <li id="cat_1668"><router-link tag='a' to="/sayfa3">Gizlilik ve Kullanım Şartları</router-link></li>
    <li id="cat_2033"><router-link tag='a' to="/sayfa4">Kargo ve Taşıma Bilgileri</router-link></li>
    <li id="cat_1966"><router-link tag='a' to="/sayfa5">Mesafeli Satış Sözleşmesi</router-link></li>
    <li id="cat_1644"><router-link tag='a' to="/sayfa6">Garanti ve İade</router-link></li>
    </ul>

       
    


    
    </div>
</template>

<style scoped>
#cat_917{
background-image: linear-gradient(to right, white, #d3d3d3);
padding: 15px;
}
#cat_917 a{
    color: black;
    text-decoration: none;
    font-size: 20px;
}
#cat_2009 a, #cat_1668 a, #cat_2033 a, #cat_1966 a, #cat_1644 a{
    color:black;
    text-decoration: none;
}

ul{
    float: left;
    list-style-type: none;
    width: 15%;
    background-color: white;
    padding-left: 0px;
    margin-left: 20%;
    padding-bottom: 50px;
}


#cat_2009, #cat_1668, #cat_2033, #cat_1966, #cat_1644{
    padding: 8px;
    padding-left: 20px;

    border-bottom: 1px solid #e1e1e1;
}



</style>