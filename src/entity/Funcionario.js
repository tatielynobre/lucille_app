export class Funcionario {
    constructor(id, nome, cargo, salario) {
        this.id = id;
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }

    // metodos get e set
    getId(){
        return this.id;
    }
    getNome(){
        return this.nome;
    }
    getCargo(){
        return this.cargo;
    }
    getSalario(){
        return this.salario;
    }

    setId(id){
        this.id = id;
    }
    setNome(nome){
        this.nome = nome;
    }
    setCargo(cargo){
        this.cargo = cargo;
    }
    setSalario(salario){
        this.salario = salario;
    }

    info() {
        return `[ Id:${this.getId()}     Nome: ${this.getNome()}      Cargo: ${this.getCargo()}    Salário: ${this.getSalario()} ]`;
    }
}