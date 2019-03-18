import { Component, OnInit, Input } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-detail-tiles',
  templateUrl: './detail-tiles.component.html',
  styleUrls: ['./detail-tiles.component.css']
})
export class DetailTilesComponent implements OnInit {

  @Input() title:string = "";
  @Input() value:string = "";
  @Input() details:string = "";
  @Input() series:Array<any> = new Array<any>();
  @Input() lineColorCode:string;
  @Input() areaColorCode:string;
  public chartOptions:EChartOption;

  constructor() { }

  ngOnInit() {
    this.chartOptions = this.loadLineAreaChartOptions(this.series,this.lineColorCode,this.areaColorCode);
  }

  loadLineAreaChartOptions(data,color,areaColor) {
    let chartOption: EChartOption;
    let xAxisData:Array<any> = new Array<any>();

    data.forEach(element => {
      xAxisData.push("");
    });

    return chartOption = {
      xAxis: {
        type: 'category',
        show:false,
        data: xAxisData,
        boundaryGap: false,
      },
      yAxis: {
        type: 'value',
        show:false,
        min:1
      },
      tooltip: {
          trigger: 'axis',
          formatter: function (params, ticket, callback) {
            return '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+color+';"></span>'+params[0].value;
          }
      },
      grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        top: '0%',
        containLabel: false
      },
      series: [{
        data: data,
        type: 'line',
        showSymbol:false,
        symbolSize:1,
        lineStyle:{
          color:color,
          width:1
        },
        areaStyle: {
          color:areaColor
        }
      }]
    };
  }

}
