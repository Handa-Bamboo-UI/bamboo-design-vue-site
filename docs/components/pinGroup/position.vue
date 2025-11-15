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
<<<<<<< HEAD
    <bm-pin-group left bottom direction="vertical" gap="0px"  style="height: 88%;position: relative;">
        <bm-pin description="图钉1" type="primary" iconOnly iconType="fa-home"  ></bm-pin>
        <bm-pin description="图钉2" type="primary" iconOnly iconType="arrow-right"></bm-pin>
=======
    <bm-pin-group left bottom direction="vertical" gap="0px" sleep style="height: 88%;position: relative;">
        <bm-pin description="图钉1" type="primary" iconOnly iconType="fa-home"></bm-pin>
        <bm-pin description="图钉2" type="primary" iconOnly iconType="arrow-right" ></bm-pin>
>>>>>>> 03a5f89c5ade651e22b4f47b75791ccb3f0c582b
        <bm-pin description="图钉3" type="primary" iconOnly iconType="arrow-down" ></bm-pin>
        <bm-pin description="图钉4" type="primary" iconOnly iconType="arrow-left" ></bm-pin>
    </bm-pin-group>
</template>
<style scoped>
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