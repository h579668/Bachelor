<template>
    <div id="activityTable" class="tableFixHead">
        <table>
    <slot>

    </slot>
        </table>
    </div>
</template>

<script>

</script>


<style scoped>
.tableFixHead {
  overflow-y: auto;
  height: 500px;
}
.tableFixHead thead th {
  position: sticky;
  top: 0;
}

#activityTable {
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  margin: auto;
  border-collapse: collapse;
  text-align: left;
}

#activityTable td, #activityTable th {
    border-bottom: 1px solid #ddd;
    padding: 8px;
}

#activityTable tr:hover {
  background-color: #ddd;
  border-bottom: 1px solid #ddd;
  }

#activityTable th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #548687;
  color: white;
}
</style>