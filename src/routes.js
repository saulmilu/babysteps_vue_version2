import Geral from './components/Geral'
import Home from './components/Home'
import AlocList from "./components/alocacoes/list";
import AlocForm from "./components/alocacoes/form";
import Alocacoes from "./components/Alocacoes";

export const routes = [
    {path : '/geral', component : Geral},
    {path : '/home', component : Home},
    {path : '/alocacoes', component : Alocacoes, children : [{path : '', name: 'alocList' ,component : AlocList}, {path: 'form', name: 'alocForm', component : AlocForm}]}
]

