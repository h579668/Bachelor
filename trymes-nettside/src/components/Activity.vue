<template>
    <form>
        <fieldset>
          <legend><b>
            Legg til eller endre Forbund
            <b>
          </legend>
          <label for="select"> Velg forbund </label> <br />
          <select
             class="form-control"
              v-model="activity.associations_id"
              :required="true">
            <option disabled value=""> Velg forbund</option>
            <option v-for="association in associations" :value="association.associations_id" :key="association.associations_id" :id="association.associations_id">
              {{ association.associations_name }}
            </option>
          </select> <br />

          <button @click="findActivities">
            Finn tilhørende aktiviteter
          </button>

         
      <template v-if="showActivities">  
        <p>
            Forbundets registrerte aktiviteter:
          </p>

        <table>
            <thead> 
              <tr>
                <th>Aktivitetsnavn<th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="act in associations_activities.activities" :key="act.activities_id">
                <td>
                  {{ act.activities_name }}
                </td>
              </tr>

            </tbody>

          </table>
          <br/>
         <table>
            <thead> 
              <tr>
                <th> Land </th>
                <th> Fylke </th>
                <th> Kommune </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="area in associations_activities.areas" :key="area.areas_id">
                <td>
                  {{ area.country }}
                </td>
                <td>
                  {{ area.county }}
                </td>
                <td>
                  {{ area.municipality }}
                </td>
              </tr>

            </tbody>

          </table>
          
      </template>
      <button @click="newAssociation" v-show="!newAsso">
            Opprett et nytt forbund
      </button>
      </fieldset>
      </form>

</template>

<script>
export default {
    name: "Activity"

}
</script>