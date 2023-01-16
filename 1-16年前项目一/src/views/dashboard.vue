<template>
    <div class='home'>
        <div class="box">
            <div class="mg">
                <img src="../assets/Snipaste_2023-01-06_00-11-12.png" alt="">
            </div>
            <div class="one">
                <p class="pa">早安，管理员，祝你开心每一天！</p>
                <p class="pb">管理员 | 传智播客-总裁办</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
</script>

<style lang='scss' scoped>
* {
    margin: 0;
    padding: 0;
    background-color: #eceef1;
}

.home {
    width: 100%;
    height: 100%;
    padding: 10px;
}

.box {
    width: 100%;
    background-color: #ffff;
    display: flex;
    padding: 5px;
    border-radius: 10px;

    .mg {
        background-color: #fff;
    }

    .one {
        background-color: #fff;
        margin-left: 10px;

        p {
            background-color: #fff;
        }

        .pa {
            margin-top: 35px;
            font-size: 28px;
        }

        .pb {
            margin-top: 10px;
            font-size: 23px;
            color: #ccc;
        }
    }
}
</style>
