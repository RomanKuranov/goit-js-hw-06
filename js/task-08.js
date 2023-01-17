const formEl = document.querySelector('.login-form');


const onFormELSubmit = (event)=> {
    event.preventDefault();
    const {
        elements: { email, password }
      } = event.currentTarget;

      if(email.value === "" || password.value === "") {
        return alert("Все поля должны быть заполнены");
      };

     console.log({"Email":email.value, "Password":password.value});
     
      event.currentTarget.reset();
};
formEl.addEventListener( 'submit', onFormELSubmit);