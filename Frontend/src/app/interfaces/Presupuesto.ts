export interface Presupuesto{
    id:number;
    id_concepto:number;
    anio:Date;
    ppto_asignado:number;
    porce_ppto_alcanzado:number;
    ppto_alcanzado:number;
    ppto_restante:number;
    periodo:string;
}
export interface PresupuestoVis{
    id:number;
    categoria:string;
    concepto:string;
    anio?:Date;
    ppto_asignado:number;
    porce_ppto_alcanzado:number;
    ppto_alcanzado:number;
    ppto_restante:number;
    periodo?:string;
}
