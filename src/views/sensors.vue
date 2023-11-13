<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { onBeforeUnmount } from 'vue'

interface SensorsResponse {
  status: string
  data: SensorsData
}

interface SensorsData {
  temp: string
  humidity: string
  Power: string
  rain: string
  flot: string
  airQuality: string
  atmospher: string
  tank: string
  fire: string
  network: string
}

const sensors = ref({
  power: {
    label: 'استهلاك الكهرباء',
    value: '',
    icon: 'mdi-transmission-tower'
  },
  tank: {
    label: 'استهلاك الماء',
    value: '',
    icon: 'mdi-tanker-truck'
  }
})

const condition = ref({
  temp: {
    label: 'درجة الحرارة',
    value: '',
    icon: 'mdi-temperature-celsius'
  },
  humidity: {
    label: 'نسبة الرطوبة',
    value: '',
    icon: 'mdi-water-percent'
  },
  atmospher: {
    label: 'الضغط الجوي',
    value: '',
    icon: 'mdi-speedometer'
  },
  rain: {
    label: 'الأمطار',
    value: '',
    icon: 'mdi-weather-pouring'
  },
  airQuality: {
    label: 'جودة الهواء',
    value: '',
    icon: 'mdi-air-filter'
  }
})

const emergency = ref({
  flot: {
    label: 'الفياضانات',
    value: 'لا يوجد',
    icon: 'mdi-home-flood'
  },
  fire: {
    label: 'حساس الحرائق',
    value: 'لايوجد',
    icon: 'mdi-fire-alert'
  }
})

const getSensorsData = async () => {
  // const res = await axios.get<SensorsResponse>('http://192.168.136.119:3000/api/sensor/')
  const res = await axios.get<SensorsResponse>('http://localhost:3000/api/sensor/')

  condition.value.temp.value = `${res.data.data.temp} °C`
  condition.value.humidity.value = `${res.data.data.humidity} %`
  condition.value.rain.value = res.data.data.rain
  condition.value.airQuality.value = res.data.data.airQuality
  condition.value.atmospher.value = `${res.data.data.atmospher} Pa`
  sensors.value.power.value = `${res.data.data.Power} W`
  sensors.value.tank.value = res.data.data.tank
  emergency.value.fire.value = res.data.data.fire
  emergency.value.flot.value = res.data.data.flot
}

getSensorsData()

const polling = ref<any>(null)

const pollData = () => {
  polling.value = setInterval(() => {
    getSensorsData()
  }, 5000)
}
pollData()

onBeforeUnmount(() => clearInterval(polling))
</script>
<template>
  <div class="py-12">
    <v-row>
      <v-col class="d-flex justify-end align-end">
        <v-btn color="#98231a" @click="$router.push({ path: '/' })">
          <v-icon density="compact" icon="mdi-home"> </v-icon>
          الصفحة الرئيسية
        </v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="4">
        <v-card class="pa-6">
          <v-card-title class="text-h4">الخدمات</v-card-title>
          <v-card-text class="mt-4">
            <v-list>
              <v-list-item v-for="sensor in sensors" :key="sensor.label" class="mt-2">
                <template v-slot:prepend>
                  <v-icon :icon="sensor.icon" size="x-large" class="text-h4" color="#98231a" />
                </template>
                <v-list-item-title class="text-h6 text-grey-darken-2">
                  {{ sensor.label }}
                </v-list-item-title>
                <template v-slot:append>
                  <p class="text-h5 font-weight-bold" dir="ltr">{{ sensor.value }}</p>
                </template>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card class="pa-6 red-gradient text-white">
          <v-card-title class="text-h4">حالة الطقس</v-card-title>
          <v-card-text class="mt-4">
            <v-list class="bg-transparent">
              <v-list-item v-for="sensor in condition" :key="sensor.label" class="mt-2">
                <template v-slot:prepend>
                  <v-icon :icon="sensor.icon" size="x-large" class="text-h4 text-white" />
                </template>
                <v-list-item-title class="text-h6">
                  {{ sensor.label }}
                </v-list-item-title>
                <template v-slot:append>
                  <p class="text-h5 font-weight-bold" dir="ltr">{{ sensor.value }}</p>
                </template>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card class="pa-6">
          <v-card-title class="text-h4">الطوارئ</v-card-title>
          <v-card-text class="mt-4">
            <v-list>
              <v-list-item v-for="sensor in emergency" :key="sensor.label" class="mt-2">
                <template v-slot:prepend>
                  <v-icon :icon="sensor.icon" size="x-large" class="text-h4" color="#98231a" />
                </template>
                <v-list-item-title class="text-h6 text-grey-darken-2">
                  {{ sensor.label }}
                </v-list-item-title>
                <template v-slot:append>
                  <p class="text-h5 font-weight-bold">{{ sensor.value }}</p>
                </template>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!--OST Widget code start-->
    <!-- <v-row>
      <div style="text-align: right">
        <div style="min-height: 360px">
          <div style="width: 100%; height: 0; padding-bottom: 50%; position: relative">
            <iframe
              style="
                border: none;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                min-height: 360px;
                border: none;
                overflow: hidden !important;
              "
              src="//openspeedtest.com/speedtest"
            ></iframe>
          </div>
        </div>
        Provided by <a href="https://openspeedtest.com">OpenSpeedtest.com</a>
      </div>
    </v-row> -->

    <!-- OST Widget code end -->
  </div>
</template>
