import axios from "axios";
import { promises } from "dns";
import { Tracing } from "trace_events";


type api =  {
    
    postId: string,
    id: string,
    name: string,
    email: string,
    body: string
}

type days = {
    details: string;
}



const app = async(): Promise<void> =>{
  
    const url = `https://jsonplaceholder.typicode.com/users`

    try {
         let response = await axios.get<api[]>(url)
        //  let data = response;
        //  console.log(data)
        response.data.forEach(deta => {
            console.log(deta.name)
        })
        
    }
    catch (err) { 
      console.log(err)
    }
}

app()