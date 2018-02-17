<template>
  <section class="fncont checknews">
    <div class="column is-8">
      <img src="@/assets/articles/article0.png" alt="" class="checknews__img">
      <h2 class="title title--check">Zadania do wykonania:</h2>
      <div class="checknews__row">
        <label class="checkbox">
          <input type="checkbox" class="big">
          <h3 class="checknews__h">Sprawdź źródło informacji.</h3>
        </label>
        <div class="checknews__showhide" @click="checkSourceShow1 = !checkSourceShow1">
          {{ (!checkSourceShow1) ? 'Rozwiń i dowiedz się więcej' : 'Zwiń' }}
        </div>
        <div class="checknews__list" v-if="checkSourceShow1">
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
                <input class="input" type="email" placeholder="Recipient email">
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="checknews__row">
        <label class="checkbox">
          <input type="checkbox" class="big">
          <h3 class="checknews__h">Jaki jest cel podanej wiadomości?</h3>
        </label>
        <div class="checknews__showhide" @click="checkSourceShow2 = !checkSourceShow2">
          {{ (!checkSourceShow2) ? 'Rozwiń i dowiedz się więcej' : 'Zwiń' }}
        </div>
        <div class="checknews__list" v-if="checkSourceShow2">
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
              <input type="radio" name="answer"> Informowanie
            </label>
            <label class="radio">
              <input type="radio" name="answer"> Wzbudzanie emocji
            </label>
            <label class="radio">
              <input type="radio" name="answer"> Przekonanie do racji
            </label>
            <label class="radio">
              <input type="radio" name="answer"> Rozrywka
            </label>
          </div>
        </div>
      </div>
      <div class="checknews__row">
          <label class="checkbox">
            <input type="checkbox" class="big">
            <h3 class="checknews__h">Czy na stronie są informacje o autorach? (O nas/Kontakt)</h3>
          </label>
          <div class="checknews__showhide" @click="checkSourceShow3 = !checkSourceShow3">
            {{ (!checkSourceShow3) ? 'Rozwiń i dowiedz się więcej' : 'Zwiń' }}
          </div>
          <div class="checknews__list" v-if="checkSourceShow3">
            <ol>
              <li>Czy jesteś w stanie zweryfikować źródło informacji</li>
              <li>Czy ten artykół nie pochodzi ze stron satyrycznych? (np. aszdziennik)</li>
              <li>Czy źródła są wiarygodne?</li>
              <li>Lorem ipsum dolor sit amet?</li>
            </ol>
          </div>
          <div class="checknews__yesno">
            <div class="field">
              <input id="switchColorDefault" type="checkbox" name="switchColorDefault" class="switch" checked="checked">
              <label for="switchColorDefault">Switch default</label>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        checkSourceShow1: true,
        checkSourceShow2: false,
        checkSourceShow3: false
      }
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
    }
  }

  .title--check {
    color: $grey;
    padding: 5px 0;
    border-bottom: 1px solid $grey;
    font-size: 18px;
    margin-bottom: 0 !important;
  }

</style>
