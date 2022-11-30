
let nombre=prompt("Buenas profe! Por favor ingresa el curso que deseas cargar");


alert("hola! "+nombre + "\nBienvenidx a Coder-class, la app facil y rapida para cargar tu planilla escolar  \n Empecemos!!" )
let cantidadA=parseInt (prompt("¿Cuantos alumnos son?"));
let aplazados=0;
let aprob=0;
let desap=0;

function promedi(n1,n2,n3){
let res= (n1+n2+n3)/3;
return res;
}

function cargarNotas(){
    nota1= parseInt (prompt("Ingrese la nota del 1 er trimestre "));
    nota2= parseInt (prompt("Ingrese la nota del 2 do trimestre "));
    nota3= parseInt (prompt("ingrese la nota del 3 er trimestre "));
    // let promedio= (nota1+nota2+nota3)/3;
 let promedio=promedi(nota1,nota2,nota3);
    return promedio;
}
for(let person=1;person<=cantidadA;person++){
let prom=cargarNotas();
   alert("El promedio del alumno "+person+" es "+prom);
    if(prom<=4){
aplazados=aplazados+1;
    } else if(prom>=4 && prom<=6){
        desap=desap+1;
    } else{
        aprob=aprob+1;
    }
}

alert("Resumen de Calificaciones Finales de "+nombre+"\nLa cantidad de aplazados es " +aplazados+"\nLa cantidad de Desaprobados es "+ desap+ "\nLa cantidad de Aprobados es "+ aprob);
