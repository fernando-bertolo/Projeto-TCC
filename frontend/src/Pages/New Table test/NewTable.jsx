import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
    Main, 
    SectionListagem, 
    DivTitulo,
    PrimeiraDivTitulo,
    DivSegundaTitulo
} from "./NewTableStyle"
import { useState, useEffect } from 'react';
import axios from 'axios';
import BotoesListagem from '../../Components/ButtonMUI/ButtonMUI';
import ModalDialog from '../../Components/DialogMUI/DialogMUI';
import Menu from "../../Components/Menu/index";





const columns = [
  { field: 'id', headerName: 'ID', width: 300 },
  { field: 'nome', headerName: 'Nome', width: 150 },
  { field: 'usuario', headerName: 'Usuário', width: 130 },
  {
    field: 'email',
    headerName: 'E-mail',
    type: 'number',
    width: 250,
  },
];

function NewTable() {


    const [data, setData] = useState([]);

    useEffect(() => {
        const buscaUsuarios = () => {
            axios.get("http://localhost:3010/usuarios")
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => {
                    console.error('Erro ao buscar usuários:', error);
                });
        };

        buscaUsuarios();
    }, []);

    
    const rowsUser = data.map((usuario) => ({
        id: usuario.id,
        nome: usuario.nome,
        usuario: usuario.usuario,
        email: usuario.email
    }))
    


  return (
    <Main>

        <SectionListagem>
            <DivTitulo>
                <PrimeiraDivTitulo>
                    <ModalDialog></ModalDialog>
                    <h3>Listagem de Usuários</h3>
                </PrimeiraDivTitulo>
            </DivTitulo>
            <div style={{ height:"90%", width: '100%'}}>
                <DataGrid
                    rows={rowsUser}
                    columns={columns}
                    initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                    }}
                    checkboxSelection
                    style={{borderRadius: 10, backgroundColor: "#FFF"}}
                />
            </div>
        </SectionListagem>
    </Main>
  );
}


export default NewTable;