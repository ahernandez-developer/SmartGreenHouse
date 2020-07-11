const app = new Vue({
  el: "#login",
  data: {
    phone: null,
    password: null,
  },
  methods: {
    validate(form) {
      form.preventDefault();
      if (this.phone == "123456" && this.password == "password")
        window.location.replace("views/app.html");
    },
  },
});
