<template>
    <div>
        <form novalidate class="md-layout form_wrap" @submit.prevent="validateUser">
            <md-card class="md-layout-item md-size-50 md-small-size-100">
                <md-card-header>
                    <div class="md-title">Users</div>
                </md-card-header>

                <md-card-content>
                    <div class="md-layout md-gutter">
                        <div class="md-layout-item md-small-size-100">
                            <md-field :class="getValidationClass('firstName')">
                                <label for="first-name">First Name</label>
                                <md-input name="first-name"
                                          id="first-name"
                                          autocomplete="given-name"
                                          v-model="form.firstName"
                                          :disabled="sending"
                                          :placeholder="this.$store.state.firstName"
                                >
                                </md-input>
                                <span class="md-error"
                                      v-if="!$v.form.firstName.required">The first name is required</span>
                                <span class="md-error"
                                      v-else-if="!$v.form.firstName.minlength">Invalid first name</span>
                            </md-field>
                        </div>

                        <div class="md-layout-item md-small-size-100">
                            <md-field :class="getValidationClass('lastName')">
                                <label for="last-name">Last Name</label>
                                <md-input name="last-name"
                                          id="last-name"
                                          autocomplete="family-name"
                                          v-model="form.lastName"
                                          :disabled="sending"
                                          :placeholder="this.$store.state.lastName"
                                />
                                <span class="md-error"
                                      v-if="!$v.form.lastName.required">The last name is required</span>
                                <span class="md-error" v-else-if="!$v.form.lastName.minlength">Invalid last name</span>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="getValidationClass('number')">
                            <label>Number</label>
                            <md-input v-model="form.number" type="text" name="number" v-mask="'+7(###)-###-####'"/>
                        </md-field>
                    </div>

                    <div class="md-layout-item md-small-size-100">
                        <md-field>
                            <label>Textarea</label>
                            <md-textarea v-model="form.textarea" md-counter="250" class="md-textarea"/>
                        </md-field>
                    </div>

                </md-card-content>

                <md-progress-bar md-mode="indeterminate" v-if="sending"/>

                <md-card-actions>
                    <md-button type="submit" class="md-primary" :disabled="sending" @click="clearInput">Create user</md-button>
                </md-card-actions>
            </md-card>

            <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>
        </form>
    </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "FormValidation",
  mixins: [validationMixin],
  data: () => ({
    form: {
      textarea: null,
      firstName: null,
      lastName: null,
      number: null
    },
    userSaved: false,
    sending: false,
    lastUser: null
  }),
  validations: {
    form: {
      firstName: {
        required,
        minLength: minLength(3)
      },
      lastName: {
        required,
        minLength: minLength(3)
      },
      number: {
        required,
        minLength: minLength(11)
      }
    }
  },
  methods: {
    clearInput() {
      this.$store.commit("clearInput");

        fetch('/forms.json')
            .then(r => alert(r.status))
    },

    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.firstName = null;
      this.form.lastName = null;
      this.form.number = null;
      this.form.textarea = null;
    },
    saveUser() {
      this.sending = true;

      // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
        this.lastUser = `${this.form.firstName} ${this.form.lastName}`;
        this.userSaved = true;
        this.sending = false;
        this.clearForm();
      }, 1500);
    },
    validateUser() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.saveUser();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form_wrap {
  display: flex;
  justify-content: center;
}
.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
</style>
