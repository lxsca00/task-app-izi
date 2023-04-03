/*Ignore dis */
export interface ITicket {
    code: number,
    ruc: number,
    activities: number,
    enterDate: string,
    modifyDate: string,
    intState: string,
    lifecycle: number,
    state: 'open' | 'closed',
    owner: string,
}