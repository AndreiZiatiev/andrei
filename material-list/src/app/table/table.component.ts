import { Component, ViewChild,AfterViewInit } from '@angular/core';
import {User} from '../../interface';
import {DatasourceService} from '../datasource.service'

import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit{

 
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource<User>();
  displayedColumns = ['id', 'name', 'gender', 'email'];
  filterValue: string;
  selectedColumn='name'

  constructor(private datasource:DatasourceService) { 
  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<User>();
    this.datasource.getUsers().subscribe((users) => {
      this.dataSource = users;
     })
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}
