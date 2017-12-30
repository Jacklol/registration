import{AbstractControl,ValidationErrors,FormControl,FormGroup} from "@angular/forms";
export class FormValidators{
    static emailControl(control:FormControl){
        let email = control.value;
        let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        return EMAIL_REGEXP.test(control.value) ? null : {
            emailControl: {
                valid: false
              }
          };
    }
    static Password(control:FormControl, previousControl: FormControl) : ValidationErrors | null {
        const userPassword = previousControl;
        const userRePass = control;
        if (userPassword != null && userRePass != null) {
            const Password = userPassword.value;
            const RePass = userRePass.value;
            let error = null;
       
            if (Password !==RePass) {
                error = "Passwords don't match";
              }       


              return error 
                ? {
                    Password: {
                        message: error
                    }
                } : null;

    }
    }}
  /*   static passControl(control:FormControl){
        let password = control.value;
        let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        return EMAIL_REGEXP.test(control.value) ? null : {
            emailControl: {
                valid: false
              }
          };
    } */

