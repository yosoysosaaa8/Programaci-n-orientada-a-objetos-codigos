class HéroeDeAventura{
    nombre: string;
    nivel: number;
    estaVivo: boolean;
    fechaCreacion: Date;
    habilidades: string [];
    estadisticas: string;

    constructor(nombre: string, habilidades: string[]){
        this.nombre = nombre;
        this.nivel = 1;
        this.estaVivo = true;
        this.fechaCreacion = (new Date ());
        this.habilidades = habilidades;
        this.estadisticas = "50";

    }
    recibirDanio(puntos: number): void{
        puntos=50-1;
        if(puntos<=0){
            this.estaVivo = false;
        }
    }
    subirNivel(): void{
        this.nivel = this.nivel + 1;
        console.log(this.nombre+"ha subido al nivel"+this.nivel);
    }
    generarFicha(): string{
        return "Heroe:"+this.nombre+"Nivel:"+this.nivel+"Estado:"+this.estaVivo;
    }
}