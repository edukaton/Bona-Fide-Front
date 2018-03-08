<template>
  <div class="ui__badge-wrapper">
    <div class="ui__badge-row">
      <div class="ui__badge-active">
        <img class="ui__badge-icon" src="/static/ui__badge-fire.png" alt="">
      </div>
      <div class="ui__badge-disabled">
        <img class="ui__badge-icon" src="/static/ui__badge-lock.png" alt="">
      </div>
      <div class="ui__badge-disabled">
        <img class="ui__badge-icon" src="/static/ui__badge-lock.png" alt="">
      </div>
      <div class="ui__badge-disabled">
        <img class="ui__badge-icon" src="/static/ui__badge-lock.png" alt="">
      </div>
    </div>
    <div class="ui__badge-row">
      <div class="ui__badge-disabled">
        <img class="ui__badge-icon" src="/static/ui__badge-lock.png" alt="">
      </div>
      <div class="ui__badge-active">
        <img class="ui__badge-icon" src="/static/ui__badge-love.png" alt="">
      </div>
      <div class="ui__badge-disabled">
        <img class="ui__badge-icon" src="/static/ui__badge-lock.png" alt="">
      </div>
      <div class="ui__badge-active">
        <img class="ui__badge-icon" src="/static/ui__badge-twitter.png" alt="">
      </div>
    </div>
    <div class="ui__badge-row">
      <div class="ui__badge-disabled">
        <img class="ui__badge-icon" src="/static/ui__badge-lock.png" alt="">
      </div>
      <div class="ui__badge-disabled">
        <img class="ui__badge-icon" src="/static/ui__badge-lock.png" alt="">
      </div>
      <div class="ui__badge-active ui__badge-recent">
        <img class="ui__badge-icon" src="/static/ui__badge-user.png" alt="">
      </div>
      <div class="ui__badge-disabled">
        <img class="ui__badge-icon" src="/static/ui__badge-lock.png" alt="">
      </div>
    </div>
    <div class="ui__badge-row">
      <div class="ui__badge-disabled">
        <img class="ui__badge-icon" src="/static/ui__badge-lock.png" alt="">
      </div>
      <div class="ui__badge-disabled">
        <img class="ui__badge-icon" src="/static/ui__badge-lock.png" alt="">
      </div>
      <div class="ui__badge-disabled">
        <img class="ui__badge-icon" src="/static/ui__badge-lock.png" alt="">
      </div>
      <div class="ui__badge-disabled">
        <img class="ui__badge-icon" src="/static/ui__badge-lock.png" alt="">
      </div>
    </div>
    <div class="ui__badge-row">
      <div class="ui__badge-disabled">
        <img class="ui__badge-icon" src="/static/ui__badge-lock.png" alt="">
      </div>
      <div class="ui__badge-disabled">
        <img class="ui__badge-icon" src="/static/ui__badge-lock.png" alt="">
      </div>
      <div class="ui__badge-disabled">
        <img class="ui__badge-icon" src="/static/ui__badge-lock.png" alt="">
      </div>
      <div class="ui__badge-active">
        <img class="ui__badge-icon" src="/static/ui__badge-fire.png" alt="">
      </div>
    </div>
    <div class="ui__badge-row">
      <h4 class="ui__badge-status">Agent wpływu</h4>
    </div>
    <div class="ui__badge-row">
      <div class="ui__badge-buttons">
        <span class="ui__badge-btnPrev"></span>
        <span class="ui__badge-btnNext"></span>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@mixin flex-align-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.ui__badge- {
  &wrapper {
    background: url("/static/ui__badge-wrapper.png") no-repeat;
    height: 100%;
  }
  &row {
    @include flex-align-center;
    &:first-child {
      padding-top: 6em;
    }
    padding-top: 0.25em;
    width: 100%;
  }
  &active {
    background: url("/static/ui__badge-active.png") no-repeat;
    width: 16%;
    height: 50px;
    filter: grayscale(50%);
    -webkit-filter: grayscale(50%);
    filter: gray;
    -webkit-transition: all 0.6s ease;
  }
  &recent {
    filter: grayscale(0%);
    -webkit-filter: grayscale(0%);
    filter: none;
  }
  &disabled {
    background: url("/static/ui__badge-disabled.png") no-repeat;
    width: 16%;
    height: 50px;
  }
  &icon {
    padding-top: 10px;
    padding-left: 13px;
  }
  &status {
    // placeholder
  }
  &buttons {
    padding-top: 20px;
    display: flex;
  }
  &btnPrev {
    background: url("/static/ui__badge-btnPrev.png") no-repeat;
    width: 34px;
    height: 34px;
  }
  &btnNext {
    background: url("/static/ui__badge-btnNext.png") no-repeat;
    width: 34px;
    height: 34px;
  }
}
</style>
