<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const buildings = ref([
  { label: 'City Center', image: '' },
  { label: 'School', image: '' },
  { label: 'Hospital', image: '' },
  { label: 'School', image: '' },
  { label: 'School', image: '' },
  { label: 'School', image: '' },
  { label: 'School', image: '' },
  { label: 'School', image: '' },
  { label: 'School', image: '' },
  { label: 'School', image: '' },
  { label: 'School', image: '' },
  { label: 'School', image: '' }
])

const selectedBuilding = ref('')

const selectBuilding = (building: string) => {
  selectedBuilding.value == building
    ? (selectedBuilding.value = '')
    : (selectedBuilding.value = building)

  //   axios.post(`/api/buildings/${selectedBuilding.value}`)
}
</script>
<template>
  <div>
    <v-row>
      <v-col>
        <v-btn color="#2B67E0" @click="$router.push({ path: '/' })">
          <v-icon density="compact" icon="mdi-home"> </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="pa-6">
          <v-card-title class="text-h4">Ff</v-card-title>
          <v-card-text class="mt-4">
            <v-row>
              <v-col cols="2" v-for="building in buildings" :key="building.label">
                <v-sheet
                  class="pa-4 rounded-lg"
                  :color="
                    selectedBuilding == building.label || selectedBuilding == 'City Center'
                      ? '#6835d8'
                      : '#2B67E0'
                  "
                  v-ripple
                  @click="selectBuilding(building.label)"
                  >{{ building.label }}</v-sheet
                >
                <div class="text-center">{{ building.label }}</div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
