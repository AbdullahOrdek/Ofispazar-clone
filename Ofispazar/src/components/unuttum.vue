<template>
<div class="arkaplan">
        <div class="baslik1">
            <img src="../assets/yıldız.png" alt="">
            <span class="fontsize">Şifremi Unuttum!</span>
            
        </div>
        <div>
        <label class="sf-text-label">Email Adresiniz</label><input placeholder="" class="gf_email" id="gf_email" type="text" name="data_email">
           <br> <input type="button" value="Gönder">
            </div>
        </div>
</template>

<script>
</script>


<style scoped>

.arkaplan {
    margin: 20px 0px 100px 20%;
    width: 60%;
    display:inline-block;
    background-color: white;
    padding-bottom: 50px;
}



.baslik1 {
    background-color: #F0F0F0;
    margin-bottom: 10px;
}
.fontsize{
    font-size: 25px;
}

input{
    padding: 8px;
    margin: 5px;
}
.gf_email{
margin-left: 120px;
}
</style>