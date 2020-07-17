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
  columnDefs: any[] = [];
  myTable: Tabulator;

  ngOnInit() {
    this.columnDefs = [
      { title: "Status", field: "status", width: 100, widthGrow: 1 },
      { title: "Company", field: "company", width: 100, widthGrow: 1 },
      { title: "InvestmentDate", field: "investmentDate", width: 150, widthGrow: 1, },
      { title: "Cost", field: "cost", width: 100, widthGrow: 1, bottomCalc:"sum", bottomCalcFormatter:"money", bottomCalcFormatterParams:{symbol:"$", precision:true}, formatter:"money", formatterParams:{symbol:"$", precision:true } },
      { title: "FMV", field: "FMV", width: 100, widthGrow: 1, bottomCalc:"sum", bottomCalcFormatter:"money", bottomCalcFormatterParams:{symbol:"$", precision:true}, formatter:"money", formatterParams:{symbol:"$", precision:true } },
      { title: "Gain", field: "gain", width: 100, widthGrow: 2, bottomCalc:"sum", bottomCalcFormatter:"money", bottomCalcFormatterParams:{symbol:"$", precision:true}, formatter:"money", formatterParams:{symbol:"$", precision:true } },
      { title: "GMultiple", field: "GMultiple", width: 100, widthGrow: 1, bottomCalc:"sum", bottomCalcParams: { precision: 2} },
      { title: "GIRR(%)", field: "GIRR", width: 100, widthGrow: 2 },
      { title: "Holding(%)", field: "holding", width: 120, widthGrow: 1 },
      { title: "TotalRaised", field: "totalRaised", width: 150, widthGrow: 1, bottomCalc:"sum", bottomCalcFormatter:"money", bottomCalcFormatterParams:{symbol:"$", precision:true}, formatter:"money", formatterParams:{symbol:"$", precision:true } },
      { title: "Valuation", field: "compValuation", width: 100, widthGrow: 1, formatter:"money", formatterParams:{symbol:"$", precision:true } }
    ];

    // reference id of div where table is to be displayed (prepend #)
    this.myTable = new Tabulator("#tabulator-div", {
      // height:"400px",
      layout:"fitColumns",
      groupBy:"status",
      groupStartOpen:true,
      groupToggleElement:"header",
      groupClosedShowCalcs:true,
      columnCalcs:"true",

  }); 
    this.myTable.setColumns(this.columnDefs);
    this.myTable.setData(CompanyData);
  }
}