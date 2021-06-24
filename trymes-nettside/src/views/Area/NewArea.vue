<template> 
<div>
      <form>
        <legend>
          Nytt område:
        </legend>
        <fieldset>
            <TableData>
              <thead>
              <tr>
                <th colspan='2'>
                  Fyll inn informasjon her:
                </th>
              </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <label for='text'>Land </label>
                  </td>
                  <td>
                    <!--<input type='text' placeholder='Land' v-model='country' class=/>-->
                    <input type='text' placeholder='Land' v-model='country' />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label for='text'>Fylke</label>
                  </td>
                  <td>
                    <input type='text' placeholder='Fylke' v-model='county' />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label for='text'>Kommune </label>
                  </td>
                  <td>
                    <input type='text' placeholder='Kommune' v-model='municipality' />
                  </td>
                </tr>
              </tbody>

            </TableData>
            <br />
            <el-button @click='addArea' size='small'>
                Lagre nytt område
            </el-button>
  
            </fieldset>
         </form>
        </div>
</template>

<script>
import AreaDataService from '@/services/AreaDataService.js';

export default {
    name:'NewArea',
    data(){
        return{
            country:'Norge',
            municipality:'',
            county:'',
        }
    },
    methods:{
        addArea(){
            if(this.country && this.municipality && this.county){
                let data = {
                    country:this.country,
                    county: this.county,
                    municipality: this.municipality,
                    
                }
                AreaDataService.create(data)
                .then((response) => {
                    this.$notify({
                        title: 'Område er lagt til',
                        message: 'Land: ' + data.country +  ' Fylke: ' +  data.county + ' Kommune ' + data.municipality,
                        type: 'success',
                    });
                    this.country = 'Norge';
                    this.county = '';
                    this.municipality ='';


            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        this.$notify({
          title: 'Området er IKKE lagt til',
          message: 'Vennligst skriv inn på manglende felt',
          type: 'warning',
        });
            }
        }
    }
}
</script>

<style scoped>

.el-button{
  background-color: #548687;
  color:  #ffff;
  border-color: #0000; 
}
.el-button:hover{
  background-color: #72b1b3;
  color:  #ffff;
  border:1px solid;
  border-color:  #548687; 
}
fieldset{
    border: 2px solid;
    border-color:  #548687;

}
</style>