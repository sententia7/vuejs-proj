import bus from '../utils/bus';

export default {
    // 재사용할 컴포넌트 옵션 & 로직
    mounted() {
        bus.$emit('end:spinner');
    },

    // routes에서 beforeEnter함수로 처리했기때문에 주석처리
    // 컴포넌트 재활용 mixin
    // created() {
    //     bus.$emit('start:spinner');
    //     this.$store.dispatch('FETCH_LIST', this.$route.name)
    //         .then(() => {
    //             console.log('fetched');
    //             bus.$emit('end:spinner');
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }
}