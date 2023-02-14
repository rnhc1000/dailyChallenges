#!/bin/bash

senha="biarenma"
diretorios=("01-DiplomataPina" "02-DiplomataDelicatessen" "03-TeccapComercio" "04-PadariaDiplomata")
export ANO="`date +%Y`"
export PATH_DIPLOMATA_CSV=/home/concilia/clientes/Diplomata/arquivos/movimentoVendas/${ANO}
export PATH_DIPLOMATA_MDB=/home/vftp/diplomata/

echo ${ANO}
echo ${PATH_DIPLOMATA_CSV}

# --- Inicia a Conversao dos Arquivos de PDF para TXT
for i in `seq 0 3`;
do  
    cd ${PATH_DIPLOMATA_CSV}/${diretorios[$i]}

    /bin/cp -Rv ${PATH_DIPLOMATA_MDB}/${diretorios[$i]}/LJ*.pdf ${PATH_DIPLOMATA_CSV}/${diretorios[$i]}

    /usr/bin/find . -name "*LJ*.pdf" -type f | while read a
   
    do

        /usr/bin/pdftotext -raw -nopgbrk ${a} 

    done

done

# --- Fim da Conversao dos Arquivos

# --- Tratamento do Arquivo Recebido
for i in `seq 0 3`;
do
    cd ${PATH_DIPLOMATA_CSV}/${diretorios[$i]}
    /usr/bin/find . -name "*LJ*.txt" -type f | while read a
    do  
        sed -i"" '1,7d' ${a}
        sed -i"" '$d'   ${a}
        sed -i"" '$d'   ${a}
        sed -i"" 's/Data/Data\ Hora/g'  ${a}
        sed -i"" 's/DIPLOMATA\ /DIPLOMATA-/g'  ${a}
        sed -i"" 's/Venda\ Débito\ à\ Vista/Venda-Débito-à-Vista/g'   ${a}
        sed -i"" 's/Venda\ Crédito\ à\ Vista/Venda-Crédito-à-Vista/g' ${a} 
        sed -i"" 's/Venda\ Voucher/Venda-Voucher/g' ${a}
        sed -i"" 's/VISA\ Crédito/VISA-Crédito/g' ${a}
        sed -i"" 's/VISA\ Electron/VISA-Electron/g' ${a}
        sed -i"" 's/ELO\ Débito/ELO-Débito/g' ${a}
        sed -i"" 's/ELO\ Crédito/ELO-Crédito/g' ${a}
        sed -i"" 's/GREEN\ /GREEN-/g' ${a}
        sed -i"" 's/TICKET\ /TICKET-/g' ${a}
        sed -i"" 's/\ /;/g' ${a}
    done
done

sep=;
for i in `seq 0 3`;
do
    cd ${PATH_DIPLOMATA_CSV}/${diretorios[$i]}
    /usr/bin/find . -name "*LJ*.txt" -type f | while read c
    do
        cat ${c} >> tmp.file
    done
done

for i in `seq 0 3`;
do
    cd ${PATH_DIPLOMATA_CSV}/${diretorios[$i]}
    /usr/bin/find . -name "*tmp.file*" -type f | while read b
    do
        /bin/sed -i"" "s/^/insert\ into\ movimento_loja(datatransacao,horatransacao,tipotransacao,produtotransacao,numerocupom,operadorcaixa,valortotal,numeroloja,numerocaixa)\ values(/g" ${b}
        /bin/sed -i"" "s/$/\)\;/g" ${b}
        #/usr/bin/mysql -u DIPLOMATA -p DIPLOMATA -pM4n4g3rS4b! < tmp.file
    done
done
