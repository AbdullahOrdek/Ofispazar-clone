<template>
<div class="arkaplan">
    <div class="slider">
        <div class="slider-content">
            <div class="slider-item">
                <img src="src/assets/mainslider1.jpg" alt="">
            </div>
            <div class="slider-item">
                <img src="src/assets/mainslider2.jpg" alt="">
            </div>
            <div class="slider-item">
                <img src="src/assets/mainslider3.jpg" alt="">
            </div>
            <div class="slider-item">
                <img src="src/assets/mainslider4.png" alt="">
            </div>
        </div>
</div>
    
    
    </div>





</template>





<script>
</script>



<style scoped>

.slider{
    width: 1125px;
    height: 400px;
    margin:auto;
    position: relative;
    margin-top: 10px;
    overflow: hidden;
}

.slider-content{
    width: 400%;
    position: absolute;

    animation: slide 20s infinite;
    
}

.slider-content:hover{
    animation-play-state: paused;
    cursor: pointer;
}

.slider-item{
    width: 25%;
    float: left;
    height: 100%;
}
.slider-item img{
    width: 100%;
    height: 100%;
}

@keyframes slide {
    0%{
        transform: translateX(0px);
    }
    12.5%{
        transform: translateX(-1125px);
    }
    25%{
        transform: translateX(-1125px);
    }
    37.5%{
        transform: translateX(-2250px);
    }
    50%{
        transform: translateX(-2250px);
    }
    62.5%{
        transform: translateX(-3375px);
    }
    75%{
        transform: translateX(-3375px);
    }
    87.5%{
        transform: translateX(0px);
    }
    
   
}

.arkaplan {
  
    width: 87.6%;
    display: inline-block;
    background-color: #DDDDDD;
    margin-left: 6%;

    
}

</style>