<script setup lang="ts">
import axios from 'axios'
import { useFiberStore } from '../stores/fiber'

const fiberStore = useFiberStore()

const getActiveFibers = async () => {
  // const res = await axios.get<number[]>('http://192.168.136.119:3000/api/fiber/')
  const res = await axios.get<number[]>('http://localhost:3000/api/fiber/')

  fiberStore.selectedBuildings = res.data
}

getActiveFibers()
</script>
<template>
  <div>
    <v-row>
      <v-col class="d-flex justify-end align-end">
        <v-btn color="#98231a" @click="$router.push({ path: '/' })">
          <v-icon density="compact" icon="mdi-home"> </v-icon>
          الصفحة الرئيسية
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="pa-6">
          <v-card-title class="text-h4">الشبكة التفاعلية</v-card-title>
          <v-card-text class="mt-4">
            <v-row>
              <v-col cols="3">
                <v-card
                  class="pa-4 rounded-lg"
                  :class="
                    fiberStore.selectedBuildings.length === 10
                      ? 'purple-gradient text-white'
                      : 'red-gradient text-white'
                  "
                  v-ripple
                  @click="fiberStore.selectBuilding(1)"
                >
                  <v-card-text class="d-flex justify-center align-center">
                    <img src="../assets/building/6.png" alt="" />
                  </v-card-text>
                </v-card>
                <div class="text-center text-h6">هاتف ليبيا'</div>
              </v-col>
              <v-col>
                <v-row>
                  <v-col cols="2" v-for="building in fiberStore.buildings" :key="building.id">
                    <v-card
                      height="200"
                      class="pa-6 rounded-lg justify-center d-flex align-center"
                      :class="
                        fiberStore.selectedBuildings.includes(building.id)
                          ? 'purple-gradient text-white'
                          : 'red-gradient text-white'
                      "
                      v-ripple
                      @click="fiberStore.selectBuilding(building.id)"
                    >
                      <!-- <v-card-text class="d-flex justify-center align-center"> -->
                      <img :src="building.image" />
                      <!-- </v-card-text> -->
                    </v-card>
                    <div class="text-center">{{ building.label }}</div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
