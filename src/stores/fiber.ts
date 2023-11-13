import { defineStore } from 'pinia'
import axios from 'axios'

interface FiberState {
  buildings: Building[]
  selectedBuildings: number[]
}

interface Building {
  id: number
  label: string
  image: string
}

export const useFiberStore = defineStore('fiber', {
  state: (): FiberState => {
    return {
      buildings: [
        {
          id: 9,
          label: 'القابضة للاتصالات',
          image: new URL('../assets/building/4.png', import.meta.url).href
        },
        {
          id: 3,
          label: 'برج اتصالات',
          image: new URL('../assets/building/8.png', import.meta.url).href
        },
        { id: 8, label: 'حكومي', image: new URL('../assets/building/7.png', import.meta.url).href },
        { id: 11, label: 'مصرف', image: new URL('../assets/building/2.png', import.meta.url).href },
        { id: 10, label: 'شركة', image: new URL('../assets/building/5.png', import.meta.url).href },
        {
          id: 5,
          label: 'مستشفى',
          image: new URL('../assets/building/10.png', import.meta.url).href
        },
        { id: 2, label: 'مدرسة', image: new URL('../assets/building/1.png', import.meta.url).href },
        { id: 4, label: 'فندق', image: new URL('../assets/building/12.png', import.meta.url).href },
        {
          id: 6,
          label: 'منازل سكنية',
          image: new URL('../assets/building/3.png', import.meta.url).href
        },
        {
          id: 7,
          label: 'عمارات سكنية',
          image: new URL('../assets/building/9.png', import.meta.url).href
        }
      ],
      selectedBuildings: []
    }
  },
  actions: {
    selectBuilding(buildingId: number) {
      if (buildingId == 1) {
        const notSelected = this.buildings
          .filter((v) => !this.selectedBuildings.includes(v.id))
          .map((v) => v.id)

        console.log(this.selectedBuildings)
        this.selectedBuildings.length == 10
          ? (this.selectedBuildings.length = 0)
          : this.selectedBuildings.push(...notSelected)
      } else {
        const index = this.selectedBuildings.indexOf(buildingId)

        index == -1
          ? this.selectedBuildings.push(buildingId)
          : this.selectedBuildings.splice(index, 1)
      }

      // axios.put('http://192.168.136.119:3000/api/fiber/', { id: buildingId })
      axios.put('http://localhost:3000/api/fiber/', { id: buildingId })
    }
  }
})
