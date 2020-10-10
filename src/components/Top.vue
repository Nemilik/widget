<template>
  <section class="top" :class="{br3: br3}">
    <div class="title d-flexW justify-content-start" :class="{br3: br3}">
      <div class="d-flex">
        <i class="fa fa-user-plus" aria-hidden="true"></i>
        <div :class="{pd9: pd9}">
          <h4>{{title}}</h4>
        </div>
      </div>
      <div>
        <a href="#" @click="closeModal">
          <i v-if="pd9" class="fa fa-times exit" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Top',
  props: [
    'title',
    'pd9',
    'br3'
  ],
  methods: {
    closeModal() {
      console.log(1)
      this.$emit('closeModal')
    }
  }
}
</script>

<style lang="scss" scoped>
  .top {
    @font-face {
      font-family: 'Geometria-Bold'; 
      src: url('~@/assets/fonts/Geometria-Bold.ttf'); 
      font-weight: bold;
    }
    .br3 {
        border-radius: .375rem .375rem 0rem 0rem;
      }
    .d-flexW {
      display: flex;
      justify-content: space-between!important;
      a {
        color: #fff;
        &:hover {
          color: #8a8a8a;
        }
      }
      .exit  {
        font-size: 22px;
        font-weight: 600;
        margin: 16px 0px;
      }
    }
    .title {
      font-family: 'Geometria';
      font-weight: 600;
      font-weight: bold;
      color: #fff;
      font-weight: 700;
      background-color: #293fcc;
      margin: 0px;
      padding: 15px 15px;
      .pd9 {
        height: 100%;
        padding: 9px 0px;
      }
      i {
        font-size: 54px;
      }
      h4 {
        margin-left: 20px;
        font-weight: bold;
      }
    }
  }
</style>