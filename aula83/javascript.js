import {Cxmsg} from "../aula80 versão 3/cx.js";
const callback_ok = ()=>{

}

const callback_naook = ()=>{
    const config = {
        cor:"#800",
        tipo:"ok",
        textos:null,
        comando_sn:null, 

    }
    Cxmsg.mostrar(config,"Erro","Login não efetuado! Usuário ou senha incorretos. ");

}

const configlogin = {
    cor:"048",
    img:"logo.png",
    endpoint: "https://844f1358-4147-47fb-8cda-5d5e2e27efc8-00-3s860dsgbw3kv.kirk.replit.dev"
}

Login.login(callback_ok,callback_naook,configlogin)