function validate(field, type){
    console.log("Inside validate")
    return new Promise((resolve, reject)=>{
        console.log(type)
        switch(type){
            case 'number': 
                var pattern=new RegExp('^\\d*$');
                if(pattern.test(field)){
                    return resolve({
                        status: true,
                        msg: "true"
                    })
                   
                } else {
                    return resolve({
                        status: false,
                        msg: "field should be a number"
                    })
                    
                }

            case 'email': 
                if(field.indexOf('@')!== -1){
                    return resolve({
                        status: true,
                        msg: "true"
                    })
                } else 
                return resolve({
                    status:false,
                    msg: "field should have @ in it"
                })
            
            default: 
                return true

            case 'mandatory':
                if(field !==''){
                    return resolve({
                        status: true,
                        msg: "true"
                    })
                } else 
                return resolve({
                    status:false,
                    msg: "field is mandatory"
                })
            
        }

    });
    
}
export default validate