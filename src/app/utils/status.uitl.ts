export class StatusUtil{
    public static Convert(status: string): string{
        switch(status){
            case 'confirmed': return 'Confirmada';
            case 'waiting_payment': return 'Aguardando Pagamento';
            case 'canceled': return 'Cancelada';
            case 'in_transit': return 'Em trânsito';
            case 'completed': return 'Finalizada';
            default: return 'Confirmada'
        }
    }
}