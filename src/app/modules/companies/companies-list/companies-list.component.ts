import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ListAvatar } from 'src/app/core/components/lists/list-avatar/list-avatar';
import { MatDialog } from '@angular/material';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/core/components/dialog/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit {
  companies$: Observable<any>;

  listAvatar: ListAvatar = {
    attributes: [{ 1: 'name' }, { 2: 'email' }],
    iconSize: 40
  };

  constructor(
    private companiesService: CompaniesService,
    private route: Router,
    private router: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.companies$ = this.companies;
  }

  private get companies(): Observable<any> {
    return this.companiesService.companies;
  }

  public itemDetail(itemId: string): void {
    this.route.navigate([itemId], { relativeTo: this.router });
  }

  public itemEdit(itemId: string): void {
    this.route.navigate(['edit', itemId], { relativeTo: this.router });
  }

  public itemDelete(itemId: string): void {
    this.route.navigate(['delete', itemId], { relativeTo: this.router });
    this.confirmDialog();
  }

  private confirmDialog(): void {
    const message = `Você tem certeza de que quer fazer isso?`;

    const dialogData = new ConfirmDialogModel('Excluir Aplicativo', message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: dialogData
    });

    // dialogRef.afterClosed().subscribe(dialogResult => {
    //   this.result = dialogResult;
    // });
    this.route.navigate(['../../'], { relativeTo: this.router });
  }
}
