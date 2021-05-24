<!--<template>
  <div class="createNewActivity">
    <h1>{{ msg }}</h1>
   <!-- <form class="newActivity-container">
        <p>
            <label for="name">Navn på aktivitet: </label><input type="text" id="name">
        </p>
        <h2>Kategorier</h2>
        <table>
            <thead>
            <tr>
              <th> Egenskap</th> <v-for="(cat, index) in categories" :key="index">
              <th> Kategorier </th>
            </tr>
             </thead>
            <tbody>
                <tr v-for="(cat, index) in categories" :key="index">
                    <td  > {{ cat.features.features_id }} </td>
                    <td> {{ cat.categories_name }} </td>
                </tr>
            </tbody>
        </table>
    
    </form>
    <!--<div v-for="(cat, index) in categories" :key="index"> 
    <!--  {{ cat.categories_name }}
  
    <section>
      <div v-for="cat in categories" :key="cat.categories_id">
        <br />
        <h2>{{ cat.categories_name }} </h2>
        <div v-for="feat in cat.features" :key="feat.features_id">
        {{ feat.features_name }}
        </div>
      </div>
      
    </section>
      <div id="app">
        
  <section class="mb-1" v-for="locale in careers.locales">
  <h2>{{locale.region}}</h2>
    <template v-for="role in locale.roles">
      <p>Role: {{role.name}} - Term: {{role.term}}</p>
    </template>
  </section>
</div>
  
  </div>
</template> 

<script>
import CategoryDataService from "@/services/CategoryDataService.js";
//import ActivityFeatureDataService from "@/services/ActivityFeatureDataService.js";
//import FeatureDataService from "@/services/FeatureDataService.js";

export default {
    
  name: "Categories",
  props: {
    msg: String,
  },

  data() {
        return { 
          categories: [],
          categories_name: "",
          categories_id : "",
          //features:[],
          features_name: "",

          props: {
          stripe: false,
          border: false,
          showHeader: true,
          showSummary: false,
          showRowHover: true,
          showIndex: false,
          treeType: true,
          isFold: true,
          expandType: false,
          selectionType: false,
        },
        };
    },
      computed: {
      propList() {
        return Object.keys(this.props).map(item => ({
          name: item,
        }));
      },
    },

    methods: {
      retrieveCategory() {
        CategoryDataService.getAll()
            .then(response => {
            this.categories = response.data;
            console.log(response.data);
          })
          .catch(e => {
          console.log(e);
        });
      },

      refreshList() {
        this.retrieveCategory();
     
      },
    },
    mounted() {
      this.retrieveCategory();
    
    } 
};
</script>

<style scoped>
table{
  width:100%;
}

</style>
<template lang="html">
  <div id="example">
    <ul class="switch-list">
      <li class="switch-item" v-for="item in propList">
        <span>{{ item.name }}: </span>
        <zk-switch v-model="props[item.name]"></zk-switch>
      </li>
    </ul>
    <zk-table
      ref="table"
      sum-text="sum"
      index-text="#"
      :data="data"
      :columns="columns"
      :stripe="props.stripe"
      :border="props.border"
      :show-header="props.showHeader"
      :show-summary="props.showSummary"
      :show-row-hover="props.showRowHover"
      :show-index="props.showIndex"
      :tree-type="props.treeType"
      :is-fold="props.isFold"
      :expand-type="props.expandType"
      :selection-type="props.selectionType">
      <template slot="$expand" scope="scope">
        {{ `My name is ${scope.row.name},
           this rowIndex is ${scope.rowIndex}.`
         }}
      </template>
     <!-- <template slot="likes" scope="scope">
        {{ scope.row.likes.join(',') }}
      </template>
    </zk-table>
  </div>
</template>

<script>
  import ZkSwitch from './Switch/Switch';
  export default {
    name: "Categories",
    components: {
      ZkSwitch,
    },
    data() {
      return {
        props: {
          stripe: false,
          border: false,
          showHeader: true,
          showSummary: false,
          showRowHover: true,
          showIndex: false,
          treeType: true,
          isFold: true,
          expandType: false,
          selectionType: false,
        },
        data: [
          {
            name: 'Jack',
            sex: 'male',
            likes: ['football', 'basketball'],
            score: 10,
            children: [
              {
                name: 'Ashley',
                sex: 'female',
                likes: ['football', 'basketball'],
                score: 20,
                children: [
                  {
                    name: 'Ashley',
                    sex: 'female',
                    likes: ['football', 'basketball'],
                    score: 20,
                  },
                  {
                    name: 'Taki',
                    sex: 'male',
                    likes: ['football', 'basketball'],
                    score: 10,
                    children: [
                      {
                        name: 'Ashley',
                        sex: 'female',
                        likes: ['football', 'basketball'],
                        score: 20,
                      },
                      {
                        name: 'Taki',
                        sex: 'male',
                        likes: ['football', 'basketball'],
                        score: 10,
                        children: [
                          {
                            name: 'Ashley',
                            sex: 'female',
                            likes: ['football', 'basketball'],
                            score: 20,
                          },
                          {
                            name: 'Taki',
                            sex: 'male',
                            likes: ['football', 'basketball'],
                            score: 10,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: 'Taki',
                sex: 'male',
                likes: ['football', 'basketball'],
                score: 10,
              },
            ],
          },
          {
            name: 'Tom',
            sex: 'male',
            likes: ['football', 'basketball'],
            score: 20,
            children: [
              {
                name: 'Ashley',
                sex: 'female',
                likes: ['football', 'basketball'],
                score: 20,
                children: [
                  {
                    name: 'Ashley',
                    sex: 'female',
                    likes: ['football', 'basketball'],
                    score: 20,
                  },
                  {
                    name: 'Taki',
                    sex: 'male',
                    likes: ['football', 'basketball'],
                    score: 10,
                  },
                ],
              },
              {
                name: 'Taki',
                sex: 'male',
                likes: ['football', 'basketball'],
                score: 10,
                children: [
                  {
                    name: 'Ashley',
                    sex: 'female',
                    likes: ['football', 'basketball'],
                    score: 20,
                  },
                  {
                    name: 'Taki',
                    sex: 'male',
                    likes: ['football', 'basketball'],
                    score: 10,
                  },
                ],
              },
            ],
          },
          {
            name: 'Tom',
            sex: 'male',
            likes: ['football', 'basketball'],
            score: 20,
          },
          {
            name: 'Tom',
            sex: 'male',
            likes: ['football', 'basketball'],
            score: 20,
            children: [
              {
                name: 'Ashley',
                sex: 'female',
                likes: ['football', 'basketball'],
                score: 20,
              },
              {
                name: 'Taki',
                sex: 'male',
                likes: ['football', 'basketball'],
                score: 10,
              },
            ],
          },
        ],
        columns: [
          {
            label: 'name',
            prop: 'name',
            width: '400px',
          },
          {
            label: 'sex',
            prop: 'sex',
            minWidth: '50px',
          },
          {
            label: 'score',
            prop: 'score',
          },
          {
            label: 'likes',
            prop: 'likes',
            minWidth: '200px',
            type: 'template',
            template: 'likes',
          },
        ],
      };
    },
    computed: {
      propList() {
        return Object.keys(this.props).map(item => ({
          name: item,
        }));
      },
    },
    methods: {
    },
  };
</script>

<style scoped lang="less">
  * {
    margin: 0;
    padding: 0;
  }
  .switch-list {
    margin: 20px 0;
    list-style: none;
    overflow: hidden;
  }
  .switch-item {
    margin: 20px;
    float: left;
  }
</style>
-->