<script setup lang="ts">
import { ref } from 'vue'

const dialog = ref(false)

const printit = () => {
  dialog.value = true
}
</script>
<template>
  <v-app>
    <v-app-bar color="#371089" height="120" scroll-behavior="elevate" class="text-center px-8 py-2">
      <div>
        <img src="./assets/hl_logo.png" height="150" alt="" />
      </div>
      <div class="mx-auto">
        <span class="text-white text-h3">عرض المدينة الذكية</span>
        <span class="text-white text-h3">/</span>
        <span class="text-white text-h3">Smart City Demonistration</span>
      </div>
      <!-- <div>
        <img src="./assets/pi_logo.png" height="80" alt="" />
      </div>
      <div class="mr-4">
        <img src="./assets/qr.svg" height="80" alt="" />
      </div> -->
    </v-app-bar>
    <v-main class="px-16">
      <v-container fluid>
        <router-view v-slot="{ Component }">
          <XyzTransition name="fade" mode="out-in" xyz="fade down-1">
            <component :is="Component" />
          </XyzTransition>
        </router-view>
      </v-container>
    </v-main>
    <v-footer app color="transparent" class="justify-end py-4">
      <div>
        <img src="./assets/print_logo.png" height="60" alt="" />
      </div>
      <v-icon icon="mdi-qrcode-scan" class="text-h2 mx-4 blob" color="white" @click="printit" />
    </v-footer>
    <v-dialog v-model="dialog" transition="dialog-bottom-transition" width="430" persistent>
      <v-card class="text-center align-center justify-center pa-6">
        <v-card-title class="text-h4">
          <img src="./assets/print_it.png" height="150" alt="" />
        </v-card-title>
        <!-- <v-card-title class="text-h4"> برينت ات </v-card-title> -->
        <v-card-text>
          <p>مشروع مجسم المدينة الذكية التفاعلي لمنطقة زاوية الدهماني</p>
          <p>مقدم من شركة برينت ات للتصميم والتصنيع - Print It for Design & Manufacturing</p>
          <!-- <p>للتواصل</p>
          <p>بن عاشور طرابلس</p> -->
          <img src="./assets/qr.svg" height="150" width="150" class="align-center mx-auto" />
        </v-card-text>

        <v-card-actions class="text-center">
          <!-- <v-spacer></v-spacer> -->

          <v-btn
            class="text-center"
            text="اغلاق"
            color="#98231a"
            variant="text"
            size="large"
            @click="dialog = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<style lang="scss">
.blob {
  // background: black;
  // border-radius: 50%;
  // margin: 10px;
  // height: 20px;
  // width: 20px;

  box-shadow: 0 0 0 0 #371089;
  transform: scale(1);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 #371089;
  }

  70% {
    transform: scale(1.25);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
</style>
