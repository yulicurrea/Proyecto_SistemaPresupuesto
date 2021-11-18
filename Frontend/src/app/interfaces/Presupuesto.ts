export interface Presupuesto{
    id:number;
    id_concepto:number;
    anio:number;
    ppto_asignado:number;
    porce_ppto_alcanzado:number;
    ppto_alcanzado:number;
    ppto_restante:number;
}
export interface PresupuestoVis{
    id:number;
    categoria:string;
    concepto:string;
    anio:number;
    ppto_asignado:number;
    porce_ppto_alcanzado:number;
    ppto_alcanzado:number;
    ppto_restante:number;
}
