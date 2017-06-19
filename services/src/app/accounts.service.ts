import { Injectable, EventEmitter } from '@angular/core'; 

import { LoggingService } from './logging.service';

@Injectable()
export class AccountsService {
    statusChanged = new EventEmitter<string>();

    accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(
    private loggingService: LoggingService
  ) {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
    this.loggingService.logStatusChange(status);
  }

  upddateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
