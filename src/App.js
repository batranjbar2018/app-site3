import React from 'react';
import Header from './Components/Header';
import ContactUs from './Components/ContactUs'
import Comment from './Components/Comment';

function App() {
        const [name , setName] = React.useState('');
         const getName=name =>setName(name);
        
        const onCommentSubmit=(name,email,comment) =>{ 
       
                  console.log("name ==> ",name);
                  console.log("email ==> ",email);
                  console.log("comment==> ",comment);

        };

        return(<>
               <Header title={name}  />
               <div> <ContactUs onFormSubmit={getName}/></div>   
               <div><Comment onFormSubmit={onCommentSubmit}/></div>       
              </>);
   }

export default App;