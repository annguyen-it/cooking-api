import { Provider } from '@nestjs/common';
import { RepositoryConstant } from 'src/common/constants';
import { File } from '../file/entities';

export const uploadProvider: Provider[] = [
  {
    provide: RepositoryConstant.IMAGE,
    useValue: File,
  },
];
