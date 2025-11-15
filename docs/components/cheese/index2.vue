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
    <div style="height: 88%;">
        <bm-cheese cut="5 5">
            <bm-cheese pos="1 1" dev>1 1</bm-cheese>
            <bm-cheese pos="1 3" dev>1 3</bm-cheese>
            <bm-cheese pos="3 2" dev>3 2</bm-cheese>
            <bm-cheese pos="3 3" dev>3 3</bm-cheese>
            <bm-cheese pos="4 4" dev>4 4</bm-cheese>
            <bm-cheese pos="4 5" dev>4 5</bm-cheese>
        </bm-cheese>
    </div>
</template>
<style scoped>
.head {
    contain: paint;
    height: 12%;
}

.title {
    height: 100%;
    background-color: #d5e8d2;
}

.triple-btn {
    height: 100%;
    width: 10%;
    margin-left: 10px;
    display: inline-flex;
}

.triple-btn div {
    height: 17px;
    width: 17px;
    border-radius: 50%;
    margin: auto;
}

.close {
    background-color: #f45236;
}

.minimize {
    background-color: #ffd500;
}

.maximize {
    background-color: #4caf50;
}
</style>