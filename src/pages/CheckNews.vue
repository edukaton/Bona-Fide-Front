<template>
  <section class="fncont checknews columns">
    <div class="column is-8">
      <CheckNewsTv :imglink="fakeNewsQuestionActive.image"></CheckNewsTv>
      <h2 class="title title--check">Zadania do wykonania:</h2>
      <div class="checknews__row">
        <CheckNewsInput :li="fakeNewsQuestionActive.tips" :inputComponentData="fakeNewsQuestionActive.inputComponentData" ></CheckNewsInput>
      </div>
      <div class="checknews__row">
        <CheckNewsRadio :li="fakeNewsQuestionActive.tips" :radioComponentData="fakeNewsQuestionActive.radioComponentData"></CheckNewsRadio>
      </div>
      <div class="checknews__btnsum">
        <Button text="Poprzedni news" arrowclass="fa-angle-left" v-if="activeQuestionIndex > 0" @btnclick="prevQuestion"></Button>
        <Button text="Następny news" arrowclass="fa-angle-right" v-if="activeQuestionIndex < lastQuestionIndex" @btnclick="nextQuestion"></Button>
      </div>
    </div>
    <div class="column is-4">
        <UserAside></UserAside>
        <DoYouKnow></DoYouKnow>
        <UserBadge></UserBadge>
    </div>
    <div class="explose" v-if="isExplosion">
      <img src="@/assets/exp.gif" alt="">
    </div>
  </section>
</template>

<script>
  import Button from '@/components/Button';

  import UserAside from '@/partials/UserAside';
  import DoYouKnow from '@/partials/DoYouKnow';
  import UserBadge from '@/partials/UserBadge';
  import CheckNewsTv from '@/partials/CheckNewsTv';
  import CheckNewsInput from '@/partials/CheckNewsInput';
  import CheckNewsRadio from '@/partials/CheckNewsRadio';

  import NewsData1 from '@/data/NewsDataKat1.js';  

  export default {
    data() {
      return {
        fakeNewsQuestions: [],
        fakeNewsQuestionActive: {},
        activeQuestionIndex: 0,
        lastQuestionIndex: 0
      }
    },
    created() {
      this.fakeNewsQuestions = NewsData1();
      this.fakeNewsQuestionActive = this.fakeNewsQuestions[this.activeQuestionIndex];
      this.lastQuestionIndex = this.fakeNewsQuestions.length-1
    },
    computed: {
      isExplosion() {
        // if(this.checkSource.length > 5 && this.radioQuestion == this.radioAnswer && this.switchQuestion == this.switchAnswer) {
        //   return true;
        // }
        return false;
      }
    },
    methods: {
      nextQuestion() {
        this.activeQuestionIndex++;
        this.fakeNewsQuestionActive = this.fakeNewsQuestions[this.activeQuestionIndex];
      },
      prevQuestion() {
        this.activeQuestionIndex--;
        this.fakeNewsQuestionActive = this.fakeNewsQuestions[this.activeQuestionIndex];
      }
    },
    components: {
      Button,
      UserAside,
      DoYouKnow,
      UserBadge,
      CheckNewsTv,
      CheckNewsInput,
      CheckNewsRadio
    }
  }

</script>

<style lang="scss">
  $grey: #9d9d9d;
  $grey2: #686868;
  .checknews {
    margin: 80px auto;
    .column:nth-of-type(1) > div, .column:nth-of-type(1) h2 {
      background: white;
      padding: 15px;
    }
    .column:nth-of-type(1) > div:nth-of-type(1) {
      /* background: transparent; */
    }
    
    &__img {
      margin-bottom: 40px;
    }
    &__row {
      padding: 20px;
      &:nth-child(even) {
        background: #f6f6f6;
      }
      input[type=checkbox].big {
        transform: scale(1.4);
        transform-origin: 0 100%;
      }
    }
    &__h {
      display: inline-block;
      font-size: 26px;
      margin-left: 16px;
      &.done {
        text-decoration: line-through;
      }
    }
    &__showhide {
      margin-top: 10px;
      margin-left: 36px;
      font-size: 14px;
      text-decoration: underline;
      cursor: pointer;
      color: $grey2;
    }
    &__list {
      font-size: 14px;
      color: $grey2;
      margin: 10px 10px 10px 48px;
    }
    &__src {
      margin-top: 20px;
      padding-left: 15px;
    }
    &__smallchecks .control {
      display: flex;
      flex-wrap: wrap;
      margin-top: 10px;
      label {
        font-weight: bold;
        width: 48%;
        margin: 10px 0 0;
      }
    }
    &__yesno {
      margin-top: 20px;
      margin-left: 38px;
      label {
        font-weight: bold;
      }
    }
    &__btnsum {
      display: flex;
      justify-content: center;
      padding: 50px 0 !important;
      /* margin: 0 0 50px; */
    }
  }
  .explose {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .title--check {
    color: $grey;
    padding: 5px 0;
    border-bottom: 1px solid $grey;
    font-size: 18px;
    margin-bottom: 0 !important;
  }

</style>
