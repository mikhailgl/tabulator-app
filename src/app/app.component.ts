import { Component, OnInit } from '@angular/core';
import Tabulator from 'tabulator-tables';
import { CompanyData } from './DataFile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DemoTabulator';
  people: IPerson[] = [];
  columnDefs: any[] = [];
  myTable: Tabulator;

  ngOnInit() {
    this.people = [
      { id: 1, firstName: "John", lastName: "Smith", state: "Ohio" },
      { id: 2, firstName: "Jane", lastName: "Doe", state: "Iowa" },
      { id: 3, firstName: "Bill", lastName: "Great", state: "Hawaii" },
      { id: 4, firstName: "Ted", lastName: "Adventure", state: "Arizona" }
    ];

    this.columnDefs = [
      { title: "Status", field: "status", width: 100, widthGrow: 1 },
      { title: "Company", field: "company", width: 100, widthGrow: 1 },
      { title: "InvestmentDate", field: "investmentDate", width: 100, widthGrow: 1 },
      { title: "Cost", field: "cost", width: 100, widthGrow: 1, bottomCalc:"sum", formatter:"money" },
      { title: "FMV", field: "FMV", width: 100, widthGrow: 1, bottomCalc:"sum", formatter:"money" },
      { title: "Gain", field: "gain", width: 100, widthGrow: 2, bottomCalc:"sum", formatter:"money" },
      { title: "GMultiple", field: "GMultiple", width: 100, widthGrow: 1, bottomCalc:"sum" },
      { title: "GIRR", field: "GIRR", width: 100, widthGrow: 2 },
      { title: "Holding", field: "holding", width: 100, widthGrow: 1 },
      { title: "TotalRaised", field: "totalRaised", width: 100, widthGrow: 1, bottomCalc:"sum", formatter:"money" },
      { title: "Valuation", field: "compValuation", width: 100, widthGrow: 1, formatter:"money" }
    ];

    // reference id of div where table is to be displayed (prepend #)
    this.myTable = new Tabulator("#tabulator-div", {
      height:"400px",
      layout:"fitColumns",
      groupBy:"status",
      groupStartOpen:true,
      groupToggleElement:"header",
      groupClosedShowCalcs:true,
      columnCalcs:"both",

  }); 
    this.myTable.setColumns(this.columnDefs);
    this.myTable.setData(CompanyData);
  }
}

interface IPerson {
  id: number,
  firstName: string,
  lastName: string,
  state: string
}