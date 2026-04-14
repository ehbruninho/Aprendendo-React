import "./ItemForm.css";

function ItemForm() {
  return (
    <div>
      <form className="form-cadastro">
        <h2> Cadastro de Clientes</h2>
        <input placeholder="Nome" type="text" id="nome" name="nome" />
        <input placeholder="Email" type="text" id="email" name="email" />
        <input
          placeholder="Telefone"
          type="text"
          id="telefone"
          name="telefone"
        />
        <input
          placeholder="Endereço"
          type="text"
          id="endereco"
          name="endereco"
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
export default ItemForm;
