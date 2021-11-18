import { PresupuestoVis } from "./Presupuesto";

export class PresupuestoDTO{
    datos:PresupuestoVis[];
    totalPresupuesto:number;
    totalPorcentajeEjecucion:number;
    totalEjecutado:number;
    totalFaltante:number;
}