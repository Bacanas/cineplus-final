

    //importações 
    import express from 'express'
    import { sqlConfig } from "./config.js"
    import sql from 'mssql';

    //conexão com MySql (banco)
    const pool = new sql.ConnectionPool(sqlConfig)
    await pool.connect();
    const routes = express.Router();

    //rota GET que vai exibir todos os filmes
    routes.get('/filmes', async (req,res)=>{

        try{
            const { recordset }  = await pool.query`SELECT Filmes.id_filme, Filmes.capa, Filmes.titulo, Filmes.ano, Diretores.nome AS nome_diretor, Generos.nome AS nome_genero FROM Filmes JOIN Diretores ON Filmes.id_diretor = Diretores.id_diretor JOIN Generos ON Filmes.id_genero = Generos.id_genero`
            return res.status(200).json(recordset)
        }

        catch{
            return res.status(501).json('erro ao consultar filmes')
        }

    })

    routes.get('/busca/:pesquisa', async (req,res)=>{

        console.log(req.params)
        const busca  = 
        console.log(busca)
  
        try{
            const { recordset }  = await pool.query`SELECT Filmes.id_filme, Filmes.capa, Filmes.titulo, Filmes.ano, Diretores.nome AS nome_diretor, Generos.nome AS nome_genero FROM Filmes JOIN Diretores ON Filmes.id_diretor = Diretores.id_diretor JOIN Generos ON Filmes.id_genero = Generos.id_genero WHERE Filmes.titulo LIKE '${busca}%'`
            return res.status(200).json(recordset)
        }

        catch{
            return res.status(501).json('erro ao consultar filmes')
        }

    })


       
    //exportar para o app
    export default routes




   