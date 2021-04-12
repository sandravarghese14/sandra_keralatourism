
let email = document.getElementById("email");
let numb = document.getElementById("number");
let pws = document.getElementById("pws");
var conpws = document.getElementById("conpws");

function validate(){
  let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
  let pass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
  let num=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  let n=/^[0-9]{10,10}$/

  if(email.value==""||pws.value=="")
    {
      alert("No field should be empty!");
      return false;
    }

    else if(regexp.test(email.value)==false){ 
      alert("You have entered an invalid email address!"); 
      return false;
    }
    else if(num.test(numb.value)==false && n.test(numb.value)==false){
      alert("Enter valid phone number!")
      
      return false;
    }

    else if(pass.test(pws.value)==false)
    {
     alert("Must contain atleast one number,one uppercase,lowercase letter, and at least 8 characters!")
    return false;
    }
  }


  function passwordChanged() {
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{6,}).*", "g");
    var pws = document.getElementById("pws");
    if (pws.value.length == 0) {
        strength.innerHTML = 'Type Password';
    } else if (false == enoughRegex.test(pws.value)) {
        strength.innerHTML = 'More Characters';
    } else if (strongRegex.test(pws.value)) {
        strength.innerHTML = '<span style="color:green">Strong!</span>';
    } else if (mediumRegex.test(pws.value)) {
        strength.innerHTML = '<span style="color:orange">Medium!</span>';
    } else {
        strength.innerHTML = '<span style="color:red">Weak!</span>';
    }
}
