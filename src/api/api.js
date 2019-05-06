import { get, post } from './http'

export const apiAddress = p => post('meinv/?key=6c3cc98e70b23637a15ffc09d0ce11aa', p);
export const apiAddress1 = p => post('game/?key=6c3cc98e70b23637a15ffc09d0ce11aa', p);
export const apiAddress2 = p => post('guonei/?key=6c3cc98e70b23637a15ffc09d0ce11aa', p);