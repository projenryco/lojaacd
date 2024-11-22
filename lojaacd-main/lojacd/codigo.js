
window.onload = function()
{
var corpoDaPagina = document.querySelector('body');
var aumentarTexto = document.getElementById('aumentar-texto');
var diminuirTexto = document.getElementById('diminuir-texto');

var fontsize = 100;

var qntaumentarDiminuir = 10;

aumentarTexto.addEventListener
('Click', function(event)
{
fontSize = fontSize + qntAumentarDiminuir;
corpoDaPagina.style.fontSize = fontSize + '%';
}
);
diminuirTexto.addEventListener
('Click', function(event)
    {
    fontSize = fontSize - qntAumentarDiminuir;
    corpoDaPagina.style.fontSize = fontSize + '%';
    }
);
}





document.getElementById('alternar-contraste').addEventListener
('Click', function()
{
document. body. classList.toggle('alto-contraste');
}
);
