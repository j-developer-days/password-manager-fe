import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupAccountService } from 'src/app/services/group-account.service';

@Component({
  selector: 'app-group-account',
  templateUrl: './group-account.component.html',
  styleUrls: ['./group-account.component.css']
})
export class GroupAccountComponent implements OnInit {

  groupAccounts$: Observable<string[]> | null = null;

  constructor(private groupAccountService: GroupAccountService) { }

  ngOnInit(): void {
    this.groupAccounts$ = this.groupAccountService.getGroupAccounts();
  }

}
