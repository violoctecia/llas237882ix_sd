<template>
  <div
      class="slider-container"
      @mousedown="startDrag"
      @touchstart="startDrag"
  >
    <div class="slider-track" :style="{ width: thumbPosition + '%' }"></div>
    <div
        class="slider-thumb"
        :style="{ left: thumbPosition + '%' }"
        ref="thumb"
        @mousedown="startDrag"
        @touchstart="startDrag"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    modelValue: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
      default: 100000,
    },
    max: {
      type: Number,
      default: 20000000,
    },
  },
  data() {
    return {
      isDragging: false,
      currentValue: this.modelValue,
      midValue: 1000000,
      midPercentage: 50,
    };
  },
  computed: {
    thumbPosition() {
      const range1 = this.midValue - this.min;
      const range2 = this.max - this.midValue;
      if (this.currentValue <= this.midValue) {
        return ((this.currentValue - this.min) / range1) * this.midPercentage;
      } else {
        return this.midPercentage + ((this.currentValue - this.midValue) / range2) * (100 - this.midPercentage);
      }
    },
  },
  methods: {
    startDrag(event) {
      this.isDragging = true;
      this.updateValue(event);
      document.addEventListener('mousemove', this.onDrag);
      document.addEventListener('mouseup', this.endDrag);
      document.addEventListener('touchmove', this.onDrag);
      document.addEventListener('touchend', this.endDrag);
    },
    onDrag(event) {
      if (this.isDragging) {
        this.updateValue(event);
      }
    },
    endDrag() {
      this.isDragging = false;
      document.removeEventListener('mousemove', this.onDrag);
      document.removeEventListener('mouseup', this.endDrag);
      document.removeEventListener('touchmove', this.onDrag);
      document.removeEventListener('touchend', this.endDrag);
    },
    updateValue(event) {
      let clientX;
      if (event.touches) {
        clientX = event.touches[0].clientX;
      } else {
        clientX = event.clientX;
      }
      const slider = this.$refs.thumb.parentElement;
      const rect = slider.getBoundingClientRect();
      const offsetX = clientX - rect.left;
      const percentage = (offsetX / rect.width) * 100;

      let newValue;
      const range1 = this.midValue - this.min;
      const range2 = this.max - this.midValue;

      if (percentage <= this.midPercentage) {
        newValue = this.min + (percentage / this.midPercentage) * range1;
      } else {
        newValue = this.midValue + ((percentage - this.midPercentage) / (100 - this.midPercentage)) * range2;
      }

      newValue = Math.round(newValue);
      this.currentValue = Math.min(Math.max(newValue, this.min), this.max);
      this.$emit('update:modelValue', this.currentValue);
    },
  },
  watch: {
    modelValue(newValue) {
      this.currentValue = newValue;
    },
  },
};
</script>
