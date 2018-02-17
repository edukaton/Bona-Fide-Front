<template>
	<div>
		<div class="column is-4 is-offset-4" v-if="viewState === 0">
			<h1 class="title">Dodaj fake news lub potencjalne zagrożenie</h1>
			<form @click.prevent="addFakeLink">
				<div class="field has-addons">
					<div class="control control--inp">
						<input class="input" type="text" placeholder="Find a repository" v-model="link">
					</div>
					<div class="control">
						<a class="button is-success">
							<i class="fas fa-plus"></i>
						</a>
					</div>
				</div>
			</form>
			<p>
				Chcesz pomagać nam zbierać potencjalne zagrożenia w internecie? Możesz robić to szybciej dzięki naszemu rozszerzeniu.
				<br> Pobierz wtyczkę i alarmuj nas jednym kliknięciem o potencjalnym zagrożeniu w internecie.
			</p>
			<p>
				<a class="button is-primary pluginbtn--chrome">Pobierz plugin Chrome
					<i class="fab fa-chrome"></i>
				</a>
			</p>
		</div>
		<div class="column is-4 is-offset-4" v-if="viewState === 1">
			<h1 class="title">Otrzymaliśmy informację o zagrożeniu.</h1>
			<h2 class="subtitle">Dziękujemy</h2>
		</div>
	</div>
</template>

<script>
  import axios from 'axios';
  export default {
		data() {
			return {
				link: '',
				// viewState, 0 - begin, 1 - success send, 2 - error
				viewState: 1
			}
		},
    methods: {
      addFakeLink() {
        var _th = this;
        axios.post(axios.baseURL + '/auth/local', {
            link: _th.link
          })
          .then(function (response) {
            // console.log(response);
            var data = response.data;
            
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }

</script>

<style lang="scss">
	.subtitle {
		margin-top: 10px !important;
	}

  form {
    margin-bottom: 40px;
  }

  .control--inp {
    width: 100%;
  }

  p {
    font-size: 14px;
    margin: 20px 0;
  }

  .pluginbtn {
    &--chrome svg {
      margin-left: 10px;
    }
  }

</style>
