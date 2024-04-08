
export const checkValidation = (email, pass)=>{

    const emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passwordValidation =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pass);

    if(!emailValidation) return "Email invalid!";
    if(!passwordValidation) return "Invalid password";

    return null;
};

