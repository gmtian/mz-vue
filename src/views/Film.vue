<template>
  <div>
    <Banner :banners='bannerList'></Banner>
  </div>
   
</template>

<script>
import Banner from '../components/Banner';
import axios from 'axios';

export default {
  data() {
    return {
      bannerList: []
    }
  },
  components: {
    Banner
  },

  methods: {
    getBannerList() {
      axios.get('https://m.maizuo.com/gateway?type=2&cityId=440300&k=4183831',{
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"15547213092100239007919"}',
          'X-Host': 'mall.cfg.common-banner'
        }
      }).then(res => {
        let data = res.data;
        if(data.status === 0 ){
          this.bannerList = data.data;
        }else{
          alert(data.msg);
        }
      })
    }
  },

  created() {
    this.getBannerList();
  },
}
</script>