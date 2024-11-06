function validateForm()

{
    var x=document.formjs.name.value;
    var y=document.formjs.address.value;
    var z=document.formjs.phonenumber.value;
    var w=document.formjs.pincode.value;

    if(x==null || x=="")
    {
        alert("please enter the name");
        document.formjs.name.focus();
        
    }

    if(y==null || y=="")
        {
            alert("please enter the address");
            document.formjs.address.focus();
            
            return false;
        }
    if(z==null || z=="")
    {
        alert("please enter phone number");
        document.formjs.phonenumber.focus();
        return false;
    }

   if( isNaN(z))
   {
    alert("please enter numbers only,alphabets not allowed");
    document.formjs.phonenumber.focus();
    return false;
   }


   if(z.length>10 || z.length<10)
   {
    alert("phone number cannot exceed 10 digits")
    document.formjs.phonenumber.focus();
        return false;
   }

   if(w==null || w=="")
    {
        alert("please enter pin code");
        document.formjs.pincode.focus();
        return false;
    }
    
   if( isNaN(w))
   {
    alert("please enter numbers only,alphabets not allowed");
    document.formjs.pincode.focus();
    return false;
   }

   if(w.length>6 || w.length<6)
   {
    alert("pin code cannot exceed 6 digits")
    document.formjs.pincode.focus();
        return false;
   }
   return true;
}


