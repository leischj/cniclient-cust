import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {PieData} from '../customers/customers.component';
import * as D3 from 'd3';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements AfterViewInit {
  @ViewChild('piechart') element: ElementRef;
  @Input() data: PieData[];
  @Input() pieChartID: string;
  private host: D3.Selection<any>;
  private radius: number;
  private htmlElement: HTMLElement;

  constructor() { }

  ngAfterViewInit() {
    this.htmlElement = this.element.nativeElement;
    this.host = D3.select(this.htmlElement);
    this.buildPie();
  }


  private buildPie(): void {
    const width = 125;
    const height = 125;
    this.radius = Math.min(width, height) / 2;
    const opacity = .8;
    const opacityHover = 1;
    const otherOpacityOnHover = .8;
    // const values = this.data.map((data, index, arr) => data.value, );
    const tooltipMargin = 13;
    const pieColor = D3.scaleOrdinal(D3.schemeCategory10);

    // const svg = D3.select(this.htmlElement)
    const svg = D3.select('#' + this.pieChartID)
      .append('svg')
      .attr('class', 'pie')
      .attr('width', width)
      .attr('height', height);

    const g = svg.append('g')
      .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');

    const arc = D3.arc()
      .innerRadius(0)
      .outerRadius(this.radius);

    const pie = D3.pie()
      .value(function(d) { return d.value; });
    const that = this;
    const path = g.selectAll('path')
      .data(pie(this.data))
      .enter()
      .append('g')
      .append('path')
      .attr('d', arc)
      .attr('fill', (d, i: any) => pieColor(i))
      .style('opacity', opacity)
      .style('stroke', 'white')
      .on('mouseover', function(d) {

        D3.selectAll('path')
          .style('opacity', otherOpacityOnHover);
        D3.select(this)
          .style('opacity', opacityHover);

        const g1 = D3.selectAll('svg')
          .style('cursor', 'pointer')
          .append('g')
          .attr('class', 'tooltip')
          .style('opacity', 0);

        g1.append('text')
          .attr('class', 'name-text')
          .text(`${d.data.label} (${d.data.value})`)
          .attr('text-anchor', 'middle');

        const text = g1.select('text');
        const bbox = (text.node() as any).getBBox();
        const padding = 2;
        g1.insert('rect', 'text')
          .attr('x', bbox.x - padding)
          .attr('y', bbox.y - padding)
          .attr('width', bbox.width + (padding * 2))
          .attr('height', bbox.height + (padding * 2))
          .style('fill', 'white')
          .style('opacity', 0.75);
      })
      .on('mousemove', function(d) {
        console.log(this);
        const mousePosition = D3.mouse(this);
        console.log(mousePosition);
        let x = mousePosition[0] + width / 2;
        let y = mousePosition[1] + height / 2 - tooltipMargin;

        let text = D3.select('#' + that.pieChartID + ' .tooltip text');
        let bbox = (text.node() as any).getBBox();
        if (x - bbox.width / 2 < 0) {
          x = bbox.width / 2;
        } else if (width - x - bbox.width / 2 < 0) {
          x = width - bbox.width / 2;
        }

        if (y - bbox.height / 2 < 0) {
          y = bbox.height + tooltipMargin * 2;
        } else if (height - y - bbox.height / 2 < 0) {
          y = height - bbox.height / 2;
        }

        D3.select('#' + that.pieChartID + ' .tooltip')
          .style('opacity', 1)
          .style('font-size', '10px')
          .attr('transform', `translate(${x}, ${y})`);
      })
      .on('mouseout', function(d) {
        D3.selectAll('svg')
          .style('cursor', 'none')
          .select('.tooltip').remove();
        D3.selectAll('path')
          .style('opacity', opacity);
      })
      .on('touchstart', function(d) {
        D3.selectAll('svg')
          .style('cursor', 'none');
      }).each(function(d, i) { /*this._current = i;*/ });

    const legend = D3.select('#' + that.pieChartID).append('div')
      .attr('class', 'legend')
      .style('margin-top', '30px');

    const keys = legend.selectAll('#' + that.pieChartID + ' .key')
      .data(this.data)
      .enter().append('div')
      .attr('class', 'key')
      .style('display', 'flex')
      .style('align-items', 'center')
      .style('margin-right', '20px');

    keys.append('div')
      .attr('class', 'symbol')
      .style('height', '10px')
      .style('width', '10px')
      .style('margin', '5px 5px')
      .style('background-color', (d, i: any) => pieColor(i));

    keys.append('div')
      .attr('class', 'name')
      .text(d => `${d.label} (${d.value})`);

    keys.exit().remove();

  }
}
