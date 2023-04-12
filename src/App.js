import './App.css';

import Button from 'react-bootstrap/Button';


function App() {
  return (
    <div>
      <form onSubmit={contarvocales}>
        <p>Ingrese texto:
          <input type="text" name="texto"  id='texto'/>
        </p>
        <p>
          <Button>
          <input type="submit" value="Alerta" />
          </Button>
        </p>
      </form>
    </div>
  );
}



function contarvocales(c){
  c.preventDefault();
  let a1=String(c.target.texto.value);
  const ver=a1;
 let contadorvocales = 0;
 const vocales = "aeiouAEIOU";

 for(let i = 0; i < c.target.texto.value.length; i++){
  if (vocales.indexOf(c.target.texto.value[i]) !==-1 ){
    contadorvocales++;
  }
} 

  

alert('Dice: '+ver+' Tiene: '+contadorvocales+' vocales')



}

export default App;