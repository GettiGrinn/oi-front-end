<template>
  <div>
    <b-tabs content-class="mt-3" class="nav-tabs" fill>
      <b-tab title="Приложение 1" @click="link('/fin/'+id+'/anex1/' + anex1)" v-if="anex1 != ''" active>
        <router-view name="anex1" />
      </b-tab>
      <b-tab title="Приложение 2" @click="link('/fin/'+id+'/anex2/' + anex2)" v-if="anex2 != ''">
        <router-view name="anex2" />
      </b-tab>
      <b-tab
        title="Приложение 2-1"
        @click="link('/fin/'+id+'/report/' + anex2_1)"
        v-if="anex2_1 != ''"
      >
        <router-view name="anex2_1" />
      </b-tab>
      <b-tab title="Существенные факты" v-if="fact != ''">
         <b-nav>
          <b-nav-item v-for="(item, index) in fact" :key="index" :href="'/fin/'+id+'/fact/'+ item">Существенный факт № {{+index +1}}</b-nav-item>
        </b-nav>
        <router-view name="fact" />
        
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Queries from '../services/report.service'; // axios запросы на бэк энд

export default {
  name: 'FinNadzorView',
  created() {
    this.setinfo();
  },
  data() {
    return {
      anex1: '',
      anex2: '',
      anex2_1: '',
      fact: {},
      id: ''
    };
  },
  methods: {
    setinfo() {
      return Queries.getReportById(this.$route.params.id)
        .then(response => {
          this.anex1 = response.data.doc.anex1;
          this.anex2 = response.data.doc.anex2;
          this.anex2_1 = response.data.doc.anex2_1;
          this.fact = response.data.doc.factsObj;
          this.id = response.data.id;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    link(val) {
      this.$router.push(val);
    }
  }
};
</script>
