<template>
    <div class="">
        公司设置
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ref, reactive, toRefs } from 'vue';

export default {
    name: '',
    components: {

    },
    setup () {
        // 引入路由
        const router = useRouter();
        // 引入仓库
        const store = useStore();
        const data = reactive({
        });

        return {
            ...toRefs(data)
        }
    },
}
</script>

<style lang="scss" scoped>

</style>