import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupAccountService } from 'src/app/services/group-account.service';

@Component({
  selector: 'app-group-account',
  templateUrl: './group-account.component.html',
  styleUrls: ['./group-account.component.css']
})
export class GroupAccountComponent implements OnInit {

  groupAccounts: string[] | null = null;

  constructor(private groupAccountService: GroupAccountService) { }

  ngOnInit(): void {
    this.getGroupAccounts();
  }

  createGroupAccount(groupAccount: string): void {
    this.groupAccountService.createGroupAccount(groupAccount).subscribe((response) => {
      console.log("success created", response);
      this.getGroupAccounts();
    });
  }

  private getGroupAccounts(): void {
    this.groupAccountService.getGroupAccounts().subscribe((response) => {
      console.log("respionse get ", response)
      this.groupAccounts = response;
    });
  }

}
