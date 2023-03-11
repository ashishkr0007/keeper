import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"


function App(){
  return   (
       <div>
         <Header/>
          {notes.map( noteItem =>
              <Note key={noteItem.Key} 
                    title={noteItem.title}  
                    content={noteItem.content} />   )};
         <Footer/>
        </div>
        );
           }

export default App;






// function createNotes(noteItem){
//   return <Note key={noteItem.Key} 
//                title={noteItem.title}  
//                content={noteItem.content} />
// }
// function App(){
//   return   (
//        <div>
//          <Header/>
//           {notes.map(createNotes)}
//          <Footer/>
//         </div>
//         );
//            }
