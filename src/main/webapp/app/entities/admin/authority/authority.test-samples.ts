import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '99379710-2f0e-4d66-bb1e-e062d1d65458',
};

export const sampleWithPartialData: IAuthority = {
  name: '3829609f-ce0d-4da2-861d-d0d6aacf8609',
};

export const sampleWithFullData: IAuthority = {
  name: '7edd19b2-ed29-41dc-bc72-7973e0a7f67a',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
