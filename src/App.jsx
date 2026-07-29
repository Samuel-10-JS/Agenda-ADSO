export default function App() {
const fecha = new Date().toLocaleString();

return ( 
<main>
    <h1>Hola SENA</h1>
    <p style={{color: "green"}}>Soy Samuel Estrada Hernandez y estoy en mi primera clase de reactJS y espero aprender mucho sobre el front con react ya que me quiero especializar en toda la linea de javascript</p>
    <p>{fecha}</p>
    <p>nose</p>
</main>
  )
}