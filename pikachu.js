var imagenes = []
imagenes["Burra"] = "urra.png";
imagenes["Pollito"] = "pollo.png";
imagenes["Duque"] = "cerdo.png";
imagenes["Marimondas"] = "Marimondas.png";
imagenes["Vaca"] = "vaca.png";

class chinpokomon
{
	constructor(n, v , a)
	{
		this.imagen = new Image();
		this.nombre = n;
		this.vida = v;
		this.ataque = a;
			
		this.imagen.src = imagenes[this.nombre];
	}
	
	hablar()
	{
		alert(this.nombre);
	}
	
	mostrar()
	{	
		document.body.appendChild(this.imagen);
		document.write("<br />  <strong> " + this.nombre + ":</strong> <br />" + " Vida: " + this.vida + "<br /> " + "Ataque: " + this.ataque + "<br />");
		
		
	}
	
}


var Burra = new chinpokomon("Burra", 100, 30);
var Pollito = new chinpokomon("Pollito", 80, 50);
var Duque = new chinpokomon("Duque",100, 400);
var Marimondas = new chinpokomon("Marimondas",20,30);
var Vaca = new chinpokomon("Vaca",50,10);


var coleccion = []
coleccion.push((new chinpokomon("Burra", 100, 30)));
coleccion.push((new chinpokomon("Pollito", 80, 50)));
coleccion.push((new chinpokomon("Duque",100, 400)));
coleccion.push((new chinpokomon("Marimondas",20, 30)));
coleccion.push((new chinpokomon("Vaca",50, 10)));


for(var pipe of coleccion)
{
	pipe.mostrar();
}