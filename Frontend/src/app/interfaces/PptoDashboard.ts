export class PptoDashboard{
    id: number;
    concepto:String;
    ppto_asignado: number;
    ppto_alcanzado:number;
}
export class PptoTotalDashboard{
    categoria:String;
    total_ppto_asignado: number;
	total_ppto_alcanzado: number;
	total_ppto_restante: number;
}

export class porcentajeDashboard{
    id: number;
    concepto:String;
    porce_ppto_alcanzado:number;
}
