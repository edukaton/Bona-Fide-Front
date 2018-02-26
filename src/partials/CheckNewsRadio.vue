<template>
  <div>
    <div class="checkbox">
      <input type="checkbox" class="big" :checked="radioQuestion == radioAnswer" :disabled="radioQuestion != radioAnswer">
      <h3 class="checknews__h" :class="{done: radioQuestion == radioAnswer}">
        {{radioComponentData.question}}
      </h3>
    </div>
    <div class="checknews__showhide" @click="moreInfo = !moreInfo">
      {{ (!moreInfo) ? 'Rozwiń i dowiedz się więcej' : 'Zwiń' }}
    </div>
    <div class="checknews__list" v-if="moreInfo">
      <ol>
        <li v-for="item in li">{{item}}</li>
      </ol>
    </div>
    <div class="checknews__smallchecks">
      <div class="control">
        <label class="radio" v-for="answer in radioComponentData.answers">
          <input type="radio" name="answer" v-model="radioQuestion" :value="answer"> {{answer}}
        </label>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
      props: ['li', 'radioComponentData'],
        data() {
          return {
            moreInfo: false,
            radioQuestion: '',
            radioAnswer: this.$props.radioComponentData.goodAnswer
          }
        }
    }
</script>