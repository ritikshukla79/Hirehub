import {AbstractControl,ValidationErrors } from "@angular/forms";
   
export class CustomerrorsValidators{
    

    //#Phonenumbercheck
    static check(control:AbstractControl):ValidationErrors| null{
        if((control.value as string).length<10 || (control.value as string).includes(" ")){
          return {check:true}
        }
        return (null);
    }

    // #passwordcheck
    static passwordcheck(control:AbstractControl):ValidationErrors| null{
       if((control.value as string).search(/['@','#','$','&']/)<=0 || !((control.value.length)>=6 )){
            return {passwordcheck:true}
        }   
        return null;
    }

   
    
    
}