<template>
  <div>
    <div class="checkbox">
      <input type="checkbox" class="big" :checked="inputValue == answer" :disabled="inputValue != answer">
      <h3 class="checknews__h" :class="{done: inputValue == answer}">Sprawdź źródło informacji.</h3>
    </div>
    <div class="checknews__showhide" @click="moreInfo = !moreInfo">
      {{ (!moreInfo) ? 'Rozwiń i dowiedz się więcej' : 'Zwiń' }}
    </div>
    <div class="checknews__list" v-if="moreInfo">
      <ol>
        <li v-for="item in li">{{item}}</li>
      </ol>
    </div>
    <div class="field is-horizontal checknews__src">
      <div class="field-label is-normal">
        <label class="label">{{lbl}}</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input class="input" type="text" :placeholder="placeholder" v-model="inputValue">
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['li', 'lbl', 'placeholder', 'answer'],
    data() {
      return {
        moreInfo: false,
        inputValue: ''
      }
    }
  }

</script>
