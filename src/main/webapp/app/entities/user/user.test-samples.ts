import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 4564,
  login: 'w2@t',
};

export const sampleWithPartialData: IUser = {
  id: 27863,
  login: '-CL|j@A\\HbHIo\\uuPSF7h\\oBvaHC',
};

export const sampleWithFullData: IUser = {
  id: 6250,
  login: 'TEBhpC@JUx6u\\?M6\\oA\\!gV\\KiLH',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
