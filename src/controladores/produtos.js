const knex = require('../conexao');

const listarProdutos = async (req, res) => {
    const { id } = req.usuario;

    try {        
        const produtos = await knex('produtos').where({usuario_id: id});

        return res.status(200).json(produtos);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const obterProduto = async (req, res) => {
    const { id } = req.params;
    const idUsuarioLogado = req.usuario;
    
    try {
        
        const produto = await knex('produtos').where({ id }).first();

        if (!produto) {
            return res.status(404).json({ mensagem: "Produto não encontrado" });
        }

        if (produto.usuario_id !== idUsuarioLogado.id) {
            return res.status(400).json({ mensagem: "Este produto não pertence ao usuário logado" });
        }

        return res.status(200).json(produto);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}


const cadastrarProduto = async (req, res) => {
    const { id } = req.usuario;

    const { nome, estoque, preco, categoria, descricao, imagem } = req.body;

    if (!nome) {
        return res.status(404).json('O campo nome é obrigatório');
    }

    if (!estoque) {
        return res.status(404).json('O campo estoque é obrigatório');
    }

    if (!preco) {
        return res.status(404).json('O campo preco é obrigatório');
    }

    if (!descricao) {
        return res.status(404).json('O campo descricao é obrigatório');
    }

    try {
        
        const novoProduto = await knex('produtos').insert({ usuario_id: id, nome, estoque, preco, categoria, descricao, imagem }).debug();

        if (!novoProduto) {
            return res.status(400).json('O produto não foi cadastrado');
        }

        return res.status(200).json('O produto foi cadastrado com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const atualizarProduto = async (req, res) => {

    const idUsuarioLogado = req.usuario;
    
    const { id } = req.params;

    const { nome, estoque, preco, categoria, descricao, imagem } = req.body;

    if (!nome && !estoque && !preco && !categoria && !descricao && !imagem) {
        return res.status(404).json('Informe ao menos um campo para atualizaçao do produto');
    }

    try {

        const produtoExistente = await knex('produtos').where({ id, usuario_id: idUsuarioLogado.id}).first().debug();

        if (!produtoExistente) {
            return res.status(400).json('Produto não encontrado');
        }

        const updateProduto = await knex('produtos').update({ nome, estoque, preco, categoria, descricao, imagem }).where({ id });

        return res.status(200).json('produto foi atualizado com sucesso.');

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const excluirProduto = async (req, res) => {
    const idUsuarioLogado = req.usuario;
    const { id } = req.params;

    try {
        const produtoExistente = await knex('produtos').where({ id, usuario_id: idUsuarioLogado.id}).first().debug();

        if (!produtoExistente) {
            return res.status(404).json('Produto não encontrado');
        }

        const produtoExcluido = await knex('produtos').where({ id }).del();

        if (!produtoExcluido) {
            return res.status(400).json("O produto não foi excluido");
        }

        return res.status(200).json('Produto excluido com sucesso');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    listarProdutos,
    obterProduto,
    cadastrarProduto,
    atualizarProduto,
    excluirProduto
}