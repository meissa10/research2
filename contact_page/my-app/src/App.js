import logo from './logo.svg';
import emailjs from 'emailjs-com';
import './App.css';

function App() {

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm(
      "service_labchrh",
      "template_ib7wmy8",
      e.target,
      "RNFAKhLOEthkZqEbL"
      ).then(res=>{
          console.log(res);

        }).catch(err =>{
          console.log(err);
        });
      
      e.target.reset();

      alert("sent");
      

      
    
  }
  return (
    <div className="App">
      <h1>Contact Form</h1>
      <form class="cf" onSubmit={sendEmail} >
        <div class="half left cf">
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email address"/>
        </div>
        <div class="half right cf">
          <textarea name="message" type="text" id="message" placeholder="Message"></textarea>
        </div>  
        <input type="submit" value="Submit" id="input-submit"/>
      </form>

      
    </div>
  );
}

export default App;


//CSS and HTNl from https://codepen.io/markmurray/pen/oNvpxw