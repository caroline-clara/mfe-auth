<script lang="ts" setup>
import { inject, ref } from 'vue';

import type { TRegisterHandler } from '@/types/Register.ts';

const name = ref<string>('');
const email = ref<string>('');
const password = ref<string>('');

const registerHandler = inject<TRegisterHandler>('registerHandler', () => void 0);
</script>

<template>
  <form class="login-form" @submit.prevent="registerHandler(name, email, password)">
    <div class="field login-form__field">
      <label class="label">Name</label>
      <p class="control has-icons-left has-icons-right">
        <input
          v-model="name"
          class="input is-dark login-form__field__input"
          type="email"
          @invalid="(event) => event.preventDefault()"
        />
        <span class="icon is-small is-left login-form__field__icon">
          <span class="material-icons">person</span>
        </span>
      </p>
    </div>
    <div class="field login-form__field">
      <label class="label">Email</label>
      <p class="control has-icons-left has-icons-right">
        <input
          v-model="email"
          class="input is-dark login-form__field__input"
          type="email"
          @invalid="(event) => event.preventDefault()"
        />
        <span class="icon is-small is-left login-form__field__icon">
          <span class="material-icons">email</span>
        </span>
      </p>
    </div>
    <div class="field login-form__field">
      <label class="label">Password</label>
      <p class="control has-icons-left has-icons-right">
        <input v-model="password" class="input is-dark login-form__field__input" type="password" />
        <span class="icon is-small is-left login-form__field__icon">
          <span class="material-icons">lock</span>
        </span>
      </p>
    </div>
    <input class="button is-dark submit-btn" type="submit" value="Create account" />
  </form>
</template>

<style lang="scss" scoped>
.login-form {
  --color-dark: #404654;

  display: grid;
  gap: 1rem;

  &__field__input {
    &:focus + .icon {
      color: var(--color-dark) !important;
    }
  }
}
</style>
