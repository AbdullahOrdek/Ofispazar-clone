<template>
    <div class="container">
        <div class="markaBox">
            <div class="markaİcerik">
                <h6 class="markaBaslik"><b>lensmarket.com</b> 'da yer alan öncü markalar...</h6>
                <p class="markaText">Satışını yaptığımız ürünlerle ilgili yorumları bulabilirsiniz</p>
            </div>
            <div class="markaResimlerBox">
                <div class="resimlerListesi">
                    <div class="resimListeEleman"><a href="https://www.lensmarket.com/johnson"><img src="https://cdn.lensmarket.com/sablon/lensmarket6/images/img-brand-johnson.png" width="142" height="28" class="img-fluid lazy" alt="Johnson" style=""></a></div>
                    <div class="resimListeEleman"><a href="https://www.lensmarket.com/ciba-vision"><img src="https://cdn.lensmarket.com/sablon/lensmarket6/images/img-brand-ciba.png" width="110" height="28" class="img-fluid lazy" alt="Alcon " style=""></a></div>
                    <div class="resimListeEleman"><a href="https://www.lensmarket.com/bausch-lomb"><img src="https://cdn.lensmarket.com/sablon/lensmarket6/images/img-brand-bausch.png" width="159" height="14" class="img-fluid lazy" alt="Bausch+Lomb" style=""></a></div>
                    <div class="resimListeEleman"><a href="https://www.lensmarket.com/cooper-vision"><img src="https://cdn.lensmarket.com/sablon/lensmarket6/images/img-brand-cooper.png" width="135" height="42" class="img-fluid lazy" alt="Cooper Vision" style=""></a></div>
                    <div class="resimListeEleman"><a href="https://www.lensmarket.com/sauflon"><img src="https://cdn.lensmarket.com/sablon/lensmarket6/images/img-brand-sauflon.png" width="110" height="24" class="img-fluid lazy" alt="Sauflon" style=""></a></div>
                    <div class="resimListeEleman"><a href="https://www.lensmarket.com/tech-contactlens"><img src="https://cdn.lensmarket.com/sablon/lensmarket6/images/img-brand-techlens.png" width="51" height="51" class="img-fluid lazy" alt="Tech Lens" style=""></a></div>
                    <div class="resimListeEleman"><a href="https://www.lensmarket.com/zeiss"><img src="https://cdn.lensmarket.com/sablon/lensmarket6/images/img-brand-zeiss.png" width="51" height="51" class="img-fluid lazy" alt="Zeiss" style=""></a></div>
                    <div class="resimListeEleman"><a href="https://www.lensmarket.com/swiss-lens"><img src="https://cdn.lensmarket.com/sablon/lensmarket6/images/img-brand-swiss.png" width="150" height="38" class="img-fluid lazy" alt="Swiss" style=""></a></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{

}
</script>
<style scoped>
    .container {
    margin: 0 auto;
    width: 90%;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
}

.markaBox {
    width: 100%;
}

.markaİcerik {
    float: left;
    width: 30%;
    display: inline-block;
    padding-right: 10px;
    padding-left: 10px;
}

.markaBaslik {
    color: #f60;
    font-weight: 100;
    font-size: 1.5rem;
    margin-top: 0.5 rem;
    line-height: 1.3;
    margin-bottom: 20px;
}

.markaText {
    font-size: 12px;
}

.markaResimlerBox {
    width: 60%;
    display: inline-block;
}

.resimlerListesi {
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid #eee;
    border-left: 1px solid #eee;
    justify-content: flex-start;
    margin-bottom: 0;
}

.resimListeEleman {
    display: flex;
    border: 1px solid #eee;
    flex: 0 0 25%;
    max-width: 25%;
    height: 120px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
}

</style>