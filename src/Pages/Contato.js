export const Contato = () => {
    return(
<>
        <form>
            <label>Nome:</label>
            <input type="text" required/>
            <label>Telefone:</label>
            <input type="number" required/>
            <label>Email:</label>
            <input type="Email" required/>
            <button>Enviar</button>
        </form>
</>
    )
}