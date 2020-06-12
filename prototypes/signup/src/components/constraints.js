export const constraints = {
    emailAddress: {
      presence: {
        allowEmpty: false,
        message: "^Введите свой email"
      },
      email: {
        message: "^Введите валидный email"
      }
    },
  };
  
  export default constraints;