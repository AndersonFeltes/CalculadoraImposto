
/* 
Faça um aplicativo, utilizando html e javascript, que receba os dados de uma série de pessoas, 
obtendo o nome , o numero de dependentes e o valor do salário bruto de uma pessoa e 
calcule o valor do salário líquido deste indivíduo. 
Proceda os descontos de acordo com as tabelas do INSS e IRPF. 
O programa deve apresentar em uma tela apropriada o valor do salário liquido 
e o valor dos respectivos descontos.

Ex:
Nome | Salario Bruto | % desconto INSS | Desconto INSS | % desconto IRPF | Desconto IRPF | Salário Líquido*/

let formImposto=document.querySelector("#form-imposto");
let nome=document.querySelector("#nome");
let dependentes=document.querySelector("#dependentes");
let salarioBruto=document.querySelector("#salarioBruto");
let tbody=document.querySelector("tbody");
let listaPessoas=new Array ();



let Pessoa=function(){
nome:"";
dependentes:"";
salarioBruto:"";  
}

document.querySelector("#registro").onclick=function(){
    pessoa=new Pessoa();
    pessoa.nome=nome.value;
    pessoa.dependentes=dependentes.value;
    pessoa.salarioBruto=salarioBruto.value;

    listaPessoas.push(pessoa)
    document.querySelector("#resultado").innerHTML="Registrado";

    nome.value="";
    dependentes.value="";
    salarioBruto.value="";          

    setTimeout(function(){
        document.querySelector("#resultado").innerHTML=""
    },3000)

    return false;
}

document.querySelector("#encerrar").onclick=function(){

    listaPessoas.forEach(function(pessoa){
        let SalarioLiquido = pessoa.salarioBruto
        let DescontoINSS = SalarioLiquido 
        let DescontoIRRF = SalarioLiquido 
        let Dependentes = pessoa.dependentes
        
        if(SalarioLiquido <=1045){
            DescontoINSS = SalarioLiquido *0.075
            DescontoINSS=Math.round(DescontoINSS*100)/100;  
        }
        else if(SalarioLiquido >=1046 && SalarioLiquido <=2089.60){
            DescontoINSS = SalarioLiquido*0.09
            DescontoINSS=Math.round(DescontoINSS*100)/100;
        }
        else if(SalarioLiquido >=2089.61 && SalarioLiquido <=3134.40){
            DescontoINSS = SalarioLiquido *0.12
            DescontoINSS=Math.round(DescontoINSS*100)/100;
        }
        else if(SalarioLiquido >=3134.41 && SalarioLiquido <=6101.06){
            DescontoINSS = SalarioLiquido *0.14
            DescontoINSS=Math.round(DescontoINSS*100)/100;
        }
        else if(SalarioLiquido >6101.06){
            DescontoINSS = SalarioLiquido *0.14
            DescontoINSS=Math.round(DescontoINSS*100)/100;
        }

        Dependentes = Dependentes*189.59


        SalarioLiquido = SalarioLiquido  - Dependentes
        SalarioLiquido=Math.round(SalarioLiquido*100)/100;

        SalarioLiquido = SalarioLiquido - DescontoINSS
        SalarioLiquido=Math.round(SalarioLiquido*100)/100;

        
        DescontoIRRF = SalarioLiquido
        if(DescontoIRRF<=1903.98){
            DescontoIRRF = 0
        }
        else if(DescontoIRRF>=1903.99 && DescontoIRRF<=2826.66){
            DescontoIRRF = DescontoIRRF*0.075
            DescontoIRRF=Math.round(DescontoIRRF*100)/100;
        }
        else if(DescontoIRRF>=2826.67 && DescontoIRRF<=3751.05){
            DescontoIRRF = DescontoIRRF*0.15
            DescontoIRRF=Math.round(DescontoIRRF*100)/100;
        }
        else if(DescontoIRRF>=3751.06 && DescontoIRRF<=4664.68){
            DescontoIRRF = DescontoIRRF*0.22
            DescontoIRRF=Math.round(DescontoIRRF*100)/100;
        }
        else if(DescontoIRRF>=4664.69 ){
            DescontoIRRF = DescontoIRRF*0.275
            DescontoIRRF=Math.round(DescontoIRRF*100)/100;
        }

        SalarioLiquido = SalarioLiquido - DescontoIRRF
        SalarioLiquido=Math.round(SalarioLiquido*100)/100;

        let tr=document.createElement("tr")
        let tdNome=document.createElement("td")
        let txNome=document.createTextNode(pessoa.nome)
        tdNome.append(txNome)
        tr.append(tdNome)

        let tdDescontoINSS=document.createElement("td")
        let txDescontoINSS=document.createTextNode(DescontoINSS)
        tdDescontoINSS.append(txDescontoINSS)
        tr.append(tdDescontoINSS)

        let tdDependentes=document.createElement("td")
        let txDependentes=document.createTextNode(Dependentes)
        tdDependentes.append(txDependentes)
        tr.append(tdDependentes)
        
        let tdDescontoIRRF=document.createElement("td")
        let txDescontoIRRF=document.createTextNode(DescontoIRRF)
        tdDescontoIRRF.append(txDescontoIRRF)
        tr.append(tdDescontoIRRF)

        let tdSalarioLiquido=document.createElement("td")
        let txSalarioLiquido=document.createTextNode(SalarioLiquido)
        tdSalarioLiquido.append(txSalarioLiquido)
        tr.append(tdSalarioLiquido)
        
        tbody.append(tr)

        document.querySelector("#registro").onclick=function(){
            return false;
        }
        document.querySelector("#encerrar").onclick=function(){
            return false
        }
        
        
    })
    return false;
}

