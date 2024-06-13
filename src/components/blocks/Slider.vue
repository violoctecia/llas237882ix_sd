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
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      isDragging: false,
      currentValue: this.modelValue,
    };
  },
  computed: {
    thumbPosition() {
      return ((this.currentValue - this.min) / (this.max - this.min)) * 100;
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
      const newValue = this.min + (offsetX / rect.width) * (this.max - this.min);
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
