<template>
  <div>
    <h1> {{ register }} </h1>
    <div>
        <!-- choose location-->
      <select
        class="form-control"
        v-model="select_area"
        :required="true"
        @change="changeLocation">
        <option diabled :value="select_area">{{ select_area }}</option>
        <option v-for="a in area" :value="a.place" :key="a.id">
          {{ a.place }}
        </option>
      </select>
      <br />
      <div id="spanelement">
        <span> Valgt område: {{ select_area }} </span>
      </div>
    </div>
    <!-- Choose age-->
    <div>
      <select
        class="form-control"
        v-model="select_age"
        :required="true"
        @change="changeAge">
        <option diabled :value="select_age">{{ select_age }}</option>
        <option v-for="ag in age" :value="ag.year" :key="ag.id">
          {{ ag.year }}
        </option>
      </select>
      <br />
      <div id="spanelement">
        <span> Valgt alder: {{ select_age }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterUser",
  props: {
    register: String,
  },
  data() {
    return {
      area: [
        { id: 1, place: "Vestland" },
        { id: 2, place: "Oslo" },
      ],
      select_area: "Velg område",
      age: [
        { id: 1, year: "9-11" },
        { id: 2, year: "12-14" },
      ],
      select_age: "Velg alder",
    };
  },
};
</script>

<style scoped>
#spanelement {
  margin-top: 3%;
}

select {
  margin-top: 5%;
  padding: 1%;
  width: 22%;
}

option {
  line-height: 10%;
  font-display: 10%;
}
</style>