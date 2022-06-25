<template>
<div class="arkaplan">
    <div class="bos">
        <div>
        <select class="dropdown1">
            <option value="1">Sırala</option>
            <option value="2">Tarihe Göre</option>
            <option value="3">Fiyata Göre</option>
            <option value="4">Ürün Adına Göre</option>
            <option value="4">Satış Adedine Göre</option>
        </select>
        
            <select class="dropdown2">
            <option value="1">16</option>
            <option value="2">20</option>
            <option value="3">50</option>
            <option value="4">100</option>
        </select>
        
        </div>
         
    </div>
    
</div>    
</template>



<style scoped>



.bos{
    margin-left: 30px;
    background-color: #F9F9F9;
    display: block;
    width: 42%;
    height: 30px;
    display: inline-block;
    padding: 25px 0px 45px 0px;
    border: 1px solid #D3D3D3;
    margin-bottom: 0px;
}

.dropdown1{
    height:40px;
    border: 1px solid #D3D3D3;
    border-radius: 3px;
    margin-left: 555px;
    display: inline-block;
    float: left;
    font-size: 15px;
    padding: 10px;
    
}
.dropdown2{
    display: inline-block;
    
    height:40px;
    border: 1px solid #D3D3D3;
    border-radius: 3px;
  
    margin-left: 10px;
    font-size: 15px;

    
}
</style>