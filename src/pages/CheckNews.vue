<template>
  <section class="fncont checknews columns">
    <div class="column is-8">
      <img src="@/assets/articles/article0.png" alt="" class="checknews__img">
      <h2 class="title title--check">Zadania do wykonania:</h2>
      <div class="checknews__row">
        <div class="checkbox">
          <input type="checkbox" class="big" :checked="checkSource.length > 5" :disabled="checkSource.length <= 5">
          <h3 class="checknews__h" :class="{done: checkSource.length > 5}">Sprawdź źródło informacji.</h3>
        </div>
        <div class="checknews__showhide" @click="moreInfo1 = !moreInfo1">
          {{ (!moreInfo1) ? 'Rozwiń i dowiedz się więcej' : 'Zwiń' }}
        </div>
        <div class="checknews__list" v-if="moreInfo1">
          <ol>
            <li>Czy jesteś w stanie zweryfikować źródło informacji</li>
            <li>Czy ten artykół nie pochodzi ze stron satyrycznych? (np. aszdziennik)</li>
            <li>Czy źródła są wiarygodne?</li>
            <li>Lorem ipsum dolor sit amet?</li>
          </ol>
        </div>
        <div class="field is-horizontal checknews__src">
          <div class="field-label is-normal">
            <label class="label">Podaj źródło</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input class="input" type="text" placeholder="źródło" v-model="checkSource">
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="checknews__row">
        <div class="checkbox">
          <input type="checkbox" class="big" :checked="radioQuestion == radioAnswer" :disabled="radioQuestion != radioAnswer">
          <h3 class="checknews__h" :class="{done: radioQuestion == radioAnswer}">Jaki jest cel podanej wiadomości?</h3>
        </div>
        <div class="checknews__showhide" @click="moreInfo2 = !moreInfo2">
          {{ (!moreInfo2) ? 'Rozwiń i dowiedz się więcej' : 'Zwiń' }}
        </div>
        <div class="checknews__list" v-if="moreInfo2">
          <ol>
            <li>Czy jesteś w stanie zweryfikować źródło informacji</li>
            <li>Czy ten artykół nie pochodzi ze stron satyrycznych? (np. aszdziennik)</li>
            <li>Czy źródła są wiarygodne?</li>
            <li>Lorem ipsum dolor sit amet?</li>
          </ol>
        </div>
        <div class="checknews__smallchecks">
          <div class="control">
            <label class="radio">
              <input type="radio" name="answer" v-model="radioQuestion" :value="0"> Informowanie
            </label>
            <label class="radio">
              <input type="radio" name="answer" v-model="radioQuestion" :value="1"> Wzbudzanie emocji
            </label>
            <label class="radio">
              <input type="radio" name="answer" v-model="radioQuestion" :value="2"> Przekonanie do racji
            </label>
            <label class="radio">
              <input type="radio" name="answer" v-model="radioQuestion" :value="3"> Rozrywka
            </label>
          </div>
        </div>
      </div>
      <div class="checknews__row">
          <div class="checkbox">
            <input type="checkbox" class="big" :checked="switchQuestion == switchAnswer" :disabled="switchQuestion == !switchAnswer">
            <h3 class="checknews__h" :class="{done: switchQuestion == switchAnswer}">Czy na stronie są informacje o autorach? (O nas/Kontakt)</h3>
          </div>
          <div class="checknews__showhide" @click="moreInfo3 = !moreInfo3">
            {{ (!moreInfo3) ? 'Rozwiń i dowiedz się więcej' : 'Zwiń' }}
          </div>
          <div class="checknews__list" v-if="moreInfo3">
            <ol>
              <li>Czy jesteś w stanie zweryfikować źródło informacji</li>
              <li>Czy ten artykół nie pochodzi ze stron satyrycznych? (np. aszdziennik)</li>
              <li>Czy źródła są wiarygodne?</li>
              <li>Lorem ipsum dolor sit amet?</li>
            </ol>
          </div>
          <div class="checknews__yesno">
            <div class="field">
              <label for="switchColorDefault">Nie</label>
              <input id="switchColorDefault" type="checkbox" name="switchColorDefault" class="switch" v-model="switchQuestion">
              <label for="switchColorDefault">Tak</label>
            </div>
          </div>
        </div>
        <div class="checknews__btnsum">
          <Button text="Następny news"></Button>
        </div>
    </div>
    <div class="column is-4">
        <RankSmall></RankSmall>
        <DoYouKnow></DoYouKnow>
        <UserBadge></UserBadge>
    </div>
    <div class="explose" v-if="isExplosion">
      <img src="@/assets/exp.gif" alt="">
    </div>
  </section>
</template>

<script>
  import RankSmall from '@/partials/RankSmall';
  import DoYouKnow from '@/partials/DoYouKnow';
  import UserBadge from '@/partials/UserBadge';
  import Button from '@/components/Button';
  export default {
    data() {
      return {
        moreInfo1: true,
        moreInfo2: false,
        moreInfo3: false,
        checkSource: '',
        radioQuestion: null,
        switchQuestion: false,
        radioAnswer: 1,
        switchAnswer: true
      }
    },
    computed: {
      isExplosion() {
        if(this.checkSource.length > 5 && this.radioQuestion == radioAnswer && this.switchQuestion == switchAnswer) {
          return true;
        }
        return false;
      }
    },
    methods: {
      // checkSource() {
      //   console.log('this');
      // }
    },
    components: {
      Button,
      RankSmall,
      DoYouKnow,
      UserBadge
    }
  }

</script>

<style lang="scss">
  $grey: #9d9d9d;
  $grey2: #686868;
  .checknews {
    margin: 10px auto;
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
      margin: 50px 0 100px;
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
