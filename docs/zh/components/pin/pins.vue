<template>
    <div class="head">
        <div class="title">
            <div class="triple-btn">
                <div class="close"></div>
                <div class="minimize"></div>
                <div class="maximize"></div>
            </div>
        </div>
    </div>
     <div class="bm-pins">
        <bm-pin icon-type="fa-search" type="primary" icon-only top   >搜索</bm-pin>
        <bm-pin icon-type="fa-user"  type="default" icon-only right >用户</bm-pin>
        <bm-pin icon-type="fa-gear"  type="danger" icon-only left >设置</bm-pin>
        <bm-pin icon-type="fa-question"  type="alert" icon-only bottom >帮助</bm-pin>
     </div>
</template>
<style scoped>
    .bm-pins{
       contain: paint;
       height: 87%;
    }
    .head{
     contain: paint;
       height: 12%;
    }
    .title{
        height: 100%;
        background-color: #d5e8d2;
    }
    .triple-btn{
        height: 100%;
        width: 10%;
        margin-left: 10px;
        display: inline-flex;
    }
    .triple-btn div{
        height: 17px;
        width: 17px;
        border-radius: 50%;
        margin: auto;
    }
    .close{
        background-color: #f45236;
    }
    .minimize{
        background-color: #ffd500;
    }
    .maximize{
        background-color: #4caf50;
    }
</style>