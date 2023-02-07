function PlaceAnimation(index, texto, letra, holder) {
    const SearchInput  = document.getElementById('pesquisa');

    const SearchArray = [
    'Como baixar o App',
    'Ajudando o meio ambiente',
    'Soluções para a preservação ambiental',
    'Despejo inadequado de eletrônicos'];

    texto = SearchArray[index];

    if(letra < texto.length) {
        setTimeout(() => {
            holder += texto[letra];
            SearchInput.placeholder = `${holder}|`;
            letra += 1;
            PlaceAnimation(index, texto, letra, holder);
        }, 100);
    }
    else {
        if((letra >= texto.length) && (letra <= texto.length*2)) {
            setTimeout(() => {
                holder = holder.slice(0, -1);
                SearchInput.placeholder = holder;
                letra += 1;
                PlaceAnimation(index, texto, letra, holder);
            }, 20);
        }
        else {
            index = (index+1)%SearchArray.length;
            holder = '';
            texto = SearchArray[index];
            letra = 0;
            PlaceAnimation(index, texto, letra, holder);
        }
    }
}