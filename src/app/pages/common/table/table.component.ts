import { Component,Input } from '@angular/core';
import { RecordI } from 'src/app/model/records.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input()
  tableList:RecordI[]=[]

}
