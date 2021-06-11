<template> 
<div>
   <form>
  <label for="select"> Velg forbundets område (en om gangen)</label> <br />
          
          <select
             class="form-control"
              v-model="activity.areas_id"
              :required="true">
            <option disabled value=""> Velg område </option>
            <option v-for="area in areas" :value="area.areas_id" :key="area.areas_id" :id="area.areas_id">
                {{ area.country}} : {{ area.municipality}} : {{ area.county }}
            </option>
          </select> 
          <button @click="addAreaToAssociation">
            Legg til Område
          </button>
       
       </form>
      </template>
      <form>
        <legend>
          Opprett et nytt område:
        </legend>
        <fieldset>
            <TableData>
              <thead colspan="2">
              <tr>
                <td>
                  Eller opprett et nytt her: (Fyll i alle fall ut land og fylke)
                </td>
              </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <label for="text">Land </label>
                  </td>
                  <td>
                    <input type="text" placeholder="Land" v-model="country" class=/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label for="text">Fylke</label>
                  </td>
                  <td>
                    <input type="text" placeholder="Fylke" v-model="municipality" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label for="text">Kommune </label>
                  </td>
                  <td>
                    <input type="text" placeholder="Kommune" v-model="county" />
                  </td>
                </tr>
              </tbody>

            </TableData>
  
            </fieldset>
         </form>
        </template>
        </div>
</template>