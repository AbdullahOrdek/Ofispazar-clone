<template>
    
<div class="container">
    <div class="soldiv">
       <table class="ilktable">
           <tbody>
               <tr>
                  <p id="büyüktür"> > </p> Özellikler
               </tr>
               <tr class="trr">
                  <p id="büyüktür"> > </p>  Ödeme Seçenekleri
               </tr>
               <tr class="trr">
                  <p id="büyüktür"> > </p>  Yorumlar
               </tr>
               <tr class="trr">
                  <p id="büyüktür"> > </p>  SSS
               </tr>
           </tbody>
       </table>
    </div>
    <div>
      <table>
            <tbody>
                <tr>
                    <td>Sol</td>
                    <td><select class="dropdownFiltre">
                                    <option value="1">14:00</option>
                                    <option value="1">14:00</option>
                        </select>
                    </td>
                            x
                </tr>
                <tr>
                    <td>Sağ</td>
                    <td><select class="dropdownFiltre">
                            <option value="1">14:00</option>
                        </select>
                    </td>
                            
                </tr>
            </tbody>
       </table>
    </div>
</div>
</template>
<style scoped>
.container{
    margin: 100px 25px 0 20% ;
    width: 60%;
    background-color: white;;
    border: 1px solid #e6e6e6;
}
.soldiv{
    width: 25%;
    border: 1px solid #e6e6e6;
     display: inline-block; 
    
}
#büyüktür{
    font-size:10px; 
    display: inline-block; 
    margin-right:5px;
}
.ilktable tr{
    border: 1px solid black;
}
.ilktable{
    background-color: #f7f7f7;
    width: 100%;
}
.dropdownFiltre {
    width: 100px;
    padding: 0;
    margin: 0;
    height: 37px;
    /* border: 1px solid orangered;*/
}

</style>