import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bad-table',
  templateUrl: './bad-table.component.html',
  styleUrls: ['./bad-table.component.scss']
})
export class BadTableComponent implements OnInit {

  @Input() data!: any[];
  @Input() headers: string[] | undefined;
  @Input() hideRows: string[] = [];
  @Input() actionButtonFn: Function | undefined;

  @Output() actionClicked = new EventEmitter();

  colVisible(key: unknown) {
    return !this.hideRows.includes(key as string);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
