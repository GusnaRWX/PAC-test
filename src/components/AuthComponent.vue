<template>
  <v-app id="inspire">
    <v-main style="background-color: #181818">
      <v-container class="centered-container" fluid>
        <v-row align="center" justify="center">
          <v-col cols="8">
            <v-card class="elevation-3 mb-3 pl-2 pa-2" rounded>
              <div class="text-center display-1">PORTAL-NEWS</div>
              <div class="text-center display-6 mb-3">Login</div>
              <v-form>
                <v-card-text>
                  <v-text-field
                    label="Email"
                    name="email"
                    color="primary"
                    variant="outlined"
                    dense
                    type="text"
                    v-model="state.email"
                  />
                  <span v-if="v$.email.$error">{{
                    v$.email.$errors[0].$message
                  }}</span>
                  <v-text-field
                    label="password"
                    name="password"
                    color="primary"
                    variant="outlined"
                    aria-autocomplete
                    type="password"
                    dense
                    hint="Enter your password to access this website"
                    v-model="state.password"
                  />
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    variant="outlined"
                    small
                    color="primary"
                    @click="submit"
                  >
                    Login
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import useValidate from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";
import { reactive, computed } from "vue";

export default {
  setup() {
    const state = reactive({
      email: "",
      password: "",
    });

    const rules = computed(() => {
      return {
        email: {
          email,
          required,
        },
        password: { required },
      };
    });

    const v$ = useValidate(rules, state);

    return {
      v$,
      state,
    };
  },
  methods: {
    submit() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.$router.push({ name: "home" });
      } else {
        alert("form failed validation check email format or password format");
      }
    },
  },
};
</script>

<script setup></script>
